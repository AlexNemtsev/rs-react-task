import { useEffect, useRef } from 'react';
import styles from './search-bar.module.scss';

interface SearchBarProps {
  updSearch: (searchStr: string) => void;
  search: string;
}

const SearchBar = ({ updSearch, search }: SearchBarProps) => {
  const searchFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ref = searchFieldRef.current;
    if (ref) {
      ref.value = search;
    }
  }, [search, searchFieldRef]);

  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === 'Enter') {
      const ref = searchFieldRef.current;
      updSearch(ref?.value || '');
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
export type { SearchBarProps };
