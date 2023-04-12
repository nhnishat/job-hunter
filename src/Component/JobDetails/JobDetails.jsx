import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';

const JobDetails = () => {
	const dataS = useLoaderData();
	const { id } = useParams();
	const [details, setDetails] = useState({});
	useEffect(() => {
		const myData = dataS.find((data) => data.id == id);
		if (myData) {
			setDetails(myData);
		}
	}, []);

	const [cart, setCart] = useState([]);

	const handleAddToCart = (details) => {
		let newSetCart = [];
		const newExists = cart.find((pd) => pd.id == details.quantity);
		// console.log(newExists)
		if (!newExists) {
			details.quantity = 1;
			newSetCart = [...cart, details];
		} else {
			newExists.quantity = newExists.quantity + 1;
			const remaining = cart.filter((pd) => pd.id !== details.quantity);
			newSetCart = [...remaining, newExists];
		}
		const newCart = [...cart, details];
		setCart(newCart);
		addToDb(details.id);
	};

	const {
		educational_req,
		job_desc,
		job_res,
		job_title,
		salary,
		phone,
		email,
		experience,
		address,
	} = details;
	return (
		<div className="my-container">
			<div className="my-20">
				<h1 className="text-center font-bold text-2xl">Job Details</h1>
			</div>
			<div className="flex justify-between my-20">
				<div className="w-1/2">
					<div>
						<p>
							<span className="font-bold text-sm me-3">Job Description :</span>
							<span className="font-normal leading-5"> {job_desc}</span>
						</p>
					</div>
					<div className="my-5">
						<p>
							<span className="font-bold text-sm me-3">
								Job Responsibility :
							</span>
							<span className="font-normal leading-5"> {job_res}</span>
						</p>
					</div>
					<div className="my-5">
						<p>
							<span className="font-bold text-sm me-3">
								Educational Requirements :
							</span>
							<span className="font-normal leading-5">{educational_req}</span>
						</p>
					</div>
					<div className="my-5">
						<p>
							<span className="font-bold text-sm me-3">Experiences : </span>
							<span className="font-normal leading-5">{experience}</span>
						</p>
					</div>
				</div>
				<div className="bg-purple-50 ps-5 pe-12 pt-2 ">
					<div>
						<h2 className="mb-5">
							<span className="font-semibold">Salary :</span>
							<span>{salary}</span>
						</h2>
						<p className="my-5">
							<span className="font-semibold">Job Title :</span>
							<span>{job_title}</span>
						</p>
						<h3 className="my-5">Contact Information </h3>
						<hr />
						<p className="my-5">
							<span className="font-semibold">Phone :</span>
							<span>{phone}</span>
						</p>
						<p className="my-5">
							<span className="font-semibold">Email :</span>
							<span>{email}</span>
						</p>
						<p className="my-5">
							<span className="font-semibold">Address : </span>
							<span>{address}</span>
						</p>
					</div>
					<div>
						<Link to="/appliedJobs">
							<button
								onClick={() => handleAddToCart(details)}
								className=" my-20 p-2 bg-purple-500 rounded-md font-semibold text-white w-full"
							>
								Apply Now
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
