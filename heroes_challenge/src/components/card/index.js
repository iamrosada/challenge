import React from 'react';
import marvel from '../../assets/marvel.jpg';
import styles from './style.module.scss';

export default function Card() {
  return (
    <section className={styles.allCard}>
      <div>
        <img src={marvel} alt="hero" />
        <div className={styles.removerHero}>
          <span>ROSADA</span>
          <button type="button">Remover</button>
        </div>
      </div>
    </section>
  );
}
