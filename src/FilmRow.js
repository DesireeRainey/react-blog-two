import React, { Component } from 'react';

class FilmRow extends Component {
	render() {
		return(
		<div>
			<img src={this.props.url} alt="/" />
			<div>
				<h4>{this.props.title}</h4> 
				<h4>{this.props.release}</h4>
			</div>
		</div>
		)
	}
}


export default FilmRow;