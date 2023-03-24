import styles from './form.module.scss';

const FormPage = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <label>
          First name <input type="text" name="first-name" />
        </label>
        <label>
          Last name <input type="text" name="last-name" />
        </label>
        <label>
          Birth date <input type="date" name="date" />
        </label>
      </form>
    </section>
  );
};

export default FormPage;
