import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Characters } from "../component/characters";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 ">
			<Characters title="Characters" data={store.characters} />
			<Planets title="Planets" data={store.planets} />
		</div>
	);
};
