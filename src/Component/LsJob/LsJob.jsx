import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
const LsJob = ({ lsJob }) => {
	const { name, job_title, id, icon_logo, salary, address, remote, full_time } =
		lsJob;
	return (
		<div className="my-container">
			<div className="flex justify-between items-center p-3 shadow-lg">
				<div className="flex gap-20">
					<div>
						<img className="w-52" src={icon_logo} alt="" />
					</div>
					<div className="">
						<h1 className="text-3xl font-bold my-2">{job_title}</h1>
						<h2 className="font-semibold my-2">{name}</h2>

						<div className="flex gap-8 my-2">
							<p className="border border-purple-300 p-2">{remote}</p>
							<p className="border border-purple-300 p-2">{full_time}</p>
						</div>
						<div className="flex gap-8 my-2">
							<p className="flex">
								<MapPinIcon className="h-6 w-6 text-black-500 me-2" />
								{address}
							</p>
							<p className="flex">
								<CurrencyDollarIcon className="h-6 w-6 text-black-500 me-2" />
								Salary : {salary}
							</p>
						</div>
					</div>
				</div>
				<div>
					<Link to={`/jobDetails`}>
						<button className=" my-20 p-2 bg-purple-500 rounded-md font-semibold text-white">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LsJob;
