import { Link } from 'react-router-dom';

function ErrorPage(props: { onClick: (pageName: string) => void }) {
  return (
    <main>
      <p>
        {"404 – Page does't exist. Go to "}
        <Link to="/" onClick={() => props.onClick('Home')}>
          {'Home page'}
        </Link>
      </p>
    </main>
  );
}

export default ErrorPage;
