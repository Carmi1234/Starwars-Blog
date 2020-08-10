import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const Characters = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const makeColumns = () => {
		return data.map((item, index) => {
			return (
				<div key={index} className="col-3">
					<div className="card ">
						<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name} </h5>
						</div>
						<ul className="list-group mx-auto ">
							<li className="descption1">{item.gender}</li>
							<li className="description2">{item.hair_color}</li>
							<li className="description3">{item.height}</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								Learn more!
							</a>
							<a type="button" onClick={() => actions.addFavorites()} href="#" className="card-link">
								Favorite
							</a>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="">
			<h2>{title}</h2>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">{makeColumns()}</div>
		</div>
	);
};
Characters.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array
};
