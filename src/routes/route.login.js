import { Router } from "express"; //middleware de distribuição da rota
import controllerLogin from "../controllers/controller.login.js"; //importando o controler do login

const routeLogin = Router();

routeLogin.get('/v1/login',controllerLogin.Login);

export default routeLogin;
