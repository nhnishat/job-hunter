import React, { useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = ({ jobCircular }) => {
	const [showAll, setShowAll] = useState(false);
	const handleMoreButton = () => {
		setShowAll(true);
		console.log('click');
	};
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
				{jobCircular.slice(0, showAll ? 6 : 4).map((jobData) => (
					<Job key={jobData.id} jobData={jobData} />
				))}
			</div>
			<div className="text-center items-center">
				{!showAll && (
					<button
						onClick={handleMoreButton}
						className=" my-20 p-2 bg-purple-500 rounded-md font-semibold text-white "
					>
						See All Jobs
					</button>
				)}
			</div>
		</section>
	);
};

export default FeaturedJobs;
