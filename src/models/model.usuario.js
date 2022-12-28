import {db} from '../config/database.js'; //import para const "db" funçoes do database.js
import bcrypt from 'bcrypt';

function Inserir(dadosUsuario, cb){
    db.getConnection((err, conn) => { //abro um pool de conexao com bd
        conn.beginTransaction(async (err) => { //inicio uma transação
            let ssql = 'insert into usuario (nomeusuario, senhausuario, ativousuario) ';
            ssql += 'values (?, ?, "S")';

            const SenhaCrip = await bcrypt.hash(dadosUsuario.senha, 10);

            conn.query(ssql, [dadosUsuario.nome, SenhaCrip], (err, result) => {
                if (err){ //deu erro no insert
                    conn.rollback() //desfaço a transação
                    cb(err, result) //retorno o erro
                }else{
                    conn.commit() //gravo a transação
                    cb(undefined,{idusuario:result.insertId}) //retorno o id que foi gravado
                }
            })
            conn.release(); //libero o pool criado
        })
    })
}

function Alterar(dadosUsuario, cb){
    db.getConnection((err, conn) => {
        //faço uma busca para verificar se existe o usuario com o id, caso exista, faço o update
        conn.query('select u.idusuario from usuario u where u.idusuario = ?', [dadosUsuario.idusuario], (err, result) => {
            if (err) {
                cb(err, result)
            } else if (result.length > 0) {
                conn.beginTransaction(async (err) => {
                    let ssql = 'update usuario ';
                    ssql += 'set nomeusuario = ?, senhausuario = ? '
                    ssql += 'where idusuario = ?';

                    const SenhaCrip2 = await bcrypt.hash(dadosUsuario.senha, 10);

                    conn.query(ssql,[dadosUsuario.nome, SenhaCrip2, dadosUsuario.idusuario], (err, result) =>{
                        if (err){
                            conn.rollback()
                            cb(err,result)
                        }else{
                            conn.commit()
                            cb(undefined,result)
                        }
                        conn.release()
                    })           
                })
            } else {
                cb(err, result)
            }
        })
    })
}

function Exlcuir(id_usuario, cb){
    db.getConnection((err, conn) => {
        conn.query('select u.idusuario from usuario u where u.idusuario = ?', [id_usuario], (err, result) => {
            if (err) {
                cb(err, result)
            } else if (result.length > 0) {
                conn.beginTransaction(async (err) => {
                    let ssql = 'update usuario ';
                    ssql += 'set ativousuario = "N" '
                    ssql += 'where idusuario = ?';

                    conn.query(ssql,[id_usuario], (err, result) =>{
                        if (err){
                            conn.rollback()
                            cb(err,result)
                        }else{
                            conn.commit()
                            cb(undefined,result)
                        }
                        conn.release()
                    })           
                })
            } else {
                cb(err, result)
            }
        })
    })
}


export default {Inserir, Alterar, Exlcuir};