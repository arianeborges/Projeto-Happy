import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Login from "../models/Login";
import LoginView from "../views/Login_view";

export default {
	async index(request: Request, response: Response) {
    const loginRepository = getRepository(Login);
    console.log(loginRepository);

		return response.json(LoginView);
	}
};
