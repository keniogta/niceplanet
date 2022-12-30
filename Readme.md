Olá, essa API faz parte do processo seletivo da NicePlanet.

Para esse projeto foi usado NodeJs salvando informações em um BD MySql.
1. No NodeJs
    npm     : para gerenciador de pacotes;
    express : para trabalhar com json, levantar o servidor;
    cors    : para distribuir a aplicação para outras linguagens;
    mysql   : middleware de conexão com MySql;
    bcrypt  : middleware de criptografia/descriptografia;
    nodemon : ferramenta para start o servidor após cada save.

2. Ambiente e Software utilizados
    Windows;
    Postman : Responsavel para testar API, criar e solicitar conexões HTTP e HTTPs;
    VSCode  : Editor de texto;

3. Arquivos
    index    :   Arquivo de entrada da aplicação; (\src\index.js)
    database :   Arquivo de configuração da conexão com MySql; (\src\config\database.js)
    basic-auth  :   Arquvido de configuração de segurança basica; (\src\config\basic-auth.js)

    3.1. Pasta Routes
        Pasta que contem os arquivos de direcionamento das rotas, verbos (post, get, put,...)
    3.2. Pasta Controllers
        Pasta que contem os arquivos de tratamentos das request
    3.3. Pasta Models
        Pasta que contem os arquivos de manipulção do BD (select, insert, update,...)

4. Documentação API
    https://www.postman.com/gold-firefly-864940/workspace/nice-planet
    

