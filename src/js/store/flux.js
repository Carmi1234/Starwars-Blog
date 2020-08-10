const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["test"],
			characters: [
				{
					name: "test",
					gender: "test",
					hair_color: "test",
					height: "test"
				},
				{
					name: "test",
					gender: "test",
					hair_color: "test",
					height: "test"
				},
				{
					name: "test",
					gender: "test",
					hair_color: "test",
					height: "test"
				}
			],

			planets: [
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the card content."
				},
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the card content."
				},
				{
					name: "test",
					description:
						"Some quick example text to build on the card title and make up the bulk of the card content."
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorites: () => {
				console.log("Test");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
