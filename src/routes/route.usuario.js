import { Router } from "express"; //middleware de distribuição da rota
import controllerUsuario from "../controllers/controller.usuario.js"; //importando o controler do usuario

const routeUsuario = Router();

//Rotas
routeUsuario.post('/v1/usuarios/cadastro',controllerUsuario.Inserir);
routeUsuario.put('/v1/usuarios/alterar',controllerUsuario.Alterar);
routeUsuario.post('/v1/usuarios/excluir/:id_usuario',controllerUsuario.Excluir);

export default routeUsuario;