import { Router } from "express";
import controllerLogin from "../controllers/controller.login.js";

const routeLogin = Router();

routeLogin.get('/v1/login',controllerLogin.Login);

export default routeLogin;
