import Login from "../models/Login";

export default {
	render(login: Login) {
		return {
			id: login.id,
			email: login.email,
			password: login.password,
		};
	},
};
