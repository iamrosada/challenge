import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/">
          <span>MY HEROES</span>
        </Link>
      </div>
    </header>
  );
}
