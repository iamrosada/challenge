/* eslint-disable react/prop-types  */
import React from 'react';

import styles from './style.module.scss';

export default function Card({ handleRemove, favorite }) {
  return (
    <section className={styles.allCard}>
      <div>
        <img src={favorite.image.url} alt="hero" />
        <div className={styles.removerHero}>
          <span>{favorite.name}</span>
          <button type="button" onClick={() => handleRemove(favorite.id)}>
            Remover
          </button>
        </div>
      </div>
    </section>
  );
}
/* eslint-enable react/prop-types */
