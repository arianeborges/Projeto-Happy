import * as React from "react";

import logotipo from "../images/logotipo.svg";

import "../styles/components/sidebarlogin.css";

export default function SidebarLogin() {
	return (
		<div className="app-sidebarlogin">
			<img src={logotipo} alt="Happy" />
			<div className="location">
				<strong>Uberlândia</strong>
				<span>Minas Gerais</span>
			</div>
		</div>
	);
}
