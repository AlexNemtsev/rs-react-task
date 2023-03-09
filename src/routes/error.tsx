import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main>
      <p>
        {"404 – Page does't exist. Go to "}
        <Link to="/">{'Home page'}</Link>
      </p>
    </main>
  );
}

export default ErrorPage;
