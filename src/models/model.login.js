import {db} from '../config/database.js'; //import para const "db" funçoes do database.js

function Login(login, cb){ //select para buscar se o nomeusuario existe no bd
    let ssql = 'select u.* from usuario u ';
    ssql += 'where u.nomeusuario = ?';
    db.query(ssql, [login], (err, result) => {
        cb(err, result)
    })
}

export default {Login};