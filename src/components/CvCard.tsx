import { FormData } from '../interfaces/form-interfaces';

export default function CvCard(props: FormData) {
  return (
    <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Birth date: {props.date}</p>
      <p>Sex: {props.sex}</p>
      <p>Desired position: {props.position}</p>
      <p>Graduated from RS School: {props.rss}</p>
      <p>File name: {props.photo}</p>
    </div>
  );
}
