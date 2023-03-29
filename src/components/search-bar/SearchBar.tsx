import { useState, useEffect } from 'react';
import styles from './search-bar.module.scss';

const SearchBar = () => {
  const storageKey = 'inputValue';

  const [inputValue, setInputValue] = useState<string>(localStorage.getItem(storageKey) || '');

  useEffect(() => {
    localStorage.setItem(storageKey, inputValue);
  });

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <section className={styles.section}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.input}
        placeholder="Search..."
        onInput={inputHandler}
        value={inputValue}
      />
    </section>
  );
};

export default SearchBar;
