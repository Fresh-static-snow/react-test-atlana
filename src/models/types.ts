export interface IUser {
  id: number;
  image: string;
  login: string;
  avatar_url: string;
}

export interface IUserData {
  id: number;
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  bio: string;
  public_repos: number;
  repos_url: string;
  email: string;
  location: string;
  created_at: string;
}

export interface IUserRepo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}
