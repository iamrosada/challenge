/* eslint-disable react/prop-types */
import React from 'react';
import SearchResultItem from '../searchResultItem';
import styles from './style.module.scss';

function SearchResults(props) {
  const { superheroData = [] } = props;

  console.log('superheroData', superheroData);
  return (
    <div className={styles.CardFlex}>
      {superheroData.map(superhero => (
        <SearchResultItem data={superhero} />
      ))}
    </div>
  );
}

export default SearchResults;
/* eslint-enable react/prop-types */
