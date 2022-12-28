import { db } from "../config/database.js";

function Inserir(dadosProdutor, cb){
    db.getConnection((err, conn) => {
        conn.beginTransaction((err) => {
            let ssql = 'insert into produtor (csusuario, nomeprodutor, cpfprodutor, ativoprodutor) ';
            ssql += 'values (?, ?, ?, "S")';
            conn.query(ssql,[dadosProdutor.idusuario, dadosProdutor.nome, dadosProdutor.cpf], (err, result) => {
                if (err){
                    conn.rollback()
                    cb(err, result)
                } else{
                    conn.commit()
                    cb(undefined,{idprodutor:result.insertId})
                }
                conn.release()
            })
        })
    })
}

function Alterar(dadosProdutor, cb){
    db.getConnection((err, conn) => {
        conn.query('select p.idprodutor from produtor p where p.idprodutor = ?', [dadosProdutor.idprodutor], (err, result) => {
            if (err){
                cb(err, result)
            } else if (result.length > 0) {
                conn.beginTransaction((err) => {
                    let ssql = 'update produtor ';
                    ssql += 'set csusuario = ?, nomeprodutor = ?, cpfprodutor = ? ';
                    ssql += 'where idprodutor = ?';
                    conn.query(ssql,[dadosProdutor.idusuario, dadosProdutor.nome, dadosProdutor.cpf, 
                                    dadosProdutor.idprodutor], (err, result) => {
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
                cb(err, result)
            }
        } )
    })
}

function ListarId(id_produtor, cb){
    let ssql = 'select * from produtor where idprodutor = ?';
    db.query(ssql, [id_produtor], (err, result) => {
        cb(err, result)
    })
}

function ListarPorNome(dadosProdutor, cb){
    let ssql = 'select * from produtor where nomeprodutor like ? order by nomeprodutor';
    db.query(ssql, [dadosProdutor.nome], (err, result) => {
        cb(err, result)
    })
}

export default {Inserir, Alterar, ListarId, ListarPorNome};