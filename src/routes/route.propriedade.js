import { Router } from "express";
import controllerPropriedade from "../controllers/controller.propriedade.js";

const routePropriedade = Router();

routePropriedade.post('/v1/propriedades/cadastro',controllerPropriedade.Inserir);
routePropriedade.put('/v1/propriedades/alterar',controllerPropriedade.Alterar);
routePropriedade.post('/v1/propriedades/excluir/:id_propriedade',controllerPropriedade.Excluir);
routePropriedade.get('/v1/propriedades/listar/:id_propriedade',controllerPropriedade.ListarId);
routePropriedade.get('/v1/propriedades/nome',controllerPropriedade.ListarPorNome);

export default routePropriedade;