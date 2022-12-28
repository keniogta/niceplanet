import modelPropriedade from "../models/model.propriedade.js";

function Inserir(req, res){
    modelPropriedade.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(401).json({erro:'Propriedade não inserida.'})
        } else{
            res.status(201).json(result)
        }
    })
}

function Alterar(req, res){
    modelPropriedade.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(401).json({erro:'Propriedade não encontrado.'})
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
            res.status(401).json({erro:'Propriedade não encontrado.'})
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
            res.status(401).send('Nenhuma Propriedade econtrada.')
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
            res.status(401).send('Nenhuma Propriedade econtrada.')
        } else{
            res.status(200).json(result)
        }
    })
}

export default {Inserir, Alterar, Excluir, ListarId, ListarPorNome};