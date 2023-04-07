import PhotoCard from '../../components/product-card/PhotoCard';
import SearchBar from '../../components/search-bar/SearchBar';
import Photo from '../../interfaces/photo';
import styles from './home-page.module.scss';

interface HomePageProps {
  photos: Photo[];
}

const HomePage = ({ photos }: HomePageProps) => {
  const cards = photos.map((item) => (
    <PhotoCard key={item.id.toString()} img={item.urls.thumb} altDesc={item.alt_description} />
  ));

  return (
    <>
      <SearchBar />
      <section className={styles.section}>
        <div className={styles.cards}>{cards}</div>
      </section>
    </>
  );
};

export default HomePage;
