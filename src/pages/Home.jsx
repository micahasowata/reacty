import Card from "../components/Card";
import Hero from "../components/Hero";
import Listing from "../components/Listing";
import Navbar from "../components/Navbar";

const Home = () => {
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
			<Listing end={2} />
		</>
	);
};

export default Home;
