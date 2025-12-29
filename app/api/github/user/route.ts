import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';
import { siteConfig } from '@/data/config';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Optional: for higher rate limits
});

export async function GET() {
  try {
    const { data } = await octokit.rest.users.getByUsername({
      username: siteConfig.githubUsername,
    });

    return NextResponse.json({
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      public_repos: data.public_repos,
      followers: data.followers,
      html_url: data.html_url,
    });
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}

export const revalidate = 3600; // Revalidate every hour
