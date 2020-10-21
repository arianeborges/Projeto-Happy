import React, { useEffect, useState } from "react";
import SidebarLogin from "../components/SidebarLogin";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/login.css";
import api from "../services/api";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		api.get("login").then((response) => {
			console.log(response);
		});
	}, []);

	function handleSubmit(event: any) {
		event.preventDefault();
		console.log(event);
	}

	return (
		<div id="create-login">
			<SidebarLogin />

			<main>
				<form onSubmit={handleSubmit} className="form-login">
					<div id="return-row">
						<Link to="/" id="return-button">
							<FiArrowLeft size={24} color="#15C3D6" />
						</Link>
					</div>
					<h1 id="textoH3">Fazer login</h1>
					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>

					<div className="input-block">
						<label htmlFor="passwordLogin">Senha</label>
						<input
							// type="password"
							id="passwordLogin"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>

					<div className="input-block-remember">
						<div className="input-block-remember-div">
							<input type="checkbox" className="remember-password" />
							<label htmlFor="rememberPassword">Lembrar-me</label>
						</div>
						<Link to="/password" id="forgot-password">
							Esqueci minha senha
						</Link>
					</div>

					<button className="enter-login" type="submit">
						Entrar
					</button>
				</form>
			</main>
		</div>
	);
}

export default Login;
