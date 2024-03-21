const JobCard = ({ job }) => {
	return (
		<div className="font-rethink flex flex-col py-8 px-7 w-2/5 h-2/5 rounded-sm">
			<sup className="font-medium text-base">
				{job.type.toString().toLowerCase()}.{" "}
				{job.location.toString().toLowerCase()}
			</sup>
			<h3 className="font-semibold text-2xl">{job.title}</h3>
			<p className="font-light pb-2">{job.description}</p>
			<p className="font-medium py-2">{job.salary}</p>
			<button
				type="submit"
				className="bg-neutral-950 text-white px-3 py-2 rounded-sm"
			>
				<a href={`/jobs/${job.id}`}>Read More</a>
			</button>
		</div>
	);
};

export default JobCard;
