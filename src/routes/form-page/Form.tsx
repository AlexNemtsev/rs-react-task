import React, { createRef } from 'react';
import styles from './form.module.scss';

interface FormRefs {
  firstName: React.RefObject<HTMLInputElement>;
  lastName: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  sexMale: React.RefObject<HTMLInputElement>;
  sexFemale: React.RefObject<HTMLInputElement>;
  position: React.RefObject<HTMLSelectElement>;
  rss: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
}

type KeysOfForm = {
  [key in keyof Omit<FormRefs, 'sexMale' | 'sexFemale'>]: string;
};

interface FormData extends KeysOfForm {
  sex: string;
}

interface FormPageState {
  data: Array<FormData>;
}

class FormPage extends React.Component<object, FormPageState> {
  constructor(props: object) {
    super(props);
    this.onSubmitHandler.bind(this);
    this.state = {
      data: [],
    };
  }

  private formRefs: FormRefs = {
    firstName: createRef<HTMLInputElement>(),
    lastName: createRef<HTMLInputElement>(),
    date: createRef<HTMLInputElement>(),
    sexMale: createRef<HTMLInputElement>(),
    sexFemale: createRef<HTMLInputElement>(),
    position: createRef<HTMLSelectElement>(),
    rss: createRef<HTMLInputElement>(),
    photo: createRef<HTMLInputElement>(),
  };

  private onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isFormValid = [
      this.validateTextField(this.formRefs.firstName),
      this.validateTextField(this.formRefs.lastName),
      this.validateDate(this.formRefs.date),
    ].every((validate) => validate);

    if (isFormValid) {
      const newData: FormData = {
        firstName: this.formRefs.firstName.current?.value || '',
        lastName: this.formRefs.lastName.current?.value || '',
        date: this.formRefs.date.current?.value || '',
        sex: this.formRefs.sexMale.current?.checked ? 'Male' : 'Female',
        position: this.formRefs.position.current?.value || '',
        rss: this.formRefs.rss.current?.checked ? 'Yes' : 'No',
        photo: this.formRefs.photo.current?.value || '',
      };

      this.setState({ data: [...this.state.data, newData] });
      console.log(this.state.data);
    }
  };

  private validateTextField(ref: React.RefObject<HTMLInputElement>): boolean {
    const regex = /\b[A-Z].*?\b/;

    if (regex.test(ref.current?.value || '')) return true;
    else if (ref.current) {
      ref.current.value = '';
    }
    return false;
  }

  private validateDate(ref: React.RefObject<HTMLInputElement>): boolean {
    const date = new Date(ref.current?.value || Date.now());
    const diff = Date.now() - date.getTime();
    const age = new Date(diff).getFullYear() - 1970;

    if (age < 18) {
      if (ref.current) {
        ref.current.value = '';
      }
      return false;
    }
    return true;
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
              Male <input type="radio" name="sex" value="male" ref={this.formRefs.sexMale} />
            </label>
            <label>
              Female <input type="radio" name="sex" value="female" ref={this.formRefs.sexFemale} />
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
