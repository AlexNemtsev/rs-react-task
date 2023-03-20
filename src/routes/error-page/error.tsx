import { Link } from 'react-router-dom';
import styles from './error-page.module.scss';

function ErrorPage() {
  return (
    <main className={styles.errorPage}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.description}>
        {'Page does not exist. Go to '}
        <Link to="/" className={styles.link}>
          {'Home page'}
        </Link>
      </p>
    </main>
  );
}

export default ErrorPage;
