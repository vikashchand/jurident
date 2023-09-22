import NavBar from "../../components/NewsSection/NewsNavbar";
import { Outlet } from "react-router-dom";
import React from "react";

const NewsScreen = () => {
	return (
		<main className="mb-24">
			<h1 className="my-2.5 text-center text-4xl font-bold text-slate-800">
				News Edition
			</h1>
			<NavBar />
			<Outlet />
		</main>
	);
};

export default NewsScreen;
