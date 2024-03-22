import { Link, useLoaderData, useParams } from "react-router-dom";
const Job = () => {
	const { id } = useParams();
	const job = useLoaderData();

	return (
		<div className="font-rethink my-3 bg-slate-200">
			<div className="grid grid-cols-12 gap-4 place-content-center my-2">
				<div className="grid col-start-2 col-end-9">
					<div className="p-2 my-3">
						<p className="font-light text-sm">{job.type}</p>
						<h2 className="font-bold text-4xl">{job.title}</h2>
						<p className="font-medium">{job.location}</p>
					</div>
					<div className="pb-3">
						<h3 className="font-semibold text-3xl">Job Description</h3>
						<p className="py-3">{job.description}</p>
						<p className="font-medium">{job.salary}</p>
					</div>
				</div>
				<div className="grid col-start-9 col-end-12">
					<div className="p-5 my-3">
						<p className="font-medium">Company Info</p>
						<h3 className="font-semibold text-2xl">{job.company.name}</h3>
						<p className="py-3">{job.company.description}</p>
						<h4 className="font-semibold text-xl">Contact Email:</h4>
						<p className="p-2 my-1 bg-neutral-800 text-slate-200 rounded-sm">
							{job.company.contactEmail}
						</p>
						<h4 className="font-semibold text-xl">Contact Phone:</h4>
						<p className="p-2 my-1 bg-neutral-800 text-slate-200 rounded-sm">
							{job.company.contactPhone}
						</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 place-content-center">
				<button
					type="submit"
					className="grid col-start-5 col-end-12 align-middle w-3/5 font-semibold text-2xl underline underline-offset-8  text-neutral-950 my-4 rounded-sm"
				>
					<Link to={"/jobs"}>See Other Jobs</Link>
				</button>
			</div>
		</div>
	);
};

const jobLoader = async ({ params }) => {
	const res = await fetch(`/api/jobs/${params.id}`);
	const data = await res.json();
	return data;
};

export { Job as default, jobLoader };
