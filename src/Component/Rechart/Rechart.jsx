import React from 'react';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const Rechart = () => {
	const marks = [
		{
			id: '643403328c18dd5f36538804',
			index: 0,
			AssignMent: 57,
			name: 'Assignment1',
			totalMart: 60,
		},
		{
			id: '64340332d775e487566f0df7',
			index: 1,
			AssignMent: 60,
			name: 'Assignment2',
			totalMart: 60,
		},
		{
			id: '64340332ba11176e393c975a',
			index: 2,
			AssignMent: 60,
			name: 'Assignment3',
			totalMart: 60,
		},
		{
			id: '643403320694834dae8420eb',
			index: 3,
			AssignMent: 55,
			name: 'Assignment4',
			totalMart: 60,
		},
		{
			id: '643403323e7c2fd3e74f9ccd',
			index: 4,
			AssignMent: 55,
			name: 'Assignment5',
			totalMart: 60,
		},
		{
			id: '64340332f232c6c783ff39ac',
			index: 5,
			AssignMent: 54,
			name: 'Assignment6',
			totalMart: 60,
		},
		{
			id: '6434033210b05757e00538c1',
			index: 6,
			AssignMent: 60,
			name: 'Assignment7',
			totalMart: 60,
		},
		{
			id: '643403321b0fc75c4c1d717b',
			index: 7,
			AssignMent: 60,
			name: 'Assignment8',
			totalMart: 60,
		},
	];
	return (
		<div className="my-20 my-container">
			<LineChart
				width={1200}
				height={500}
				data={marks}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="totalMart" stroke="#82ca9d" />
				<Line
					className="mt-5"
					type="monotone"
					dataKey="AssignMent"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</div>
	);
};

export default Rechart;
