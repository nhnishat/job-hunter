import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
	const { id } = useParams();
	const data = useLoaderData();
	console.log(data);
	useEffect(() => {
		if (Array.isArray(data)) {
			const pr = data.find((p) => p.id === id);
			if (pr) {
				console.log(pr);
			} else {
				console.log(`No job found with id ${id}`);
			}
		}
	}, [data, id]);
	return <div></div>;
};

export default JobDetails;
