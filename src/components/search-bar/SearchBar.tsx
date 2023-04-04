import { useEffect, useRef } from 'react';
import styles from './search-bar.module.scss';

const SearchBar = () => {
  const storageKey = 'inputValue';
  const searchFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey) || '';
    const ref = searchFieldRef.current;
    if (ref) {
      ref.value = storedValue;
    }
  }, [searchFieldRef]);

  useEffect(() => {
    const ref = searchFieldRef.current;
    return () => {
      localStorage.setItem(storageKey, ref?.value || '');
    };
  }, [searchFieldRef]);

  return (
    <section className={styles.section}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.input}
        placeholder="Search..."
        ref={searchFieldRef}
      />
    </section>
  );
};

export default SearchBar;
