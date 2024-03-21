import Card from "../components/Card";
import Hero from "../components/Hero";
import Listing from "../components/Listing";

const Home = () => {
	return (
		<>
			<Hero />
			<div className="flex flex-row justify-evenly pt-10 pb-5">
				<Card title={"For employers"} body={"post jobs here"} cta={"Add Job"} />
				<Card
					title={"For developers"}
					body={"search for jobs here"}
					cta={"Find jobs"}
					to={"/jobs"}
				/>
			</div>
			<Listing end={2} cta={"All Jobs"} to={"/jobs"} />
		</>
	);
};

export default Home;
