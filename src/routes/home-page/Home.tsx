import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar, SearchBarProps } from '../../components/search-bar/SearchBar';
import { Photo } from '../../interfaces/response';
import styles from './home-page.module.scss';

interface HomePageProps extends SearchBarProps {
  photos: Photo[];
}

const HomePage = (props: HomePageProps) => {
  const cards = props.photos.map((item) => (
    <PhotoCard key={item.id.toString()} img={item.urls.thumb} altDesc={item.alt_description} />
  ));

  return (
    <>
      <SearchBar updSearch={props.updSearch} search={props.search} />
      <section className={styles.section}>
        <div className={styles.cards}>{cards}</div>
      </section>
    </>
  );
};

export default HomePage;
