import modelProdutor from "../models/model.produtor.js";

function Inserir(req, res){
    modelProdutor.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(401).json({erro:'Produtor não inserido.'})
        } else{
            res.status(201).json(result)
        }
    })
}

function Alterar(req, res){
    modelProdutor.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0){
            res.status(401).json({erro:'Produtor não encontrado.'})
        } else{           
            res.status(200).send('Produtor alterado com sucesso.') 
        }
    })
}

function ListarId(req, res){
    modelProdutor.ListarId(req.params.id_produtor, (err, result) => {
        if (err){
            res.status(500).send(err)
        } else if (result.length == 0) {
            res.status(401).send('Nenhum Produtor econtrado.')
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
            res.status(401).send('Nenhum Produtor econtrado.')
        } else{
            res.status(200).json(result)
        }
    })
}

export default {Inserir, Alterar, ListarId, ListarPorNome};