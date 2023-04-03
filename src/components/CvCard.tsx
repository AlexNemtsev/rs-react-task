import { FormData } from '../interfaces/form-interfaces';
import styles from './CvCard.module.scss';

export default function CvCard(props: FormData) {
  return (
    <div className={styles.card}>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Birth date: {props.date}</p>
      <p>Sex: {props.sex}</p>
      <p>Desired position: {props.position}</p>
      <p>Graduated from RS School: {props.rss}</p>
      <p>File name: {props.photo[0] ? props.photo[0].name : 'No file'}</p>
    </div>
  );
}
