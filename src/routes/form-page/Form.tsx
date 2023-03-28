import React, { createRef } from 'react';
import styles from './form.module.scss';
import { FormRefs, FormData } from '../../interfaces/form-interfaces';
import CvCard from '../../components/CvCard';
import Error from '../../components/error-message/Error';
import ConfirmMsg from '../../components/ConfirmMsg';

interface FormPageState {
  data: Array<FormData>;
  errors: FormErrors;
  msgHide: boolean;
}

interface FormErrors {
  [key: string]: boolean;
  firstName: boolean;
  lastName: boolean;
  date: boolean;
  image: boolean;
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
      errors: {
        firstName: false,
        lastName: false,
        date: false,
        image: false,
      },
      msgHide: true,
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
    const errors: FormErrors = {
      firstName: !this.validateTextField(this.formRefs.firstName),
      lastName: !this.validateTextField(this.formRefs.lastName),
      date: !this.validateDate(this.formRefs.date),
      image: !this.validateFile(this.formRefs.photo),
    };

    this.setState({
      errors,
    });

    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      let fileName = 'No file';
      const files = this.formRefs.photo.current?.files;

      if (files && files.length) {
        fileName = files[0].name;
      }

      const newData: FormData = {
        firstName: this.formRefs.firstName.current?.value || '',
        lastName: this.formRefs.lastName.current?.value || '',
        date: this.formRefs.date.current?.value || '',
        sex: this.formRefs.sexMale.current?.checked ? 'Male' : 'Female',
        position: positionOptions[this.formRefs.position.current?.value || ''],
        rss: this.formRefs.rss.current?.checked ? 'Yes' : 'No',
        photo: fileName,
      };

      this.formRef.current?.reset();

      this.setState({ data: [...this.state.data, newData], msgHide: false });

      setTimeout(() => {
        this.setState({ msgHide: true });
      }, 3000);
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

  private validateFile(ref: React.RefObject<HTMLInputElement>): boolean {
    if (ref.current?.files && ref.current?.files[0]) {
      return ref.current?.files[0].type === 'image/jpeg';
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
            <Error
              shouldDisplay={this.state.errors.firstName}
              text="First name must start with a capital letter"
            />
            <label>
              Last name:{' '}
              <input type="text" name="last-name" required ref={this.formRefs.lastName} />
            </label>
            <Error
              shouldDisplay={this.state.errors.lastName}
              text="Last name must start with a capital letter"
            />
            <label>
              Birth date: <input type="date" name="date" ref={this.formRefs.date} required />
            </label>
            <Error shouldDisplay={this.state.errors.date} text="You must be elder than 18" />
            <fieldset className={[styles.radioButtons, styles.formElementPadding].join(' ')}>
              Sex:{' '}
              <label>
                Male
                <input type="radio" name="sex" value="male" ref={this.formRefs.sexMale} required />
              </label>
              <label>
                {'   '}Female
                <input type="radio" name="sex" value="female" ref={this.formRefs.sexFemale} />
              </label>
            </fieldset>
            <label className={styles.formElementPadding}>
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
            <label className={styles.formElementPadding}>
              Graduated from RS School:{' '}
              <input type="checkbox" name="rs-school" ref={this.formRefs.rss} />
            </label>
            Photo
            <label className={styles.formElementPadding}>
              <input type="file" name="photo" ref={this.formRefs.photo} accept="image/jpeg" />
            </label>
            <Error shouldDisplay={this.state.errors.image} text="Image must have jpeg format" />
            <input type="submit" value="Submit" />
          </form>
        </section>
        <ConfirmMsg isHide={this.state.msgHide} />
        <section className={styles.cards}>{cards}</section>
      </>
    );
  }
}

export default FormPage;
