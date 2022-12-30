import { Router } from "express"; //middleware de distribuição da rota
import controllerProdutor from "../controllers/controller.produtor.js"; //importando o controler do produtor

const routeProdutor = Router();

//Rotas
routeProdutor.post('/v1/produtores/cadastro',controllerProdutor.Inserir);
routeProdutor.put('/v1/produtores/alterar',controllerProdutor.Alterar);
routeProdutor.post('/v1/produtores/excluir/:id_produtor',controllerProdutor.Excluir);
routeProdutor.get('/v1/produtores/listar/:id_produtor',controllerProdutor.ListarId);
routeProdutor.get('/v1/produtores/nome',controllerProdutor.ListarPorNome);

export default routeProdutor;