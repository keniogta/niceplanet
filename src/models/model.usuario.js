import {db} from '../config/database.js';
import bcrypt from 'bcrypt';

function Inserir(dadosUsuario, cb){
    db.getConnection((err, conn) => {
        conn.beginTransaction(async (err) => {
            let ssql = 'insert into usuario (nomeusuario, senhausuario, ativousuario) ';
            ssql += 'values (?, ?, "S")';

            const SenhaCrip = await bcrypt.hash(dadosUsuario.senha, 10);

            conn.query(ssql, [dadosUsuario.nome, SenhaCrip], (err, result) => {
                if (err){
                    conn.rollback()
                    cb(err, result)
                }else{
                    conn.commit()
                    cb(undefined,{idusuario:result.insertId})
                }
            })
            conn.release(); //liberando conexao
        })
    })
}

function Alterar(dadosUsuario, cb){
    db.getConnection((err, conn) => {
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


export default {Inserir, Alterar};