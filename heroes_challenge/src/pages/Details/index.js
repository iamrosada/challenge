/* eslint-disable react/prop-types  */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/destructuring-assignment */

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
      .then(response => response.json())
      .then(json => {
        this.setState({ DetailSuperHero: json });
        console.log(json);
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
                Full-Name: {this.state.DetailSuperHero.biography?.['full-name']}
              </li>
              <li>
                Alter-Egos:{' '}
                {this.state.DetailSuperHero.biography?.['alter-egos']}
              </li>

              <li>
                Aliases: {this.state.DetailSuperHero.biography?.aliases[1]}
              </li>
              <li>
                Place-of-Birth:{' '}
                {this.state.DetailSuperHero.biography?.['place-of-birth']}
              </li>
              <li>
                First-Appearance:{' '}
                {this.state.DetailSuperHero.biography?.['first-appearance']}
              </li>
              <li>
                Publisher: {this.state.DetailSuperHero.biography?.publisher}
              </li>
              <li>
                Alignment: {this.state.DetailSuperHero.biography?.alignment}
              </li>
              <li>
                intelligence:{' '}
                {this.state.DetailSuperHero.powerstats?.intelligence}
              </li>
              <li>power: {this.state.DetailSuperHero.powerstats?.power}</li>
              <li>occupation: {this.state.DetailSuperHero.work?.occupation}</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
/* eslint-enable react/prop-types */
