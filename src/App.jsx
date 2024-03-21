import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
			<Route index element={<Home />} />
		</Route>,
	),
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
