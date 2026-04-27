import { useState } from 'react';
import { useRepositories } from './hooks/useRepositories';
import { SearchForm } from './components/SearchForm/SearchForm';
import { RepositoryList } from './components/RepositoryList/RepositoryList';
import { Header } from './components/Header/Header';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [username, setUsername] = useState('');

  const { data: repositories, isLoading, isError } = useRepositories(username);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <Header />
      
      <SearchForm 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />

      <RepositoryList 
        repositories={repositories}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default App;