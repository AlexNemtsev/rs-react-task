import { useEffect, useRef } from 'react';
import styles from './search-bar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSearchValue } from '../../store/search-slice';

const SearchBar = () => {
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const searchValue = useAppSelector((state) => state.searchValue.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ref = searchFieldRef.current;
    if (ref) {
      ref.value = searchValue;
    }
  }, [searchValue, searchFieldRef]);

  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === 'Enter') {
      const ref = searchFieldRef.current;
      dispatch(setSearchValue(ref?.value || ''));
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

export { SearchBar };
