import * as React from "react";
import SidebarLogin from "../components/SidebarLogin";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import "../styles/pages/login.css";

function Login() {
	const { goBack } = useHistory();
	return (
		<div id="create-login">
			<SidebarLogin />

			<main>
				<form className="form-login">
					<div id="return-row">
						<button id="return-button" type="button" onClick={goBack}>
							<FiArrowLeft size={24} color="#15C3D6" />
						</button>
					</div>
					<h1 id="textoH3">Fazer login</h1>
					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input id="email" />
					</div>

					<div className="input-block">
						<label htmlFor="passwordLogin">Senha</label>
						<input id="passwordLogin" />
					</div>

					<div className="input-block-remember">
						<div className="input-block-remember-div">
							<input type="checkbox" className="remember-password" />
							<label htmlFor="rememberPassword">Lembrar me</label>
						</div>
						<Link to="/" id="forgot-password">
							Esqueci minha senha
						</Link>
					</div>

					<Link to="/" className="enter-login">
						Entrar
					</Link>
				</form>
			</main>
		</div>
	);
}

export default Login;
