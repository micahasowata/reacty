import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex flex-row place-content-center">
			<div className="flex flex-col place-content-center">
				<FaceFrownIcon className="mx -5 w-3/4 h-3/4 text-neutral-950" />

				<h1 className="font-rethink font-medium text-7xl">Page Not Found.</h1>
				<button
					type="submit"
					className="font-rethink font-medium text-3xl underline underline-offset-8 text-neutral-950 my-8 rounded-sm"
				>
					<Link to="/">Go Home</Link>
				</button>
			</div>
		</div>
	);
};

export default NotFound;
