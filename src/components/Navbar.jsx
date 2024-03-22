import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="px-5">
			<ul className="flex flex-row justify-between align-middle content-center">
				<Link
					to="/"
					className="flex flex-row justify-between align-middle content-center"
				>
					<p className="font-ojuju  font-bold text-2xl p-2">React Jobs</p>
				</Link>
				<div className="flex flex-row justify-stretch align-middle content-center">
					<Link to="/jobs" className="p-3 font-rethink font-semibold">
						Jobs
					</Link>
					<Link to="/jobs/new" className="p-3 font-rethink font-semibold">
						Add Jobs
					</Link>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
