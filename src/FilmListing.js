import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
	render() {
		const allFilms = this.props.films.map((films, index) => {
			return(
			<div className="film-list">
				<FilmRow key={films.id} title={films.title} />
			</div>	
			);
		});
		return (
		<div className="film-list">
        <h1 className="section-title">FILMS</h1>
			<h1>{allFilms}</h1>
        </div>
		);
	}
}


export default FilmListing;