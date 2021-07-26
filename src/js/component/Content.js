import React from "react";
import PropTypes from "prop-types";

export function Content(props) {
	return (
		<div className="card col">
			<img
				src={props.image}
				className="card-img-top"
				alt={props.description}
			/>
			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-bottom">
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}

Content.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
