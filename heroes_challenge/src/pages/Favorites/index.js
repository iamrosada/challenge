import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import styles from './style.module.scss';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const getItem = localStorage.getItem('favorite');

    if (getItem) {
      setFavorites(JSON.parse(getItem));
    }
  }, []);

  function handleRemove(id) {
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem('favorite', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }
  return (
    <section className={styles.FavorContainer}>
      <div className={styles.FavorContent}>
        <span>FAVORITES PAGE</span>
        {favorites.map(favorite => (
          <Card favorite={favorite} handleRemove={handleRemove} />
        ))}
      </div>
    </section>
  );
}
