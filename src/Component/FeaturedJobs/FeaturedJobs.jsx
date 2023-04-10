import React from 'react';
import Job from '../Job/Job';

const FeaturedJobs = ({ jobCircular }) => {
	return (
		<section>
			<div className="text-center my-20 ">
				<h2 className="font-bold text-4xl">Featured Jobs</h2>
				<p className="font-normal text-sm my-3">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{jobCircular.map((job) => (
					<Job key={job.id} job={job} />
				))}
			</div>
			<button className=" my-20 p-2 bg-purple-500 rounded-md font-semibold text-white text-center inline-flex items-center">
				See All Jobs
			</button>
		</section>
	);
};

export default FeaturedJobs;
