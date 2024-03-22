import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditJob = ({ updateJob }) => {
	const navigate = useNavigate();
	const data = useLoaderData();

	const [type, setType] = useState(data.type);
	const [title, setTitle] = useState(data.title);
	const [description, setDescription] = useState(data.description);
	const [salary, setSalary] = useState(data.salary);
	const [location, setLocation] = useState(data.location);
	const [companyName, setCompanyName] = useState(data.company.name);
	const [companyDescription, setCompanyDescription] = useState(
		data.company.description,
	);
	const [companyEmail, setCompanyEmail] = useState(data.company.contactEmail);
	const [companyPhone, setCompanyPhone] = useState(data.company.contactPhone);

	const id = data.id.toString();

	const handleSubmit = (event) => {
		event.preventDefault();
		const updatedJob = {
			id: id,
			type: type,
			title: title,
			description: description,
			salary: salary,
			location: location,
			company: {
				name: companyName,
				description: companyDescription,
				contactEmail: companyEmail,
				contactPhone: companyPhone,
			},
		};
		updateJob(updatedJob);

		toast.success("edited successfully");
		return navigate(`/jobs/${id}`);
	};

	return (
		<div className="font-rethink flex flex-col bg-slate-200">
			<div className="flex place-content-center">
				<h2 className="font-bold text-4xl py-3">Update Job</h2>
			</div>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-12 place-content-center"
			>
				<div className="grid col-start-5 col-end-10">
					<fieldset className="flex flex-col">
						<div className="flex flex-col my-4">
							<label htmlFor="type" className="mb-2 font-semibold text-lg">
								Type
							</label>
							<select
								name="type"
								className="rounded-sm p-2"
								id="type"
								value={type}
								onChange={(e) => setType(e.target.value)}
							>
								<option value="full-time">Full Time</option>
								<option value="part-time">Part Time</option>
							</select>
						</div>

						<div className="flex flex-col mb-4">
							<label htmlFor="title" className="mb-2 font-semibold text-lg">
								Title
							</label>
							<input
								type="text"
								placeholder="e.g Senior UI Engineer (React)"
								name="title"
								id="title"
								className="rounded-sm p-2"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mb-4">
							<label
								htmlFor="description"
								className="mb-2 font-semibold text-lg"
							>
								Description
							</label>
							<textarea
								name="description"
								cols={20}
								rows={5}
								id="description"
								placeholder="We are looking for a great react dev..."
								className="rounded-sm p-2"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="salary" className="mb-2 font-semibold text-lg">
								Salary
							</label>
							<select
								name="salary"
								className="rounded-sm p-2"
								id="salary"
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							>
								<option value="$50K - $70K">$50K - $70K</option>
								<option value="$70K - $80K">$70K - $80K</option>
								<option value="$80K - $100K">$80K - $100K</option>
							</select>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="location" className="mb-2 font-semibold text-lg">
								Location
							</label>
							<input
								type="text"
								name="location"
								id="location"
								placeholder="e.g Palo Alto, CA"
								className="rounded-sm p-2"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>

						<h3 className="my-3 font-semibold text-2xl">Company Info</h3>
						<div className="flex flex-col mb-4">
							<label
								htmlFor="company-name"
								className="mb-2 font-semibold text-lg"
							>
								Name
							</label>
							<input
								type="text"
								name="company-name"
								id="company-name"
								placeholder="e.g Google"
								className="rounded-sm p-2"
								value={companyName}
								onChange={(e) => setCompanyName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label
								htmlFor="company-description"
								className="mb-2 font-semibold text-lg"
							>
								Description
							</label>
							<textarea
								name="company-description"
								id="company-description"
								placeholder="e.g Google organizes the world's information and make it universally accessible and useful..."
								cols={20}
								rows={5}
								className="rounded-sm p-2"
								value={companyDescription}
								onChange={(e) => setCompanyDescription(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label
								htmlFor="company-email"
								className="mb-2 font-semibold text-lg"
							>
								Email
							</label>
							<input
								type="email"
								name="company-email"
								id="company-email"
								placeholder="e.g google@google.com"
								className="rounded-sm p-2"
								value={companyEmail}
								onChange={(e) => setCompanyEmail(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label
								htmlFor="company-phone"
								className="mb-2 font-semibold text-lg"
							>
								Phone
							</label>
							<input
								type="tel"
								name="company-phone"
								id="company-phone"
								placeholder="e.g +552 2300 976 732"
								className="rounded-sm p-2"
								value={companyPhone}
								onChange={(e) => setCompanyPhone(e.target.value)}
							/>
						</div>
						<div className="flex flex-col place-content-center my-3">
							<button
								type="submit"
								className="font-rethink place-content-center font-semibold text-2xl text-slate-100 bg-neutral-950 px-3 py-2 rounded-sm"
							>
								Update Job
							</button>
						</div>
					</fieldset>
				</div>
			</form>
		</div>
	);
};

export default EditJob;
