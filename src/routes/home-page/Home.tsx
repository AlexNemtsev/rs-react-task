import { createPortal } from 'react-dom';
import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar, SearchBarProps } from '../../components/search-bar/SearchBar';
import { Photo } from '../../interfaces/response';
import styles from './home-page.module.scss';

interface HomePageProps extends SearchBarProps {
  photos: Photo[];
  isDataLoaded: boolean;
}

const ReactPortal = (url: string) => {
  const portalRoot = document.getElementById('portal-root') as HTMLElement;
  const element = <img src={url} />;

  return createPortal(element, portalRoot);
};

const HomePage = (props: HomePageProps) => {
  const cards = props.photos.map((item) => (
    <PhotoCard
      key={item.id.toString()}
      img={item.urls.thumb}
      altDesc={item.alt_description}
      onClick={() => {}}
    />
  ));

  return (
    <>
      <SearchBar updSearch={props.updSearch} search={props.search} />
      <section className={styles.section}>
        {props.isDataLoaded ? <div className={styles.cards}>{cards}</div> : <h2>Loading...</h2>}
      </section>
    </>
  );
};

export default HomePage;
