import auth from 'basic-auth'; //middleware para Autenticação Basica

function BasicAuth(req, res, next){
    const user = auth(req);
    const username = 'user_nice';   //usuario pre definido
    const password = '@pass_nice';  //senha pre definido

    //função que verifica que o usuario e a senha passada são a mesma pre definida
    if (user && user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && user.pass === password){
        next();
    }else{
        res.status(401).send('Acesso Negado.')
    }  
}

export default BasicAuth;