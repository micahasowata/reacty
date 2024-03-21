const Card = ({ title, body, cta, to = "/" }) => {
	return (
		<div className=" flex flex-col p-7 shadow-sm shadow-slate-900 w-2/5 rounded-sm">
			<h3 className="font-rethink font-semibold text-2xl">{title}</h3>
			<p className="font-rethink font-light py-4">{body}</p>
			<button
				type="submit"
				className="font-rethink bg-neutral-950 text-white px-3 py-2 rounded-sm"
			>
				<a href={to} className="font-rethink">
					{cta}
				</a>
			</button>
		</div>
	);
};

export default Card;
