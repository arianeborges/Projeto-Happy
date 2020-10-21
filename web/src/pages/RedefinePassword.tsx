import React from "react";
import SidebarLogin from "../components/SidebarLogin";

import "../styles/pages/redefine-password.css";

function RedefinePassword() {
	return (
		<div id="redefine-password">
			<SidebarLogin />
			<main>
				<form className="form-password">
					<div className="paragraphs">
						<h2>Redefinição de senha</h2>
						<p>
							Escolha uma nova senha para você acessar o dashboard do Happy.
						</p>
					</div>

					<div className="input-block">
						<label htmlFor="newpassword">Nova senha</label>
						<input type="newpassword" id="newpassword" />
					</div>

					<div className="input-block">
						<label htmlFor="repetepassword">Repetir senha</label>
						<input type="repetepassword" id="repetepassword" />
					</div>

					<button className="enter-new-password" type="submit">
						Redefinir senha
					</button>
				</form>
			</main>
		</div>
	);
}

export default RedefinePassword;
