import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />

			<div className="flex flex-row justify-evenly pt-5">
				<Card title={"For employers"} body={"post jobs here"} cta={"Add Job"} />
				<Card
					title={"For developers"}
					body={"search for jobs here"}
					cta={"Find jobs"}
				/>
			</div>
		</>
	);
};

export default App;
