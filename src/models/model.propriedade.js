import { db } from "../config/database.js";

function Inserir(dadosPropriedade, cb){
    db.getConnection((err, conn) => {
        conn.beginTransaction((err) => {
            let ssql = 'insert into propriedade (csprodutor, csusuario, nomepropriedade, cadastrorural, ativopropriedade) ';
            ssql += 'values (?, ?, ?, ?, "S")';
            conn.query(ssql,[dadosPropriedade.idprodutor, dadosPropriedade.idusuario, dadosPropriedade.nome, dadosPropriedade.cadastrorural], (err, result) => {
                if (err){
                    conn.rollback()
                    cb(err, result)
                } else{
                    conn.commit()
                    cb(undefined,{idpropriedade:result.insertId})
                }
                conn.release()
            })
        })
    })
}

function Alterar(dadosPropriedade, cb){
    db.getConnection((err, conn) => {
        conn.query('select p.idpropriedade from propriedade p where p.idpropriedade = ?', [dadosPropriedade.idpropriedade], (err, result) => {
            if (err){
                cb(err, result)
            } else if (result.length > 0){
                conn.beginTransaction((err) => {
                    let ssql = 'update propriedade ';
                    ssql += 'set csprodutor = ?, csusuario = ?, nomepropriedade = ?, cadastrorural = ? ';
                    ssql += 'where idpropriedade = ?';
                    conn.query(ssql,[dadosPropriedade.idprodutor, dadosPropriedade.idusuario, dadosPropriedade.nome, dadosPropriedade.cadastrorural, dadosPropriedade.idpropriedade], (err, result) => {
                        if (err){
                            conn.rollback()                    
                        } else{
                            conn.commit()                    
                        }
        
                        cb(err, result)
                        conn.release()
                    })
                })
            } else {
                cb(err,result)
            }
        })
    })
}

function ListarId(id_propriedade, cb){
    let ssql = 'select * from propriedade where idpropriedade = ?';
    db.query(ssql, [id_propriedade], (err, result) => {
        cb(err, result)
    })
}

function ListarPorNome(dadosPropriedade, cb){
    let ssql = 'select * from propriedade where nomepropriedade like ? order by nomepropriedade';
    db.query(ssql, [dadosPropriedade.nome], (err, result) => {
        cb(err, result)
    })
}

export default {Inserir, Alterar, ListarId, ListarPorNome};