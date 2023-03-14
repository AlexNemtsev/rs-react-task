import products from '../assets/products';
import ProductCard from '../components/product-card/product-card';

function HomePage() {
  const cards = products.map((item) => <ProductCard key={item.id.toString()} item={item} />);

  return <section>{cards}</section>;
}

export default HomePage;
