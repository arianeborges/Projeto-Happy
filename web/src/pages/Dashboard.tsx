import React, { useEffect, useState } from "react";
import SidebarDashboard from "../components/SidebarDashboard";

import { Map, Marker, TileLayer } from "react-leaflet";

import mapIcon from "../utils/mapIcon";

import "../styles/pages/dashboard.css";
import { FiEdit3, FiTrash } from "react-icons/fi";
import api from "../services/api";
import { Link } from "react-router-dom";

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

// interface OrphanageParams {
// 	id: string;
// }

export default function Dashboard() {
	//const params = useParams<OrphanageParams>();
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(() => {
		api
			.get("orphanages")
			.then((response) => {
				setOrphanages(response.data);
			})
			.catch((error) => {
				alert(error);
			});
	});

	return (
		<div className="dashboard">
			<SidebarDashboard />

			<div id="container">
				<div id="p-header">
					<h2>Orfanatos Cadastrados</h2>
					<p>{orphanages.length} orfanatos</p>
				</div>
				<hr style={{ width: "90%" }}></hr>
				<div id="map-container">
					{orphanages.map((orphanage) => {
						return (
							<div className="item">
								<Map
									center={[orphanage.latitude, orphanage.longitude]}
									zoom={12}
									style={{ width: "100%", height: 150 }}
									dragging={false}
									touchZoom={false}
									zoomControl={false}
									scrollWheelZoom={false}
									doubleClickZoom={false}
								>
									<TileLayer
										url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
									/>
									<Marker
										interactive={false}
										icon={mapIcon}
										position={[orphanage.latitude, orphanage.longitude]}
									/>
								</Map>

								<footer className="orphanage-card-footer">
									<p>{orphanage.name}</p>
									<div>
										<Link to="" type="button" className="card-button">
											<FiEdit3 size={20} color="#15c3d6" />
										</Link>
										<Link
											// to={`${orphanage.id}`}
											to="/removeorphanage"
											type="button"
											className="card-button"
										>
											<FiTrash size={20} color="#15c3d6" />
										</Link>
									</div>
								</footer>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
