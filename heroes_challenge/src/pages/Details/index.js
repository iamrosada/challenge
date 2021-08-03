/* eslint-disable react/prop-types  */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/destructuring-assignment */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';

import styles from './style.module.scss';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailSuperHero: {},
    };
    this.handleHero = this.handleHero.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    const url = `https://www.superheroapi.com/api.php/929494281231839/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ DetailSuperHero: json });
      });
  }

  handleHero() {
    let storageFav = localStorage.getItem('favorite');

    if (storageFav) {
      storageFav = JSON.parse(storageFav);
      localStorage.setItem(
        'favorite',
        JSON.stringify([...storageFav, this.state.DetailSuperHero])
      );
    } else {
      localStorage.setItem(
        'favorite',
        JSON.stringify([this.state.DetailSuperHero])
      );
    }

    window.location.href = '/favorite';
  }

  render() {
    return (
      <section className={styles.DetailsPage}>
        <div
          key={this.state.DetailSuperHero.id}
          className={styles.DetailsContent}
        >
          <div>
            <img
              src={this.state.DetailSuperHero.image?.url}
              alt="hero_details"
            />
            <button type="submit" onClick={() => this.handleHero()}>
              Adicionar a lista de favoritos
            </button>
          </div>

          <div className={styles.about}>
            <span>{this.state.DetailSuperHero.name}</span>

            <ul>
              <li>
                <div>Full-Name:</div>{' '}
                {this.state.DetailSuperHero.biography?.['full-name']}
              </li>
              <li>
                <div>Alter-Egos:</div>{' '}
                {this.state.DetailSuperHero.biography?.['alter-egos']}
              </li>

              <li>
                <div>Aliases:</div>
                {this.state.DetailSuperHero.biography?.aliases[1]}
              </li>
              <li>
                <div>Place-of-Birth:</div>{' '}
                {this.state.DetailSuperHero.biography?.['place-of-birth']}
              </li>
              <li>
                <div>First-Appearance:</div>{' '}
                {this.state.DetailSuperHero.biography?.['first-appearance']}
              </li>
              <li>
                <div>Publisher:</div>
                {this.state.DetailSuperHero.biography?.publisher}
              </li>
              <li>
                <div>Alignment:</div>
                {this.state.DetailSuperHero.biography?.alignment}
              </li>
              <li>
                <div>intelligence:</div>{' '}
                {this.state.DetailSuperHero.powerstats?.intelligence}
              </li>
              <li>
                <div>power:</div>
                {this.state.DetailSuperHero.powerstats?.power}
              </li>
              <li>
                <div>occupation:</div>{' '}
                {this.state.DetailSuperHero.work?.occupation}
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
/* eslint-enable react/prop-types */
