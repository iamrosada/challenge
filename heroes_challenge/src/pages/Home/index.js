import React from 'react';
import Card from '../../components/card';
import Marvel from '../../components/marvel';
import styles from './style.module.scss';

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <Marvel />
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <strong>FEATURED CHARACTERS</strong>
          <Card />
        </div>
      </div>
    </section>
  );
}
