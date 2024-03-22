import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const Job = ({ deleteJob }) => {
	const { id } = useParams();
	const job = useLoaderData();

	const navigate = useNavigate();
	const onDeleteClick = (jobID) => {
		const confirm = window.confirm("Are you sure you want to delete this job?");
		if (!confirm) return;

		deleteJob(jobID);
		toast.success("deleted job successfully");
		return navigate("/jobs");
	};
	return (
		<div className="font-rethink my-3 bg-slate-200">
			<div className="grid grid-cols-12 gap-4 place-content-center my-2">
				<div className="grid col-start-2 col-end-9">
					<div className="p-2 my-3">
						<p className="font-light text-sm">{job.type}</p>
						<h2 className="font-bold text-4xl">{job.title}</h2>
						<p className="font-medium">{job.location}</p>
						<div className="py-5 mt-10">
							<h3 className="font-semibold text-3xl">Job Description</h3>
							<p className="py-3">{job.description}</p>
							<p className="font-medium">{job.salary}</p>
						</div>
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
						<div className="flex flex-col p-5 my-3">
							<button
								type="submit"
								className=" align-middle font-semibold text-2xl bg-neutral-800 text-slate-100 p-2 my-4 rounded-sm"
							>
								<Link to={`/jobs/${job.id}/edit`}>Edit Job</Link>
							</button>
							<button
								type="submit"
								onClick={() => onDeleteClick(job.id)}
								className="align-middle font-semibold text-2xl bg-neutral-800 text-slate-100 p-2 my-4 rounded-sm"
							>
								<Link to={"/jobs"}>Delete Job</Link>
							</button>
						</div>
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
