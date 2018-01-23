import React, { Component } from 'react';
import logo from './logo.svg';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
