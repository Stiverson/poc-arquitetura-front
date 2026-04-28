import { useQuery } from '@tanstack/react-query';
import { fetchRepositories, type Repository } from '../services/githubService';

export const useRepositories = (username: string) => {
  return useQuery<Repository[], Error>({
    queryKey: ['repositories', username], // A chave de cache do React Query
    queryFn: () => fetchRepositories(username), // A função do serviço que vai buscar os dados
    enabled: !!username, // Só dispara a requisição se o username não for vazio
  });
};