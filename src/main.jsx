import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './Component/About/About';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Jobs from './Component/Job/Jobs';
import JobDetails from './Component/JobDetails/JobDetails';
import Rechart from './Component/Rechart/Rechart';
import './index.css';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('job-categories.json'),
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'rechart',
				element: <Rechart />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: '/appliedJobs',
				element: <AppliedJobs />,
			},
			{
				path: 'job',
				element: <Jobs></Jobs>,
			},
			{
				path: 'jobDetails',
				element: <JobDetails />,
				loader: () => fetch('job-categories.json'),
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
