import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
	return (
		<div className="my-container">
			<h2 className="font-bold tex-3xl text-center my-20">
				Applied Jobs pages
			</h2>
			<div className="flex justify-between items-center">
				<div className="flex gap-20">
					<div>
						<img src="" alt="" />
					</div>
					<div className="">
						<h1>job-title</h1>
						<div className="flex gap-8">
							<p>outSite</p>
							<p>Full Time</p>
						</div>
						<div className="flex gap-8">
							<p>location</p>
							<p>salary</p>
						</div>
					</div>
				</div>
				<div>
					<Link to={`jobDetails/${[]}`}>
						<button className=" my-20 p-2 bg-purple-500 rounded-md font-semibold text-white">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobs;
