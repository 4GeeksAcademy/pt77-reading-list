import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CharacterCard } from "../components/characterCard.jsx";
import { PlanetCard } from "../components/planetCard";
import { StarshipCard } from "../components/starshipCard.jsx";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);
	const { store, dispatch, getCharacters, getPlanets, getStarships } = useGlobalReducer()

	useEffect(() => {
		getCharacters()

	}, [])

	useEffect(() => {
		getPlanets()

	}, [])

	useEffect(() => {
		getStarships()

	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setPlanets(store.planets)
	}, [store.planets])

	useEffect(() => {
		setStarships(store.starships)
	}, [store.starships])

	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto">
				{characters?.map((character, index) => {
					return <CharacterCard key={character.uid} name={character.name} uid={character.uid} />
				})}
			</div>
			<div className="text-center mt-5">
				<h2>Planets</h2>
				<div className="d-flex col-10 overflow-auto mt-5 mx-auto">
					{planets?.map((planet, index) => {
						return <PlanetCard key={planet.uid} name={planet.name} uid={planet.uid} />
					})}
				</div>
			</div>
			<div className="text-center mt-5">
				<h2>Starships</h2>
				<div className="d-flex col-10 overflow-auto mt-5 mx-auto">
					{starships?.map((starship, index) => {
						return <StarshipCard key={starship.uid} name={starship.name} uid={starship.uid} />
					})}
				</div>
			</div>
		</div>
	);
}; 


// add card for details
// remove button
// add background imgs n icons