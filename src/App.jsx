import Card from "./components/Card";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import jobs from "./jobs.json";

const App = () => {
	const latestJobs = jobs.jobs.slice(0, 2);
	return (
		<>
			<Navbar />
			<Hero />
			<div className="flex flex-row justify-evenly pt-10 pb-5">
				<Card title={"For employers"} body={"post jobs here"} cta={"Add Job"} />
				<Card
					title={"For developers"}
					body={"search for jobs here"}
					cta={"Find jobs"}
				/>
			</div>
			<div className="flex flex-col flex-wrap place-content-center bg-slate-200">
				<h2 className="font-rethink font-semibold text-5xl flex place-content-center p-10">
					Browse Jobs
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
						<a href="/">All Jobs</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
