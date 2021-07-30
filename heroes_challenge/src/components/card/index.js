import React from 'react';
import styles from './style.module.scss';
import marvel from '../../assets/marvel.jpg';

export default function Card() {
  return (
    <section className={styles.allCard}>
      <div>
        <img src={marvel} alt="hero" />
        <span>Wanda maximoff</span>
      </div>
      <div>
        <img src={marvel} alt="hero" />
        <span>Wanda maximoff</span>
      </div>
    </section>
  );
}
