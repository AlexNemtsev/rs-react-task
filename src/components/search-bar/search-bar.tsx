import React, { FormEvent } from 'react';
import styles from './search-bar.module.scss';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
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

  inputHandler(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    this.setState({ inputValue: target.value });
    console.log(this.state);
  }
}

export default SearchBar;
