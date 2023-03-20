import products from '../../assets/products';
import ProductCard from '../../components/product-card/product-card';
import SearchBar from '../../components/search-bar/search-bar';
import styles from './home-page.module.scss';

function HomePage() {
  const cards = products.map((item) => <ProductCard key={item.id.toString()} item={item} />);

  return (
    <>
      <SearchBar />
      <section className={styles.section}>
        <div className={styles.cards}>{cards}</div>
      </section>
    </>
  );
}

export default HomePage;
