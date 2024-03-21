import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
	createRoutesFromElements(<Route index element={<Home />} />),
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
