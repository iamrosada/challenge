import React, { useState } from 'react';

import Marvel from '../../components/marvel';
import styles from './style.module.scss';

import SearchBar from '../../components/searchBar';
import SearchResults from '../../components/searchResults';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes() {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/929494281231839/search/${searchText}`
    );
    const data = await response.json();

    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <>
      <section className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <Marvel />
        </div>
        <div className={styles.main}>
          <SearchBar searchText={searchText} handleChange={handleChange} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <strong>FEATURED CHARACTERS</strong>
            <SearchResults superheroData={superheroData} />
          </div>
        </div>
      </section>
    </>
  );
}
