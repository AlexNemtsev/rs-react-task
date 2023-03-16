import products from '../../assets/products';
import ProductCard from '../../components/product-card/product-card';
import styles from './home-page.module.scss';

function HomePage() {
  const cards = products.map((item) => <ProductCard key={item.id.toString()} item={item} />);

  return (
    <>
      <section className={styles.section}>
        <input
          type="text"
          name="search"
          id="search"
          className={styles.input}
          placeholder="Search..."
        />
      </section>
      <section className={styles.section}>
        <div className={styles.cards}>{cards}</div>
      </section>
    </>
  );
}

export default HomePage;
