import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})
  }
  return (
    <div className="card mx-2" style={{"minWidth": "18rem"}}>
      <img src="https://charactersforparties.com/wp-content/uploads/2019/10/hero-storm-trooper-768x898.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <span className="toggle mt-2 m-2" onClick={() => handleFavs()}><i className="btn btn-outline-danger fa-regular fa-heart" style={{ color: "#ef0658" }}></i></span>
          <Link to={`/characters/${props.uid}`} className="btn btn-outline-primary">Learn More</Link>
      </div>
    </div>
  );
}; 