import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({ jobData }) => {
	const { name, job_title, id, icon_logo, salary, address, remote, full_time } =
		jobData;
	return (
		<div className="border p-5">
			<img className="h-52 w-52" src={icon_logo} alt="" />
			<h2 className="my-2 font-bold">{job_title}</h2>
			<h3 className="my-2 font-semibold">{name}</h3>
			<p className="my-3 font-semibold">
				<span className="p-2 me-5 border border-fuchsia-600 my-5 text-purple-500 border-black-600">
					{remote}
				</span>
				<span className="p-2 border border-fuchsia-600 text-purple-500">
					{' '}
					{full_time}
				</span>
			</p>
			<div className="flex gap-10 my-4">
				<p className="font-semibold ">
					{address.city},{address.country}
				</p>
				<p className="font-semibold">{salary}</p>
			</div>
			<Link to={`/jobDetails/{id}`}>
				<button
					// onClick={() => handleJobDetails(id)}
					className="p-2 bg-purple-500 rounded-md font-semibold text-white"
				>
					View Details
				</button>
			</Link>
		</div>
	);
};

export default Jobs;
