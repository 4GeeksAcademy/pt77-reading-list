import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})
  }
  return (
    <div className="card mx-2" style={{"minWidth": "18rem"}}>
      <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Death_star1.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <span className="toggle mt-2 m-2" onClick={() => handleFavs()}><i className="btn btn-outline-danger fa-regular fa-heart" style={{ color: "#ef0658" }}></i></span>
          <Link to={`/planets/${props.uid}`} className="btn btn-outline-primary">Learn More</Link>
      </div>
    </div>
  );
}; 