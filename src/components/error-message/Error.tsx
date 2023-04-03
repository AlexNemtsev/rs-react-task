import styles from './Error.module.scss';

interface ErrorProps {
  children: React.ReactNode;
}

export default function Error(props: ErrorProps) {
  return <p className={styles.text}>{props.children}</p>;
}
