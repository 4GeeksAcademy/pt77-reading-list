import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StarshipDetails = () => {
  const { uid } = useParams()
  const [starships, setStarships] = useState({})
  const { store, dispatch } = useGlobalReducer()

  useEffect(()=>{
    getEachStarship()
  }, [])

  const getEachStarship = async () => {
    let response = await fetch("https://www.swapi.tech/api/starships/" + uid)
    let data = await response.json();
    setStarships(data.result.properties);
  }
  
  return (
    <div className="text-center mt-5">
      <h1>Name:</h1>
      <h3>{starships.name}</h3>

      <h1>HyperDrive Rating:</h1>
      <h3>{starships.hyperdrive_rating}</h3>

      <h1>Model:</h1>
      <h3>{starships.model}</h3>
    </div>
  );
}; 