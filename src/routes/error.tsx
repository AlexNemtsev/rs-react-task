import { Link } from 'react-router-dom';
import styles from './error-page.module.scss';

function ErrorPage(props: { onClick: (pageName: string) => void }) {
  return (
    <main className={styles.errorPage}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.description}>
        {'Page does not exist. Go to '}
        <Link to="/" onClick={() => props.onClick('Home')} className={styles.link}>
          {'Home page'}
        </Link>
      </p>
    </main>
  );
}

export default ErrorPage;
