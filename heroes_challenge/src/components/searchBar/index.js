/* eslint-disable react/prop-types */
import React from 'react';
import styles from './style.module.scss';

function SearchBar(props) {
  const { handleChange, searchText } = props;

  return (
    <form className={styles.formInput}>
      <input
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={handleChange}
        value={searchText}
      />
      <button type="button">Search hero</button>
    </form>
  );
}

export default SearchBar;
/* eslint-enable react/prop-types */
