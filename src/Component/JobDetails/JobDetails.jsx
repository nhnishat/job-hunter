import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
	const featuresD = useLoaderData();
	const { id } = useParams();
	const [jobs, setJobs] = useState({});
	useEffect(() => {
		const jobData = featuresD.find((feature) => feature.id == id);
		setJobs(jobData);
		console.log(jobs);
	}, []);
	return (
		<div>
			<h2>Job Details</h2>
		</div>
	);
};

export default JobDetails;
