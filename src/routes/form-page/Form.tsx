import React, { createRef } from 'react';
import styles from './form.module.scss';

class FormPage extends React.Component<object> {
  constructor(props: object) {
    super(props);
    this.onSubmitHandler.bind(this);
  }

  private formRefs = {
    firstName: createRef<HTMLInputElement>(),
    lastName: createRef<HTMLInputElement>(),
    date: createRef<HTMLInputElement>(),
    sex: createRef<HTMLInputElement>(),
    position: createRef<HTMLSelectElement>(),
    rss: createRef<HTMLInputElement>(),
    photo: createRef<HTMLInputElement>(),
  };

  private onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    this.validateTextField(this.formRefs.firstName);
    this.validateTextField(this.formRefs.lastName);
    this.validateDate(this.formRefs.date);
  };

  private validateTextField(ref: React.RefObject<HTMLInputElement>) {
    const regex = /\b[A-Z].*?\b/;

    if (regex.test(ref.current?.value || '')) console.log('valid');
    else if (ref.current) {
      ref.current.value = '';
    }
  }

  private validateDate(ref: React.RefObject<HTMLInputElement>) {
    const date = new Date(ref.current?.value || Date.now());
    const diff = Date.now() - date.getTime();
    const age = new Date(diff).getFullYear() - 1970;

    if (age < 18) {
      if (ref.current) {
        ref.current.value = '';
      }
    }
  }

  render(): React.ReactNode {
    return (
      <section className={styles.section}>
        <form className={styles.form} onSubmit={this.onSubmitHandler}>
          <label>
            First name:{' '}
            <input type="text" name="first-name" required ref={this.formRefs.firstName} />
          </label>
          <label>
            Last name: <input type="text" name="last-name" required ref={this.formRefs.lastName} />
          </label>
          <label>
            Birth date: <input type="date" name="date" ref={this.formRefs.date} />
          </label>
          <fieldset>
            Sex:{' '}
            <label>
              Male <input type="radio" name="sex" value="male" ref={this.formRefs.sex} />
            </label>
            <label>
              Female <input type="radio" name="sex" value="female" ref={this.formRefs.sex} />
            </label>
          </fieldset>
          <label>
            Desired position:{' '}
            <select name="position" defaultValue={''} ref={this.formRefs.position}>
              <option value="" disabled>
                – Choose position –
              </option>
              <option value="fe">Front-end</option>
              <option value="be">Back-end</option>
              <option value="fs">Full Stack</option>
            </select>
          </label>
          <label>
            Graduated from RS School:{' '}
            <input type="checkbox" name="rs-school" ref={this.formRefs.rss} />
          </label>
          Photo
          <label>
            <input type="file" name="photo" ref={this.formRefs.photo} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default FormPage;
