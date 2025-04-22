import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const StarshipCard = (props) => {

  const { store, dispatch } = useGlobalReducer()

  const handleFavs = () => {
    dispatch({type:"toggle_favorites", payload: props.name})
  }
  return (
    <div className="card mx-2" style={{"minWidth": "19rem"}}>
      <img src="https://images.saymedia-content.com/.image/t_share/MTc1MTEzMzMzMTE5MTk4MzAz/top-6-iconic-spaceships-in-star-wars.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <span className="toggle mt-2 m-2" onClick={() => handleFavs()}><i className="btn btn-outline-danger fa-regular fa-heart" style={{ color: "#ef0658" }}></i></span>
          <Link to={`/starships/${props.uid}`} className="btn btn-outline-primary">Learn More</Link>
      </div>
    </div>
  );
}; 
