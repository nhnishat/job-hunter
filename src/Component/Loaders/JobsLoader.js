import { getShoppingCart } from '../../../utilities/fakedb';

const jobsLoader = async () => {
	const jobsCategories = await fetch('job-categories.json');
	const jobs = await jobsCategories.json();
	// console.log(jobs);
	const storedJob = getShoppingCart();
	const saveJob = [];

	for (const id in storedJob) {
		const addedJobs = jobs.find((pd) => pd.id === id);
		if (addedJobs) {
			const quantity = storedJob[id];
			addedJobs.quantity = quantity;
			saveJob.push(addedJobs);
		}
	}
	return saveJob;
};

export default jobsLoader;
