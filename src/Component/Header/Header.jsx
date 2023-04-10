import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="bg-gray-100 my-container">
			<div className="relative flex items-center justify-between">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					<span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
						JOB INTRO
					</span>
				</Link>

				{/* Nav Items Section */}
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/rechart"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							Rechart
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/appliedJobs"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							Applied Jobs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? 'text-purple-500' : 'default'
							}
						>
							About Us
						</NavLink>
					</li>
				</ul>
				<button className="p-2 bg-purple-500 hidden lg:block rounded-md text-white font-semibold">
					Star Applying
				</button>

				{/* Mobile Navbar Section */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}
					>
						<Bars3BottomRightIcon className="w-5 text-gray-600" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-white border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/" className="inline-flex items-center">
											<span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
												JOB INTRO
											</span>
										</Link>
									</div>
									{/* Dropdown menu close button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsMenuOpen(false)}
										>
											<XMarkIcon className="w-5 text-gray-600" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="default font-semibold">
												Home
											</Link>
										</li>
										<li>
											<Link
												to="/rechart"
												className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 "
											>
												Rechart
											</Link>
										</li>
										<li>
											<Link
												to="/appliedJobs"
												className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 "
											>
												Applied Jobs
											</Link>
										</li>

										<li>
											<Link
												to="/about"
												className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
											>
												About Us
											</Link>
										</li>
									</ul>
									<button className="p-2 mt-2 bg-purple-500 rounded-md text-white font-semibold">
										Star Applying
									</button>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
