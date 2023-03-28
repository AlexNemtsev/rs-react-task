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

export type { FormRefs, FormData };
