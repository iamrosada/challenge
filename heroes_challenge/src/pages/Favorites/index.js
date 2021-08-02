import React from 'react';
import Card from '../../components/card';
import styles from './style.module.scss';

export default function Favorites() {
  return (
    <section className={styles.FavorContainer}>
      <div className={styles.FavorContent}>
        <span>FAVORITES PAGE</span>
        <Card />
      </div>
    </section>
  );
}
