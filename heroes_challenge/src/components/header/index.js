import React from 'react';
import styles from './style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span>MY HEROES</span>
      </div>
    </header>
  );
}
