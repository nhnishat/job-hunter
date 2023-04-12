import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Jobs from './Component/Job/Jobs';
import JobDetails from './Component/JobDetails/JobDetails';
import Rechart from './Component/Rechart/Rechart';
import './index.css';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('job-categories.json'),
			},
			{
				path: 'rechart',
				element: <Rechart />,
			},
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: '/appliedJobs',
				element: <AppliedJobs />,
				// loader: jobsLoader,
			},
			{
				path: 'job',
				element: <Jobs></Jobs>,
			},
			{
				path: 'jobDetails/:id',
				element: <JobDetails />,
				loader: () => fetch('/job-categories.json'),
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
