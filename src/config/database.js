import mysql from 'mysql2'; //middleware para conexao com o mysql

//abro a conexao com bd
const db = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'@#Gta147123',
    database:'bd_nice'
})

//Verificando se a conexao foi feita com BD
db.getConnection(function(err, conn){
    if (err){
        console.log(err) //Mostro o erro qdo a conexao com BD não teve sucesso
    }else{
        console.log('Conexão com o BD, realizada com sucesso !') //Mensagem de conexao com Sucesso
    }
})

export {db}; //export a constante, para que precisar usar o pool de conexao