import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Main from "./layout/Main";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";
import Job, { jobLoader } from "./pages/Job";
import Jobs from "./pages/Jobs";
import NewJob from "./pages/NewJob";
import NotFound from "./pages/NotFound";

const App = () => {
	// Add Job
	const newJob = async (job) => {
		const res = await fetch("/api/jobs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(job),
		});

		return;
	};

	// Delete Job
	const removeJob = async (id) => {
		console.log(id);
		const res = await fetch(`/api/jobs/${id}`, {
			method: "DELETE",
		});
		return;
	};

	// Update Job
	const editJob = async (job) => {
		console.log(job.id);

		const res = await fetch(`/api/jobs/${job.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(job),
		});

		return;
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Main />}>
				<Route index element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/jobs/new" element={<NewJob addJob={newJob} />} />
				<Route
					path="/jobs/:id"
					element={<Job deleteJob={removeJob} />}
					loader={jobLoader}
				/>
				<Route
					path="/jobs/:id/edit"
					element={<EditJob updateJob={editJob} />}
					loader={jobLoader}
				/>
				<Route path="*" element={<NotFound />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
};

export default App;
