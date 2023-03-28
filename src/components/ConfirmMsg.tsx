import styles from './ConfirmMsg.module.scss';

export default function ConfirmMsg(props: { isHide: boolean }) {
  const className = [styles.dialog, props.isHide ? styles.hide : ''].join(' ');
  return (
    <dialog open className={className}>
      Card created
    </dialog>
  );
}
