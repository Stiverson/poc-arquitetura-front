import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RepositoryList } from './RepositoryList';
import { type Repository } from '../../services/githubService';

describe('RepositoryList Component', () => {
  // 1. um mock  com a exata tipagem que o componente espera
  const mockRepos: Repository[] = [
    {
      id: 1,
      name: 'react-craftsmanship',
      description: 'A clean architecture POC',
      html_url: 'https://github.com/Stiverson/poc',
      stargazers_count: 999,
      language: 'TypeScript',
    },
    {
      id: 2,
      name: 'legacy-spaghetti-code',
      description: null, // Testando como o componente lida com dados ausentes
      html_url: 'https://github.com/Stiverson/legacy',
      stargazers_count: 0,
      language: null,
    }
  ];

  it('deve exibir a mensagem de carregamento (Loading State)', () => {
    render(<RepositoryList isLoading={true} isError={false} />);
    
    expect(screen.getByText(/Carregando repositórios, aguarde.../i)).toBeInTheDocument();
  });

  it('deve exibir a mensagem de erro (Error State)', () => {
    render(<RepositoryList isLoading={false} isError={true} />);
    
    expect(screen.getByText(/Erro ao buscar/i)).toBeInTheDocument();
  });

  it('deve exibir mensagem de lista vazia (Empty State)', () => {
    // Passando um array vazio para simular um usuário sem repositórios
    render(<RepositoryList repositories={[]} isLoading={false} isError={false} />);
    
    expect(screen.getByText(/Nenhum repositório público encontrado/i)).toBeInTheDocument();
  });

  it('deve renderizar os cards de repositórios corretamente (Success State)', () => {
    render(<RepositoryList repositories={mockRepos} isLoading={false} isError={false} />);
    
    // Verifica se os nomes dos repositórios renderizaram como links
    expect(screen.getByRole('link', { name: 'react-craftsmanship' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'legacy-spaghetti-code' })).toBeInTheDocument();

    // Verifica se a descrição e a linguagem apareceram no primeiro repositório
    expect(screen.getByText('A clean architecture POC')).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();

    // Verifica o fallback quando não há linguagem no segundo repo
    const naElements = screen.getAllByText(/N\/A/i);
    expect(naElements.length).toBeGreaterThan(0);
  });
});