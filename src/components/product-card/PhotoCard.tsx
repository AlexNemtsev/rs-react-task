import styles from './photo-card.module.scss';

interface PhotoCardProps {
  img: string;
  altDesc: string;
  onClick: () => void;
}

const PhotoCard = ({ img, altDesc, onClick }: PhotoCardProps) => {
  return <img src={img} alt={altDesc} className={styles.img} onClick={onClick} />;
};

export default PhotoCard;
