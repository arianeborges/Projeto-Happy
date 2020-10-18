import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/orphanage-created.css";

function OrphanageCreated() {
	return (
		<div id="page-confirmed" className="orphanage-created">
			<div className="content-wrapper">
				<main>
					<h1>Ebaaa!</h1>
					<p>
						O cadastro deu certo e foi enviado ao administrados para ser
						aprovado. Agora é só esperar :<span>&#41;</span>
					</p>
				</main>
				<Link to="/app" className="return-button">
					Voltar para o mapa
				</Link>
			</div>
		</div>
	);
}

export default OrphanageCreated;
