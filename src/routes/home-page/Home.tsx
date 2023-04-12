import { useEffect, useState } from 'react';
import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { Photo, SearchResult } from '../../interfaces/response';
import styles from './home-page.module.scss';
import Modal from '../../components/Modal';
import UnsplashLoader from '../../libs/loader';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSearchValue } from '../../store/slice';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoToShow, setPhotoToShow] = useState<Photo>();

  const dispatch = useAppDispatch();

  const storedValue = useAppSelector((state) => state.searchValue.search);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState(storedValue);
  const [prevSearch, setPrevSearch] = useState(storedValue);

  const updateSearchState = (searchStr: string) => {
    setPrevSearch(search);
    setSearch(searchStr);
    dispatch(setSearchValue(searchStr));
    setIsDataLoaded(false);
  };

  useEffect(() => {
    if (photos.length === 0 || search !== prevSearch) {
      UnsplashLoader.getPhotos(search)
        .then((resp) => resp.json())
        .then((data: Photo[] | SearchResult) => {
          setIsDataLoaded(true);
          if ('results' in data) {
            setPhotos(data.results);
          } else {
            setPhotos(data);
          }
        });
    }
  }, [photos.length, prevSearch, search]);

  const cards = photos.map((item) => (
    <PhotoCard
      key={item.id.toString()}
      img={item.urls.thumb}
      altDesc={item.alt_description}
      onClick={() => {
        setPhotoToShow(item);
        setIsOpen(true);
      }}
    />
  ));

  return (
    <>
      <SearchBar updSearch={updateSearchState} search={search} />
      <Modal
        handleClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
        photo={photoToShow as Photo}
      />
      <section className={styles.section}>
        {isDataLoaded ? <div className={styles.cards}>{cards}</div> : <h2>Loading...</h2>}
      </section>
    </>
  );
};

export default HomePage;
