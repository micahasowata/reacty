import { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	let description = job.description;

	if (!showFullDescription) {
		description = description.substring(0, 223);
	}

	return (
		<div className="font-rethink flex flex-col py-8 px-7 my-4 w-2/5 h-2/5 rounded-sm">
			<sup className="font-medium text-base">
				{job.type.toString().toLowerCase()}.{" "}
				{job.location.toString().toLowerCase()}
			</sup>
			<h3 className="font-semibold text-2xl">{job.title}</h3>
			<p className="font-light pb-2">{description}...</p>
			<p className="font-medium py-2">{job.salary}</p>
			<button
				type="submit"
				className="bg-neutral-950 text-white px-3 py-2 rounded-sm"
			>
				<Link to={`/jobs/${job.id}`}>Read More</Link>
			</button>
		</div>
	);
};

export default JobCard;
