import modelProdutor from "../models/model.produtor.js";  //importando o model produtor

/*Status Code Usados
500 - Erro Interno
401 - Não autorizado
404 - Não encontrado
201 - Inserido com Sucesso
200 - Alterado/Pesquisa com Sucesso
*/

function Inserir(req, res){
    modelProdutor.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err) //qdo der erro interno no model, é passado a msg do erro
        } else if (result.length == 0){ //caso retorne vazio, houve erro no insert
            res.status(401).json({erro:'Produtor não inserido.'})
        } else{ //caso volte um valor (id), insert com suceso
            res.status(201).json(result)
        }
    })
}

function Alterar(req, res){
    modelProdutor.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(404).json({erro:'Produtor não encontrado.'})
        } else{           
            res.status(200).send('Produtor alterado com sucesso.') 
        }
    })
}

function Excluir(req, res){
    modelProdutor.Excluir(req.params.id_produtor, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(404).json({erro:'Produtor não encontrado.'})
        } else{           
            res.status(200).send('Produtor excluído com sucesso.') 
        }
    })
}

function ListarId(req, res){
    modelProdutor.ListarId(req.params.id_produtor, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0) {
            res.status(404).send('Nenhum Produtor econtrado.')
        } else{
            res.status(200).json(result[0])
        }
    })
}

function ListarPorNome(req, res){
    modelProdutor.ListarPorNome(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0) {
            res.status(404).send('Nenhum Produtor econtrado.')
        } else{
            res.status(200).json(result)
        }
    })
}

export default {Inserir, Alterar, Excluir, ListarId, ListarPorNome};