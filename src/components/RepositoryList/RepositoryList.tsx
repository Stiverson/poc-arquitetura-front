import { type Repository } from '../../services/githubService';
import styles from './RepositoryList.module.css';

interface RepositoryListProps {
  repositories?: Repository[];
  isLoading: boolean;
  isError: boolean;
}

export function RepositoryList({ repositories, isLoading, isError }: RepositoryListProps) {
  if (isLoading) return <p className={styles.statusMessage}>Carregando repositórios, aguarde...</p>;
  
  if (isError) return <p className={styles.errorMessage}>Erro ao buscar. O usuário existe mesmo?</p>;
  
  if (!isLoading && !isError && repositories?.length === 0) {
    return <p className={styles.statusMessage}>Nenhum repositório público encontrado para este usuário.</p>;
  }

  return (
    <ul className={styles.list}>
      {repositories?.map((repo) => (
        <li key={repo.id} className={styles.card}>
          <h3 className={styles.repoName}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.repoLink}>
              {repo.name}
            </a>
          </h3>
          {repo.description && <p className={styles.description}>{repo.description}</p>}
          <div className={styles.stats}>
            <span>⭐ {repo.stargazers_count}</span>
            <span>💻 {repo.language || 'N/A'}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}