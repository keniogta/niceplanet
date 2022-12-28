import modelPropriedade from "../models/model.propriedade.js"; //importando o model propriedade

/*Status Code Usados
500 - Erro Interno
401 - Não autorizado
404 - Não encontrado
201 - Inserido com Sucesso
200 - Alterado/Pesquisa com Sucesso
*/

function Inserir(req, res){
    modelPropriedade.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err) //qdo der erro interno no model, é passado a msg do erro
        } else if (result.length == 0){ //caso retorne vazio, houve erro no insert
            res.status(401).json({erro:'Propriedade não inserida.'})
        } else{ //caso volte um valor (id), insert com suceso
            res.status(201).json(result)
        }
    })
}

function Alterar(req, res){
    modelPropriedade.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(404).json({erro:'Propriedade não encontrado.'})
        } else{            
            res.status(200).send('Propriedade alterada com sucesso.')
        }
    })
}

function Excluir(req, res){
    modelPropriedade.Excluir(req.params.id_propriedade , (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(404).json({erro:'Propriedade não encontrado.'})
        } else{            
            res.status(200).send('Propriedade excluída com sucesso.')
        }
    })
}

function ListarId(req, res){
    modelPropriedade.ListarId(req.params.id_propriedade, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0) {
            res.status(404).send('Nenhuma Propriedade econtrada.')
        } else{
            res.status(200).json(result[0])
        }
    })
}

function ListarPorNome(req, res){
    modelPropriedade.ListarPorNome(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0) {
            res.status(404).send('Nenhuma Propriedade econtrada.')
        } else{
            res.status(200).json(result)
        }
    })
}

export default {Inserir, Alterar, Excluir, ListarId, ListarPorNome};