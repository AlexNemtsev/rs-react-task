import photos from '../../assets/photos';
import PhotoCard from '../../components/product-card/PhotoCard';
import SearchBar from '../../components/search-bar/SearchBar';
import styles from './home-page.module.scss';

const HomePage = () => {
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
