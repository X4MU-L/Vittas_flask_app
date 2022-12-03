import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";

const Home = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<div>Home</div>} />
				<Route path="create" element={<div>hello</div>} />
				<Route path="search" element={<div>search</div>} />
				<Route path="top-students" element={<div>top rated</div>} />
			</Route>
		</Routes>
	);
};
export default Home;
