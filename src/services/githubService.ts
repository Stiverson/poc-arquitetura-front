export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

export const fetchRepositories = async (username: string): Promise<Repository[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar repositórios');
  }

  return response.json();
};