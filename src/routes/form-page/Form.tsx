import React, { createRef } from 'react';
import styles from './form.module.scss';
import { FormRefs, FormData } from '../../interfaces/form-interfaces';
import CvCard from '../../components/CvCard';

interface FormPageState {
  data: Array<FormData>;
}

const positionOptions: { [key: string]: string } = {
  fe: 'Front-end',
  be: 'Back-end',
  fs: 'Full-stack',
};

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

  private formRef = createRef<HTMLFormElement>();

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
        position: positionOptions[this.formRefs.position.current?.value || ''],
        rss: this.formRefs.rss.current?.checked ? 'Yes' : 'No',
        photo: this.formRefs.photo.current?.files![0].name || '',
      };

      this.formRef.current?.reset();

      this.setState({ data: [...this.state.data, newData] });
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
    const cards = this.state.data.map((card, idx) => <CvCard key={idx.toString()} {...card} />);
    return (
      <>
        <section className={styles.section}>
          <form className={styles.form} onSubmit={this.onSubmitHandler} ref={this.formRef}>
            <label>
              First name:{' '}
              <input type="text" name="first-name" required ref={this.formRefs.firstName} />
            </label>
            <label>
              Last name:{' '}
              <input type="text" name="last-name" required ref={this.formRefs.lastName} />
            </label>
            <label>
              Birth date: <input type="date" name="date" ref={this.formRefs.date} required />
            </label>
            <fieldset>
              Sex:{' '}
              <label>
                Male{' '}
                <input type="radio" name="sex" value="male" ref={this.formRefs.sexMale} required />
              </label>
              <label>
                Female{' '}
                <input type="radio" name="sex" value="female" ref={this.formRefs.sexFemale} />
              </label>
            </fieldset>
            <label>
              Desired position:{' '}
              <select name="position" defaultValue={''} ref={this.formRefs.position} required>
                <option value="" disabled>
                  – Choose position –
                </option>
                {Object.keys(positionOptions).map((key) => {
                  return (
                    <option value={key} key={key}>
                      {positionOptions[key]}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Graduated from RS School:{' '}
              <input type="checkbox" name="rs-school" ref={this.formRefs.rss} />
            </label>
            Photo
            <label>
              <input type="file" name="photo" ref={this.formRefs.photo} required />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
        <section>{cards}</section>
      </>
    );
  }
}

export default FormPage;
