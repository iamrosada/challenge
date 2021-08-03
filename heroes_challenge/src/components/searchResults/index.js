/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React from 'react';
import SearchResultItem from '../searchResultItem';
import styles from './style.module.scss';

function SearchResults(props) {
  const { superheroData = [] } = props;

  return (
    <div className={styles.CardFlex}>
      {superheroData.map((superhero) => (
        <SearchResultItem data={superhero} />
      ))}
    </div>
  );
}

export default SearchResults;
/* eslint-enable react/prop-types */
