import React from 'react';

const Footer = () => {
	return (
		<div className='"w-full bg-black mt-20'>
			<section className="">
				<div className=" my-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-20 mt-20">
					<div className="w-3/3">
						<h2 className="footer-h">CareerHub</h2>
						<p className="footer-p ">
							There are many variations of passages of Lorem Ipsum , but the
							majority have suffered alteration in some form.
						</p>
						<img src="" alt="" />
					</div>
					<div className="w-3/3">
						<h3 className="footer-h">Company</h3>
						<p className="footer-p">About Us</p>
						<p className="footer-p">Work</p>
						<p className="footer-p">Latest News</p>
						<p className="footer-p">Careers</p>
					</div>
					<div className="w-3/3">
						<h4 className="footer-h">Product </h4>
						<p className="footer-p">Prototype</p>
						<p className="footer-p">Plans & Pricing </p>
						<p className="footer-p">Customers</p>
						<p className="footer-p">Integrations</p>
					</div>
					<div className="w-3/3">
						<h5 className="footer-h">Support</h5>
						<p className="footer-p">Help Desk</p>
						<p className="footer-p">Sales</p>
						<p className="footer-p">Become a Partner</p>
						<p className="footer-p">Developers</p>
					</div>
					<div className="w-3/3">
						<h5 className="footer-h">Contact</h5>
						<p className="footer-p">524 Broadway , NYC</p>
						<p className="footer-p">+1 777 - 978 - 5570</p>
					</div>
				</div>
				<hr className="my-container" />
				<div className="flex justify-between my-container">
					<p className="footer-p">@2023 CareerHub. All Rights Reserved</p>
					<p className="footer-p">Powered by CareerHub</p>
				</div>
			</section>
		</div>
	);
};

export default Footer;
