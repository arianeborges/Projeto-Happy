import React from "react";
import SidebarLogin from "../components/SidebarLogin";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/password.css";

function Password() {
	return (
		<div id="forgot-password">
			<SidebarLogin />
			<main>
				<form className="form-password">
					<div id="return-row">
						<Link to="/" id="return-button">
							<FiArrowLeft size={24} color="#15C3D6" />
						</Link>
					</div>

					<div className="paragraphs">
						<h1>Esqueci a senha</h1>
						<p>
							Sua redefinição de senha será enviada para o e-mail cadastrado.
						</p>
					</div>

					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" />
					</div>

					<Link to="/redefinepassword" className="enter-login">
						Enviar
					</Link>
				</form>
			</main>
		</div>
	);
}

export default Password;
