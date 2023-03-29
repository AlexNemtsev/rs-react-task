import React, { useRef, useState } from 'react';
import styles from './form.module.scss';
import { FormRefs, FormData } from '../../interfaces/form-interfaces';
import CvCard from '../../components/CvCard';
import Error from '../../components/error-message/Error';
import ConfirmMsg from '../../components/ConfirmMsg';

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

const validateTextField = (ref: React.RefObject<HTMLInputElement>): boolean => {
  const regex = /\b[A-Z].*?\b/;

  if (regex.test(ref.current?.value || '')) return true;
  else if (ref.current) {
    ref.current.value = '';
  }
  return false;
};

const validateDate = (ref: React.RefObject<HTMLInputElement>): boolean => {
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
};

const validateFile = (ref: React.RefObject<HTMLInputElement>): boolean => {
  if (ref.current?.files && ref.current?.files[0]) {
    return ref.current?.files[0].type === 'image/jpeg';
  }

  return true;
};

const FormPage = () => {
  const [data, setData] = useState<FormData[]>([]);
  const [errors, setErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    date: false,
    image: false,
  });

  const [msgHide, setMsgHide] = useState(true);

  const formRefs: FormRefs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    date: useRef<HTMLInputElement>(null),
    sexMale: useRef<HTMLInputElement>(null),
    sexFemale: useRef<HTMLInputElement>(null),
    position: useRef<HTMLSelectElement>(null),
    rss: useRef<HTMLInputElement>(null),
    photo: useRef<HTMLInputElement>(null),
  };

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const validateErrors: FormErrors = {
      firstName: !validateTextField(formRefs.firstName),
      lastName: !validateTextField(formRefs.lastName),
      date: !validateDate(formRefs.date),
      image: !validateFile(formRefs.photo),
    };

    setErrors(validateErrors);

    const isFormValid = Object.values(validateErrors).every((error) => !error);

    if (isFormValid) {
      let fileName = 'No file';
      const files = formRefs.photo.current?.files;

      if (files && files.length) {
        fileName = files[0].name;
      }

      const newData: FormData = {
        firstName: formRefs.firstName.current?.value || '',
        lastName: formRefs.lastName.current?.value || '',
        date: formRefs.date.current?.value || '',
        sex: formRefs.sexMale.current?.checked ? 'Male' : 'Female',
        position: positionOptions[formRefs.position.current?.value || ''],
        rss: formRefs.rss.current?.checked ? 'Yes' : 'No',
        photo: fileName,
      };

      formRef.current?.reset();

      setData([...data, newData]);
      setMsgHide(false);

      setTimeout(() => {
        setMsgHide(true);
      }, 3000);
    }
  };

  const cards = data.map((card, idx) => <CvCard key={idx.toString()} {...card} />);
  return (
    <>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={onSubmitHandler} ref={formRef}>
          <label>
            First name: <input type="text" name="first-name" required ref={formRefs.firstName} />
          </label>
          <Error
            shouldDisplay={errors.firstName}
            text="First name must start with a capital letter"
          />
          <label>
            Last name: <input type="text" name="last-name" required ref={formRefs.lastName} />
          </label>
          <Error
            shouldDisplay={errors.lastName}
            text="Last name must start with a capital letter"
          />
          <label>
            Birth date: <input type="date" name="date" ref={formRefs.date} required />
          </label>
          <Error shouldDisplay={errors.date} text="You must be elder than 18" />
          <fieldset className={[styles.radioButtons, styles.formElementPadding].join(' ')}>
            Sex:{' '}
            <label>
              Male
              <input type="radio" name="sex" value="male" ref={formRefs.sexMale} required />
            </label>
            <label>
              {'   '}Female
              <input type="radio" name="sex" value="female" ref={formRefs.sexFemale} />
            </label>
          </fieldset>
          <label className={styles.formElementPadding}>
            Desired position:{' '}
            <select name="position" defaultValue={''} ref={formRefs.position} required>
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
            Graduated from RS School: <input type="checkbox" name="rs-school" ref={formRefs.rss} />
          </label>
          Photo
          <label className={styles.formElementPadding}>
            <input type="file" name="photo" ref={formRefs.photo} accept="image/jpeg" />
          </label>
          <Error shouldDisplay={errors.image} text="Image must have jpeg format" />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <ConfirmMsg isHide={msgHide} />
      <section className={styles.cards}>{cards}</section>
    </>
  );
};

export default FormPage;
