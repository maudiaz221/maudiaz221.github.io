import type { GitHubUser, GitHubRepo } from '@/types/github';

export async function fetchGitHubUser(): Promise<GitHubUser> {
  const res = await fetch('/api/github/user', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub user');
  }

  return res.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch('/api/github/repos', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }

  return res.json();
}
