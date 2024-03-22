import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Main = () => {
	return (
		<>
			<Navbar />
			<Toaster />
			<Outlet />
			<Footer />
		</>
	);
};

export default Main;
