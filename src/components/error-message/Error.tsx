import styles from './Error.module.scss';

interface ErrorProps {
  shouldDisplay: boolean;
  text: string;
}

export default function Error({ shouldDisplay, text }: ErrorProps) {
  return <p className={styles.text}>{shouldDisplay ? text : ''}</p>;
}
