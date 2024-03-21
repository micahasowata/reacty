import { Link } from "react-router-dom";
import jobs from "../jobs.json";
import JobCard from "./JobCard";
const Listing = ({
	end = jobs.jobs.length,
	header = "Browse Jobs",
	cta,
	to = "/",
}) => {
	if (end > jobs.jobs.length) {
		end = jobs.jobs.length;
	}
	const latestJobs = jobs.jobs.slice(0, end);
	return (
		<>
			<section className="flex flex-col flex-wrap place-content-center bg-slate-200">
				<h2 className="font-rethink font-semibold text-5xl flex place-content-center p-10">
					{header}
				</h2>
				<div className="flex flex-wrap justify-around">
					{latestJobs.map((job) => (
						<JobCard key={job.id} job={job} />
					))}
				</div>
				<div className="grid grid-cols-12 place-content-center">
					<button
						type="submit"
						className="font-rethink grid col-start-5 col-end-12 align-middle w-3/5 font-semibold text-2xl underline underline-offset-8  text-neutral-950 px-3 py-2 rounded-sm"
					>
						<Link to={to}>{cta}</Link>
					</button>
				</div>
			</section>
		</>
	);
};

export default Listing;
