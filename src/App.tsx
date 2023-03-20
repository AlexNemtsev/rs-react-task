import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home-page/Home';
import AboutPage from './routes/About';
import ErrorPage from './routes/error-page/Error';
import Layout from './components/Layout';
import FormPage from './routes/form-page/Form';

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
