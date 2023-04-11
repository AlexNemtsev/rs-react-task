import { useState } from 'react';
import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar, SearchBarProps } from '../../components/search-bar/SearchBar';
import { Photo } from '../../interfaces/response';
import styles from './home-page.module.scss';
import Modal from '../../components/Modal';

interface HomePageProps extends SearchBarProps {
  photos: Photo[];
  isDataLoaded: boolean;
}

const HomePage = (props: HomePageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const cards = props.photos.map((item) => (
    <PhotoCard
      key={item.id.toString()}
      img={item.urls.thumb}
      altDesc={item.alt_description}
      onClick={() => {
        setIsOpen(true);
      }}
    />
  ));

  return (
    <>
      <SearchBar updSearch={props.updSearch} search={props.search} />
      <Modal
        handleClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        {'this is Modal'}
      </Modal>
      <section className={styles.section}>
        {props.isDataLoaded ? <div className={styles.cards}>{cards}</div> : <h2>Loading...</h2>}
      </section>
    </>
  );
};

export default HomePage;
