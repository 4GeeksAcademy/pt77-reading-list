import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetails = () => {
  const { uid } = useParams()
  const [planet, setPlanet] = useState({})
  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {
    getEachPlanet()
  }, [])

  const getEachPlanet = async () => {
    let response = await fetch("https://www.swapi.tech/api/planets/" + uid)
    let data = await response.json();
    setPlanet(data.result.properties);
  }

  return (
    <div className="text-center mt-5">
      <div className="charactercard">
        <h1>Name:</h1>
        <h3>{planet.name}</h3>

        <h1>Climate:</h1>
        <h3>{planet.climate}</h3>

        <h1>Terrain:</h1>
        <h3>{planet.terrain}</h3>
      </div>
    </div>
  );
}; 