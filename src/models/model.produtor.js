import { db } from "../config/database.js"; //import para const "db" funçoes do database.js

function Inserir(dadosProdutor, cb){
    db.getConnection((err, conn) => { //abro um pool de conexao com bd
        /*//Verificando se o cpf do produtor já existe
        conn.query('select p.* from produtor p where p.cpfprodutor = ?', [dadosProdutor.cpf], (err, result) => {
            if (err) {
                cb(err, result)
            } else if (result.length > 0) { //caso o cpf já exista cadastrado no bd
                
            }
                
        })*/
        conn.beginTransaction((err) => { //inicio uma transação
            let ssql = 'insert into produtor (csusuario, nomeprodutor, cpfprodutor, ativoprodutor) ';
            ssql += 'values (?, ?, ?, "S")';
            conn.query(ssql,[dadosProdutor.idusuario, dadosProdutor.nome, dadosProdutor.cpf], (err, result) => {
                if (err){ //deu erro no insert
                    conn.rollback() //desfaço a transação
                    cb(err, result) //retorno o erro
                } else{
                    conn.commit() //gravo a transação
                    cb(undefined,{idprodutor:result.insertId}) //retorno o id que foi gravado
                }
                conn.release() //libero o pool criado
            })
        })
    })
}

function Alterar(dadosProdutor, cb){
    db.getConnection((err, conn) => {
        //faço uma busca para verificar se existe o produtor com o id, caso exista, faço o update
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

function Excluir(id_produtor, cb){
    db.getConnection((err, conn) => {
        conn.query('select p.idprodutor from produtor p where p.idprodutor = ?', [id_produtor], (err, result) => {
            if (err){
                cb(err, result)
            } else if (result.length > 0) {
                conn.beginTransaction((err) => {
                    let ssql = 'update produtor ';
                    ssql += 'set ativoprodutor = "N" ';
                    ssql += 'where idprodutor = ?';
                    conn.query(ssql,[id_produtor], (err, result) => {
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

export default {Inserir, Alterar, Excluir, ListarId, ListarPorNome};