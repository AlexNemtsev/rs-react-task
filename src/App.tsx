import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home-page/Home';
import AboutPage from './routes/About';
import ErrorPage from './routes/error-page/Error';
import Layout from './components/Layout';
import FormPage from './routes/form-page/Form';
import { Photo, SearchResult } from './interfaces/response';
import UnsplashLoader from './libs/loader';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');

  const updateSearchState = (searchStr: string) => {
    setPrevSearch(search);
    setSearch(searchStr);
  };

  useEffect(() => {
    if (photos.length === 0 || search !== prevSearch) {
      UnsplashLoader.getPhotos(search)
        .then((resp) => resp.json())
        .then((data: Photo[] | SearchResult) => {
          setIsLoaded(true);
          if ('results' in data) {
            setPhotos(data.results);
          } else {
            setPhotos(data);
          }
        });
    }
  }, [photos.length, prevSearch, search]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <HomePage
                photos={photos}
                search={search}
                updSearch={updateSearchState}
                isDataLoaded={isLoaded}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
