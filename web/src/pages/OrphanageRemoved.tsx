import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/remove-orphanage.css";

function OrphanageRemoved() {
	return (
		<div className="page-orphanage-remove">
			<div className="content-wrapper-orphanage-remove">
				<div className="header-orphanage-remove">
					<h1 id="remove-header">Excluir!</h1>
					<p id="remove-text">
						Você tem certeza que quer excluir Orf. Esperança?
					</p>
					<Link to="/app" id="remove-button">
						Voltar para o mapa
					</Link>
				</div>
			</div>
		</div>
	);
}

export default OrphanageRemoved;
