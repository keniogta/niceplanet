Olá, essa API faz parte do processo seletivo da NicePlanet.

email: kenio@gtasistemas.com.br

Para esse projeto foi usado NodeJs salvando informações em um BD MySql. <br>
1. No NodeJs <br>
    npm     : para gerenciador de pacotes; <br>
    express : para trabalhar com json, levantar o servidor; <br>
    cors    : para distribuir a aplicação para outras linguagens; <br>
    mysql   : middleware de conexão com MySql; <br>
    bcrypt  : middleware de criptografia/descriptografia; <br>
    nodemon : ferramenta para start o servidor após cada save. <br>

2. Ambiente e Software utilizados <br>
    Windows; <br>
    Postman : Responsavel para testar API, criar e solicitar conexões HTTP e HTTPs; <br>
    VSCode  : Editor de texto; <br>

3. Arquivos <br>
    index       :   Arquivo de entrada da aplicação; (\src\index.js) <br>
    database    :   Arquivo de configuração da conexão com MySql; (\src\config\database.js) <br>
    basic-auth  :   Arquvido de configuração de segurança basica; (\src\config\basic-auth.js) <br>

    3.1. Pasta Routes <br>
        Pasta que contem os arquivos de direcionamento das rotas, verbos (post, get, put,...) <br>
    3.2. Pasta Controllers <br>
        Pasta que contem os arquivos de tratamentos das request <br>
    3.3. Pasta Models <br>
        Pasta que contem os arquivos de manipulção do BD (select, insert, update,...) <br>

4.  Documentação API https://www.postman.com/gold-firefly-864940/workspace/nice-planet <br>

5.  Usuarios/Senhas <br>
        NodeJs -> Basic-Auth.js (Foi usado uma autenticação basica); username: nice_planet password: @pass_nice <br>
        MySql -> database.js username: root password: @#Gta147123 database: bd_nice <br>

6. Passo a Passo <br>
    6.1.    Baixe o aplicativo; <br>
    ![dwBanner](https://www.systecagricola.com.br/imagens/nice/1.png) <br>
    6.2.    Extrai o arquivo em uma pasta de sua preferencia <br>
    6.3.    Abra o VSCode em menu Arquivo-> Abrir Pasta (selecione a pasta onde extraiu o arquivo) <br>
    ![dwBanner](https://www.systecagricola.com.br/imagens/nice/2.png) <br>
    6.4.    Dentro "terminal" (Ctrl+Shift+') irá aparecer a pasta já selecionada, no meu caso eu extrai na F:\niceplanet-main <br>
    ![dwBanner](https://www.systecagricola.com.br/imagens/nice/3.png) <br>
    6.5.    Digite: npm install -g nodemon (para instalar as dependencias globais do nodemon) <br>
    6.6.    Digite: nodemon \src\index.js (para iniciar o servidor node)<br>
    ![dwBanner](https://www.systecagricola.com.br/imagens/nice/4.png) <br>
    
    * Caso ocorra algum erro, fazer instalação do npm, com: npm init <br>

7. Video de instalação <br>
https://www.systecagricola.com.br/imagens/nice/Como_Instalar.rar
    
    

