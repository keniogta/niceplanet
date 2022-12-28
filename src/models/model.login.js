import {db} from '../config/database.js';

function Login(login, cb){
    let ssql = 'select u.* from usuario u ';
    ssql += 'where u.nomeusuario = ?';
    db.query(ssql, [login], (err, result) => {
        cb(err, result)
    })
}

export default {Login};