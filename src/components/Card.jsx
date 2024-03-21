import { Link } from "react-router-dom";
const Card = ({ title, body, cta, to = "/" }) => {
	return (
		<div className="font-rethink flex flex-col p-7 shadow-sm shadow-slate-900 w-2/5 rounded-sm">
			<h3 className="font-semibold text-2xl">{title}</h3>
			<p className="font-light py-4">{body}</p>
			<button
				type="submit"
				className="bg-neutral-950 text-white px-3 py-2 rounded-sm"
			>
				<Link to={to}>{cta}</Link>
			</button>
		</div>
	);
};

export default Card;
