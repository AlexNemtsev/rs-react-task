import Product from '../../interfaces/product';

interface ProductCardProps {
  item: Omit<Product, 'id'>;
}

function ProductCard({ item }: ProductCardProps) {
  return (
    <div>
      <img src={item.thumbnail} alt={item.title} />
      <div>{item.title}</div>
    </div>
  );
}

export default ProductCard;
