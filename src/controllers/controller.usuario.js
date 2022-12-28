import modelUsuario from "../models/model.usuario.js"; //importando o model usuario

function Inserir(req, res){
    modelUsuario.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        }else if (result.length == 0){
            res.status(401).json({erro:'Tabela usuário não encontrada.'})
        }else{
            res.status(201).json(result)
        }
    })

}

function Alterar(req, res){
    modelUsuario.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        }else if (result.length == 0){
            res.status(401).json({erro:'Usuário não encontrado.'})
        }else{
            res.status(200).send('Usuário alterado com sucesso.')
        }
    })
}

function Excluir(req, res){
    modelUsuario.Exlcuir(req.params.id_usuario, (err, result) => {
        if (err){
            res.status(500).send(err)
        }else if (result.length == 0){
            res.status(401).json({erro:'Usuário não encontrado.'})
        }else{
            res.status(200).send('Usuário excluído com sucesso.')
        }
    })
}

export default {Inserir, Alterar, Excluir};
