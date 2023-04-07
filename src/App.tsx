import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home-page/Home';
import AboutPage from './routes/About';
import ErrorPage from './routes/error-page/Error';
import Layout from './components/Layout';
import FormPage from './routes/form-page/Form';
import Photo from './interfaces/photo';
import UnsplashLoader from './libs/loader';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoaded, setIsLoaded] = useState(true);

  console.log(isLoaded);

  useEffect(() => {
    setIsLoaded(false);
    UnsplashLoader.getPhotos()
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoaded(true);
        setPhotos(data as Photo[]);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage photos={photos} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
