import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';
import { siteConfig } from '@/data/config';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET() {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username: siteConfig.githubUsername,
      sort: 'updated',
      per_page: 100,
    });

    // Filter to featured repos
    const featured = data.filter((repo) =>
      siteConfig.featuredRepos.includes(repo.name)
    );

    return NextResponse.json(
      featured.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        updated_at: repo.updated_at,
      }))
    );
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}

export const revalidate = 3600;
