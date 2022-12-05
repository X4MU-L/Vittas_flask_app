import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Students } from "../components/dashboard";
import { StudentForm } from "../components/createstudent";

const Home = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Students />} />
				<Route path="create" element={<StudentForm />} />
				<Route path="search" element={<div>search</div>} />
			</Route>
		</Routes>
	);
};
export default Home;
