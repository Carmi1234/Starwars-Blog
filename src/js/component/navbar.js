import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand">Star Wars</a>

				<ul className="nav nav-pills">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							data-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</a>
						<div className="dropdown-menu">
							{store.favorites.length > 0 &&
								store.favorites.map((item, index) => {
									return (
										<a key={index} className="dropdown-item" href="#">
											{item}
										</a>
									);
								})}
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
