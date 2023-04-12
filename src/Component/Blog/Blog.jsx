import React from 'react';

const Blog = () => {
	return (
		<div className="my-container">
			<h1 className="font-bold text-5xl text-center my-20 underline">Blog</h1>
			<div className="my-8">
				<h2 className="font-bold text-2xl text-gray-800 my-5">
					When should you use context api?
				</h2>
				<p className="font-normal text-gray-700 mb-2">
					You should use the Context API in React when you have data or state
					that needs to be shared between multiple components that are not
					directly related to each other, or when you have a large number of
					components that need to access the same data or state. It can make
					your code more organized, easier to maintain, and less error-prone.
				</p>
			</div>
			<div className="my-8">
				<h2 className="font-bold text-2xl text-gray-800 my-5">
					What is custom hook?
				</h2>
				<p className="font-normal text-gray-700 mb-2">
					A custom hook in React is a JavaScript function that allows you to
					extract some logic and reuse it across multiple components. It lets
					you encapsulate some behavior and stateful logic that can be shared
					between multiple components without duplicating the code. Custom hooks
					follow the same rules as React hooks, which means they can use other
					hooks, and they must start with the word "use." Custom hooks are
					useful when you have some code that you want to reuse across multiple
					components, but you don't want to create a higher-order component or
					render props pattern. They can help make your code more organized and
					easier to read, and they can also improve performance by reducing
					duplicated logic. Custom hooks can be shared across projects or even
					published as standalone packages for others to use.
				</p>
			</div>
			<div className="my-8">
				<h2 className="font-bold text-2xl text-gray-800 my-5">
					How does useRef work?
				</h2>
				<p className="font-normal text-gray-700 mb-2">
					The useRef hook in React creates a reference that persists across
					re-renders. It returns an object with a current property that can be
					used to read or modify the current value of the reference. It's
					commonly used to access DOM nodes or store mutable values without
					triggering a re-render.
				</p>
			</div>

			<div className="my-8">
				<h2 className="font-bold text-2xl text-gray-800 my-5">
					How does UseMemo Work?
				</h2>
				<p className="font-normal text-gray-700 mb-2">
					The useMemo hook in React memoizes the result of a function and
					recomputes it only when one of the dependencies changes. It takes a
					function and a list of dependencies as arguments, and returns the
					memoized value. It's commonly used to optimize expensive computations
					in a component.
				</p>
			</div>
		</div>
	);
};

export default Blog;
