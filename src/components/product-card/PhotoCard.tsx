import styles from './photo-card.module.scss';

interface PhotoCardProps {
  img: string;
  altDesc: string;
}

const PhotoCard = ({ img, altDesc }: PhotoCardProps) => {
  return (
    // <div className={styles.card} data-testid="card">
    <img src={img} alt={altDesc} className={styles.img} />
    // </div>
  );
};

export default PhotoCard;
