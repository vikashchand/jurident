import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ text, link }) => {
	return (
		<NavLink
			to={link}
			className="ml-2 py-2 text-xl text-neutral-800 dark:text-neutral-200"
		>
			{text}
		</NavLink>
	);
};

export default NavbarItem;
