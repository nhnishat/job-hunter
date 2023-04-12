import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import LsJob from '../LsJob/LsJob';

const AppliedJobs = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('job-categories.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const loadProduct = getShoppingCart();
		console.log(loadProduct);
		const saveCart = [];

		for (const id in loadProduct) {
			const addedProducts = products.find((product) => product.id == id);

			const quantity = loadProduct[id];
			if (addedProducts) {
				addedProducts.quantity = quantity;
				saveCart.push(addedProducts);
			}
		}

		setCart(saveCart);
	}, [products]);

	return (
		<div className="my-container">
			<h2 className="font-bold text-3xl text-center my-20">Applied Jobs</h2>
			<div className="flex gap-8 items-center justify-end">
				<button className="my-20 p-2 bg-slate-900 rounded-md font-semibold text-white">
					Remote
				</button>
				<button className="my-20 p-2 bg-zinc-950 rounded-md font-semibold text-white">
					Full Time
				</button>
			</div>
			<div>
				{cart.map((lsJob) => (
					<LsJob lsJob={lsJob} key={lsJob.id} />
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;
