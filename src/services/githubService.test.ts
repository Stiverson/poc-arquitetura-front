import { describe, it, expect, vi, type Mock } from 'vitest';
import { fetchRepositories } from './githubService';

// Teste Padrão : globalThis funciona tanto no Node quanto no Browser
globalThis.fetch = vi.fn();

describe('githubService', () => {
  it('deve retornar uma lista de repositórios com sucesso', async () => {
    // Preparação (Arrange)
    const mockRepos = [{ id: 1, name: 'react', stargazers_count: 1000 }];
    
    // Mudança o (fetch as any) por (globalThis.fetch as Mock)

    (globalThis.fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockRepos,
    });

    // Ação (Act)

    const result = await fetchRepositories('facebook');

    // Afirmação (Assert)
    
    expect(globalThis.fetch).toHaveBeenCalledWith('https://api.github.com/users/facebook/repos?sort=updated');
    expect(result).toEqual(mockRepos);
  });

  it('deve lançar um erro quando a API falhar', async () => {
    (globalThis.fetch as Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchRepositories('usuario-invalido')).rejects.toThrow('Erro ao buscar repositórios');
  });
});