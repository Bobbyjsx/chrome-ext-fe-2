import React from "react";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const Nav = () => {
	return (
		<div className="flex w-full justify-between items-center">
			<Logo />
			<Dropdown />
		</div>
	);
};

export default Nav;
