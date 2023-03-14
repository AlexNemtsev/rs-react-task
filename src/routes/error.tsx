import { Link } from 'react-router-dom';
import './error-page.css';

function ErrorPage(props: { onClick: (pageName: string) => void }) {
  return (
    <main className="error-page">
      <h1 className="error-page__header">404</h1>
      <p className="error-page__desc">
        {'Page does not exist. Go to '}
        <Link to="/" onClick={() => props.onClick('Home')} className="error-page__link">
          {'Home page'}
        </Link>
      </p>
    </main>
  );
}

export default ErrorPage;
