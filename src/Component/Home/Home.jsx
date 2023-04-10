import React from 'react';
import accounts from '../../assets/Icon/accounts 1.png';
import business from '../../assets/Icon/business 1.png';
import chip from '../../assets/Icon/chip 1.png';
import social from '../../assets/Icon/social-media 1.png';
import logo from '../../assets/logo/P3OLGJ1 copy 1.png';
const Home = () => {
	return (
		<div>
			<section className="my-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex text-start items-center">
						<div>
							<h2 className="text-7xl font-bold leading-tight">
								One Step <br /> Closer To Your <br />{' '}
								<span className="text-purple-600 font-bold leading-8	">
									Dream Job
								</span>
							</h2>
							<p className="my-4 font-normal">
								Explore thousands of job opportunities with all the <br />{' '}
								information you need. Its your future. Come find it. Manage all{' '}
								<br /> your job application from start to finish.
							</p>
							<button className="p-2 bg-purple-500 rounded-md text-white font-semibold">
								Get Started
							</button>
						</div>
					</div>
					<div>
						<img src={logo} alt="" />
					</div>
				</div>
			</section>
			{/* Job Category List */}
			<section className="mb-20">
				<div className="text-center my-20 ">
					<h2 className="font-bold text-4xl">Job Category List</h2>
					<p className="font-normal text-sm my-3">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
					<div className="category-list">
						<img src={accounts} alt="" />
						<div className="my-3">
							<h3 className="font-semibold mb-2 text-xl">Account & Finance</h3>
							<p>300 Jobs Available</p>
						</div>
					</div>
					<div className="category-list">
						<img src={business} alt="" />
						<div className="my-3">
							<h3 className="font-semibold mb-2 text-xl">Creative Design</h3>
							<p>100+ Jobs Available</p>
						</div>
					</div>
					<div className="category-list">
						<img src={social} alt="" />
						<div className="my-3">
							<h3 className="font-semibold mb-2 text-xl">Marketing & Sales</h3>
							<p>150 Jobs Available</p>
						</div>
					</div>
					<div className="category-list">
						<img src={chip} alt="" />
						<div className="my-3">
							<h3 className="font-semibold mb-2 text-xl">Engineering Job</h3>
							<p>224 Jobs Available</p>
						</div>
					</div>
				</div>
			</section>
			{/* <FeaturedJobs /> */}
		</div>
	);
};

export default Home;
