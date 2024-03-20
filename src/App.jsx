import { BriefcaseIcon } from "@heroicons/react/24/outline";
const App = () => {
	const name = "Micah";
	return (
		<>
			<BriefcaseIcon className="h-16 w-16 text-violet-600" />
			<h1 className="font-ojuju font-bold">Hello {name}</h1>
			<p className="font-rethink font-bold">welcome</p>
		</>
	);
};

export default App;
