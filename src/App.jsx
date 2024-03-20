import { BriefcaseIcon } from "@heroicons/react/24/outline";
const App = () => {
	const name = "Micah";
	const tech = [
		{ id: 1, name: "Meta" },
		{ id: 2, name: "Microsoft" },
		{ id: 3, name: "Apple" },
		{ id: 4, name: "Airbnb" },
		{ id: 5, name: "Stripe" },
		{ id: 6, name: "Google" },
		{ id: 7, name: "Netflix" },
	];
	return (
		<>
			<BriefcaseIcon className="h-16 w-16 text-violet-600" />
			<h1 className="font-ojuju font-bold">Hello {name}</h1>
			<ul>
				{tech.map((n) => (
					<li key={n.id} className="font-rethink">
						{n.name}
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
