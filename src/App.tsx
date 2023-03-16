import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home-page/home';
import AboutPage from './routes/about';
import ErrorPage from './routes/error-page/error';
import Layout from './components/layout';
import FormPage from './routes/form-page/form';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
