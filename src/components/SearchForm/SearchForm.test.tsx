import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchForm } from './SearchForm';

describe('SearchForm Component', () => {
  it('deve renderizar o input e o botão desabilitado quando o searchInput estiver vazio', () => {
    render(
      <SearchForm 
        searchInput="" 
        setSearchInput={vi.fn()} 
        handleSearch={vi.fn()} 
        isLoading={false} 
      />
    );

    const input = screen.getByPlaceholderText(/Digite o nome de usuário ou organização/i);
    const button = screen.getByRole('button', { name: /Buscar/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('deve habilitar o botão quando o searchInput tiver texto', () => {
    render(
      <SearchForm 
        searchInput="usuário git" 
        setSearchInput={vi.fn()} 
        handleSearch={vi.fn()} 
        isLoading={false} 
      />
    );

    const button = screen.getByRole('button', { name: /Buscar/i });
    expect(button).not.toBeDisabled();
  });

  it('deve mostrar o texto de "Procurando..." e desabilitar o botão durante o loading', () => {
    render(
      <SearchForm 
        searchInput="usuário git" 
        setSearchInput={vi.fn()} 
        handleSearch={vi.fn()} 
        isLoading={true} 
      />
    );

    const button = screen.getByRole('button', { name: /Procurando\.\.\./i });
    expect(button).toBeDisabled();
  });
});