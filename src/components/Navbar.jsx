import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						{/* <button className="btn btn-primary btn-lg dropdown-toggle dropdown-menu-end" type="button" data-bs-toggle="dropdown" aria-expanda="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length > 0 ? store.favorites.map((favorite, index) => {
							<li>
								{favorite}
							</li>
							})
							:<li>add a favorite</li>}
						</ul> */}
					</Link>
				</div>
			</div>
		</nav>
	);
};