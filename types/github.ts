export interface GitHubUser {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}
