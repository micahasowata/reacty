const Navbar = () => {
	return (
		<nav className="px-5">
			<ul className="flex flex-row justify-between align-middle content-center">
				<a
					href="/"
					className="flex flex-row justify-between align-middle content-center"
				>
					<p className="font-ojuju  font-bold text-2xl p-2">React Jobs</p>
				</a>
				<div className="flex flex-row justify-stretch align-middle content-center">
					<a href="/" className="p-3 font-rethink font-semibold">
						Jobs
					</a>
					<a href="/" className="p-3 font-rethink font-semibold">
						Add Jobs
					</a>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
