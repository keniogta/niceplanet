import modelUsuario from "../models/model.usuario.js"; //importando o model usuario

/*Status Code Usados
500 - Erro Interno
401 - Não autorizado
404 - Não encontrado
201 - Inserido com Sucesso
200 - Alterado/Pesquisa com Sucesso
*/

function Inserir(req, res){
    modelUsuario.Inserir(req.body, (err, result) => {
        if (err){
            res.status(500).send(err) //qdo der erro interno no model, é passado a msg do erro
        }else if (result.length == 0){ //caso retorne vazio, houve erro no insert
            res.status(401).json({erro:'Tabela usuário não encontrada.'})
        }else{ //caso volte um valor (id), insert com suceso
            res.status(201).json(result)
        }
    })

}

function Alterar(req, res){
    modelUsuario.Alterar(req.body, (err, result) => {
        if (err){
            res.status(500).send(err)
        }else if (result.length == 0){
            res.status(404).json({erro:'Usuário não encontrado.'})
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
            res.status(404).json({erro:'Usuário não encontrado.'})
        }else{
            res.status(200).send('Usuário excluído com sucesso.')
        }
    })
}

export default {Inserir, Alterar, Excluir};
