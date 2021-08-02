/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

function SearchResultItem(props) {
  const { data } = props;

  console.log('data', data);
  return (
    <div className={styles.allCard}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link to={`/about/${data.id}`}>
        <div key={data.id}>
          <img src={data.image.url} alt="super pic" />

          <span>{data.name}</span>
        </div>
      </Link>
    </div>
  );
}

export default SearchResultItem;
/* eslint-enable react/prop-types */
