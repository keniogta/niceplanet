import { Router } from "express";
import controllerProdutor from "../controllers/controller.produtor.js";

const routeProdutor = Router();

routeProdutor.post('/v1/produtores/cadastro',controllerProdutor.Inserir);
routeProdutor.put('/v1/produtores/alterar',controllerProdutor.Alterar);
routeProdutor.get('/v1/produtores/listar/:id_produtor',controllerProdutor.ListarId);
routeProdutor.get('/v1/produtores/nome',controllerProdutor.ListarPorNome);

export default routeProdutor;