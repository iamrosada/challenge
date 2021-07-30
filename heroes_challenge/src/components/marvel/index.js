import React from 'react';
import styles from './marvel.module.scss';

export default function Marvel() {
  return (
    <div className={styles.marvels}>
      <span>MARVEL CHARACTERS</span>
      <p>
        Get hooked on a hearty helping of heroes and villains from the humble
        House of ideas!
      </p>
    </div>
  );
}
