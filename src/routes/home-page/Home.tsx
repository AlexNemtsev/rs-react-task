import { useEffect, useState } from 'react';
import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { Photo, SearchResult } from '../../interfaces/response';
import styles from './home-page.module.scss';
import Modal from '../../components/Modal';
import UnsplashLoader from '../../libs/loader';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addNewPhotos } from '../../store/photos-slice';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoToShow, setPhotoToShow] = useState<Photo>();

  const dispatch = useAppDispatch();
  const searchValues = useAppSelector((state) => state.searchValue);
  const photos = useAppSelector((state) => state.photos.photos);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (photos.length === 0 || searchValues.search !== searchValues.prevSearch) {
      setIsDataLoaded(false);
      UnsplashLoader.getPhotos(searchValues.search)
        .then((resp) => resp.json())
        .then((data: Photo[] | SearchResult) => {
          setIsDataLoaded(true);
          if ('results' in data) {
            dispatch(addNewPhotos(data.results));
          } else {
            dispatch(addNewPhotos(data));
          }
        });
    }
  }, [dispatch, photos.length, searchValues]);

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
      <SearchBar />
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
