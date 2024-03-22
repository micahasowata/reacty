import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Job, { jobLoader } from "./pages/Job";
import Jobs from "./pages/Jobs";
import NewJob from "./pages/NewJob";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
			<Route index element={<Home />} />
			<Route path="/jobs" element={<Jobs />} />
			<Route path="/jobs/:id" element={<Job />} loader={jobLoader} />
			<Route path="/jobs/new" element={<NewJob />} />
			<Route path="*" element={<NotFound />} />
		</Route>,
	),
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
