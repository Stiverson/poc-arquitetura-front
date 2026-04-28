import React from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function SearchForm({ searchInput, setSearchInput, handleSearch, isLoading }: SearchFormProps) {
  return (
    <form onSubmit={handleSearch} className={styles.formContainer}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Digite o nome de usuário git hub ou organização..."
        className={styles.input}
      />
      <button 
        type="submit" 
        disabled={isLoading || !searchInput.trim()} 
        className={styles.button}
      >
        {isLoading ? 'Procurando...' : 'Buscar'}
      </button>
    </form>
  );
}