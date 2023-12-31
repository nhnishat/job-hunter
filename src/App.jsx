import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

const App = () => {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
