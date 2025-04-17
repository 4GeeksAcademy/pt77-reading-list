import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import storeReducer from "../store.js";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<div class="dropdown">
							<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								FAVORITES
							</button>
							<ul class="dropdown-menu">
								{store.favorites.length > 0 ? store.favorites.map((favorite, index) => (
									<li className="text-primary">{favorite}</li>
								))
									: <li>
										Add a favorite
									</li>}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};


