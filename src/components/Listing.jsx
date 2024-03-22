import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
const Listing = ({ end, header = "Browse Jobs", cta, to = "/" }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const res = await fetch("/api/jobs");
				const data = await res.json();
				setJobs(data);
			} catch (error) {
				console.error("jobs fetch error", error);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	return (
		<>
			<section className="flex flex-col flex-wrap place-content-center bg-slate-200">
				<h2 className="font-rethink font-semibold text-5xl flex place-content-center p-10">
					{header}
				</h2>
				<div className="flex flex-wrap justify-around">
					{loading ? (
						<Spinner />
					) : end !== 0 ? (
						jobs.slice(0, end).map((job) => <JobCard key={job.id} job={job} />)
					) : (
						jobs
							.slice(0, jobs.length)
							.map((job) => <JobCard key={job.id} job={job} />)
					)}
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
