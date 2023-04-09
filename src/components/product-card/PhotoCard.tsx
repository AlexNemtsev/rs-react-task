import styles from './photo-card.module.scss';

interface PhotoCardProps {
  img: string;
  altDesc: string;
  onClick: () => void;
}

const PhotoCard = ({ img, altDesc }: PhotoCardProps) => {
  return <img src={img} alt={altDesc} className={styles.img} />;
};

export default PhotoCard;
