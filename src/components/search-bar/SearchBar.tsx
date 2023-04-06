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

  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === 'Enter') {
      console.log('Value saved');
      const ref = searchFieldRef.current;
      localStorage.setItem(storageKey, ref?.value || '');
    }
  };

  return (
    <section className={styles.section}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.input}
        placeholder="Search..."
        onKeyDown={onEnter}
        ref={searchFieldRef}
      />
    </section>
  );
};

export default SearchBar;
