import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
	const dataS = useLoaderData();
	console.log(dataS);
	const { id } = useParams();
	console.log(id);
	const [details, setDetails] = useState();
	useEffect(() => {
		const myData = dataS.find((data) => data.id == id);
		if (myData) {
			setDetails(myData);
			console.log(myData);
		}
	}, []);
	return (
		<div>
			<h1>THis is JOb Details</h1>
		</div>
	);
};

export default JobDetails;
