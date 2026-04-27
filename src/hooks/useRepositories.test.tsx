import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, type Mock } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRepositories } from '../hooks/useRepositories';
import { fetchRepositories } from '../services/githubService';

// 1. Mocka do serviço! O Hook não precisa bater na API real, 
// ele só precisa saber lidar com a resposta do serviço que já testada.
vi.mock('../services/githubService');

// 2. Criação de  um QueryClient falso só para os testes (sem retentativas para ser rápido)
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

// 3. O Wrapper injeta o contexto do React Query no teste
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useRepositories', () => {
  it('deve gerenciar o ciclo de vida (loading -> success) corretamente', async () => {
    // Arrange (Preparação)
    const mockRepos = [{ id: 1, name: 'react-craftsmanship' }];
    (fetchRepositories as Mock).mockResolvedValue(mockRepos);

    // Act (Ação) - Renderiza o hook
    const { result } = renderHook(() => useRepositories('codurance'), { wrapper });

    // Assert (Afirmação) - O React Query começa com isLoading true
    expect(result.current.isLoading).toBe(true);

    // Espera até que o React Query termine o trabalho e mude para success
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Verifica se os dados mockados foram repassados para a UI
    expect(result.current.data).toEqual(mockRepos);
  });
});