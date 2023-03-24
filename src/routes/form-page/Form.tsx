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
        <fieldset>
          Sex:
          <label>
            Male <input type="radio" name="sex" value="male" />
          </label>
          <label>
            Female <input type="radio" name="sex" value="female" />
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default FormPage;
