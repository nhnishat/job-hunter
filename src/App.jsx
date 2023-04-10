import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';

const App = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
