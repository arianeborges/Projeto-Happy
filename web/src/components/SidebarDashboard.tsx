import React from "react";
import { FiPower, FiMapPin, FiAlertCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/components/sidebar-dashboard.css";

export default function SidebarDashboard() {
	const { goBack } = useHistory();

	return (
		<div className="sidebar-dashboard">
			<img src={mapMarkerImg} alt="Happy" />

			<div>
				<button type="button" className="sidebar-button" id="map-button">
					<FiMapPin size={24} color="#0089A5" />
				</button>
				<button type="button" className="sidebar-button" id="alert-button">
					<FiAlertCircle size={24} color="#FFFFFF" />
				</button>
			</div>
			<footer>
				<button
					className="sidebar-button"
					id="power-button"
					type="button"
					onClick={goBack}
				>
					<FiPower size={24} color="#FFF" />
				</button>
			</footer>
		</div>
	);
}
