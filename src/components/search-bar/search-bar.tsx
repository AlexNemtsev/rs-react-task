import React from 'react';
import styles from './search-bar.module.scss';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <section className={styles.section}>
        <input
          type="text"
          name="search"
          id="search"
          className={styles.input}
          placeholder="Search..."
          onInput={this.inputHandler}
        />
      </section>
    );
  }

  inputHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    this.setState({ inputValue: target.value });
  }
}

export default SearchBar;
