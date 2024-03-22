import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Job = () => {
	const [job, setJob] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchJob = async () => {
			try {
				const res = await fetch(`/api/jobs/${id}`);
				const data = await res.json();
				setJob(data);
			} catch (error) {
				console.error("fetch error", error);
			} finally {
				setLoading(false);
			}
		};

		fetchJob();
	}, []);

	return <>{loading ? <Spinner /> : <h2>{job.title}</h2>}</>;
};

export default Job;
