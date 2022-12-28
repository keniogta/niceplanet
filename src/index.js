import express from 'express';                                  //para levantar o servidor
import cors from 'cors';                                        //para distribuicao da API para outras aplicações (consumir)
import {db} from './config/database.js';                        //importei db do arquivo database.js dentro da pasta config
import BasicAuth from './config/basic-auth.js';                 //importado do arquivo basic-auth.js
import routeLogin from './routes/route.login.js';               //importando rotas do login  
import routeUsuario from './routes/route.usuario.js';           //importando rotas dos usuarios
import routeProdutor from './routes/route.produtor.js';         //importando rotas dos produtores
import routePropriedade from './routes/route.propriedade.js';   //importando rotas das propriedades

const app = express(); //constante para conter todas as funçoes do express

app.use(express.json()) //middleware para trabalhar com json
app.use(cors());        //middleware de acesso para outras aplicações
app.use(BasicAuth);     //Segurança Basica

//Rotas
app.use(routeLogin);
app.use(routeUsuario);
app.use(routeProdutor);
app.use(routePropriedade);

//end point de teste de comunicação
app.get('/teste',function(req, resp){
    resp.status(200).send('Servidor respondendo ao teste')
})

const porta = process.env.PORT || 3000

app.listen(porta,function(){
    //Mensagem mostrada no terminal, para verificação do servidor esta rodando
    console.log('Servidor escutando a porta: '+porta)
})


