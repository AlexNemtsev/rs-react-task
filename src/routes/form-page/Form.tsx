import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './form.module.scss';
import { FormData } from '../../interfaces/form-interfaces';
import CvCard from '../../components/CvCard';
import Error from '../../components/error-message/Error';
import ConfirmMsg from '../../components/ConfirmMsg';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addCV } from '../../store/cv-slice';

const positionOptions: { [key: string]: string } = {
  fe: 'Front-end',
  be: 'Back-end',
  fs: 'Full-stack',
};

const validateDate = (value: string): boolean => {
  const date = new Date(value || Date.now());
  const diff = Date.now() - date.getTime();
  const age = new Date(diff).getFullYear() - 1970;

  if (age < 18) {
    if (value) {
      value = '';
    }
    return false;
  }
  return true;
};

const validateFile = (file?: FileList): boolean => {
  if (file && file[0]) {
    return file[0].type === 'image/jpeg';
  }

  return true;
};

const FormPage = () => {
  const data = useAppSelector((state) => state.сv.data);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [msgHide, setMsgHide] = useState(true);

  const onSubmit: SubmitHandler<FormData> = (newData) => {
    dispatch(
      addCV({
        ...newData,
        position: positionOptions[newData.position],
        rss: newData.rss ? 'Yes' : 'No',
      })
    );

    reset();
    setMsgHide(false);

    setTimeout(() => {
      setMsgHide(true);
    }, 3000);
  };

  const cards = data.map((card, idx) => <CvCard key={idx.toString()} {...card} />);
  return (
    <>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label>
            First name:{' '}
            <input
              {...register('firstName', {
                required: true,
                pattern: {
                  value: /\b[A-Z].*?\b/,
                  message: 'First name must start with a capital letter',
                },
              })}
            />
            {errors.firstName && <Error>{errors.firstName.message}</Error>}
          </label>
          <label>
            Last name:{' '}
            <input
              {...register('lastName', {
                required: true,
                pattern: {
                  value: /\b[A-Z].*?\b/,
                  message: 'Last name must start with a capital letter',
                },
              })}
            />
            {errors.lastName && <Error>{errors.lastName.message}</Error>}
          </label>
          <label>
            Birth date:{' '}
            <input type="date" {...register('date', { required: true, validate: validateDate })} />
            {errors.date && <Error>You must be elder than 18</Error>}
          </label>
          <fieldset className={[styles.radioButtons, styles.formElementPadding].join(' ')}>
            Sex:{' '}
            <label>
              Male
              <input type="radio" {...register('sex', { required: true, value: 'male' })} />
            </label>
            <label>
              {'   '}Female
              <input type="radio" {...register('sex', { value: 'female' })} />
            </label>
          </fieldset>
          <label className={styles.formElementPadding}>
            Desired position:{' '}
            <select defaultValue="" {...register('position', { required: true })}>
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
            Graduated from RS School: <input type="checkbox" {...register('rss')} />
          </label>
          Photo
          <label className={styles.formElementPadding}>
            <input
              type="file"
              accept="image/jpeg"
              {...register('photo', { validate: validateFile })}
            />
            {errors.photo && <Error>Image must have jpeg format</Error>}
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
      <ConfirmMsg isHide={msgHide} />
      <section className={styles.cards}>{cards}</section>
    </>
  );
};

export default FormPage;
