import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>
        <span className={styles.textGradient}>GitHub User Explorer</span>
      </h1>
      <p className={styles.subtitle}>
        Pesquise por organizações ou usuários do GitHub e veja seus repositórios.
      </p>
    </header>
  );
}