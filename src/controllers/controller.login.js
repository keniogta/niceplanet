import modelLogin from "../models/model.login.js";  //Importe do model.login.js
import bcrypt from 'bcrypt';                        //middleware para criptografar e descriptografar a senha

function Login(req, res){
    modelLogin.Login(req.body.login, async (err, result) => {
        if (err){
            res.status(500).send(err)
        }else if (result.length == 0){
            res.status(401).json({erro:'Usuário/Senha inválido.'})           
        }else{
            if (result[0].ativousuario === 'S') {
                if (await bcrypt.compare(req.body.senha, result[0].senhausuario)) { //comparando a senha do BD com a recebida
                    let resultado = result[0]         
                    delete resultado.senhausuario  //apagando o par senhausuario, do resultado, para que a senha não seja mostrada no json                    
                    res.status(200).json(resultado)
                } else {
                    res.status(401).json({erro:'Senha Invalida.'}) 
                }                
            } else{
                res.status(401).json({erro:'Usuário Inativo.'})
            }           
        }
    })
}

export default {Login};