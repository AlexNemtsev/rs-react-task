import Product from '../../interfaces/product';
import styles from './product-card.module.scss';

interface ProductCardProps {
  item: Omit<Product, 'id'>;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className={styles.card} data-testid="card">
      <div>
        <img src={item.thumbnail} alt={item.title} className={styles.img} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{item.title}</p>
        <p className={styles.price}>{'$' + item.price}</p>
        <p className={styles.stock}>{'Stock: ' + item.stock}</p>
      </div>
    </div>
  );
};

export default ProductCard;
