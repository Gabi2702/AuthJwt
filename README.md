
# Cadastro, Login e Autenticação de Usuario com JWT

Um projeto com intuito de aprender conceitos sobre Autenticação de usuario no backend, usando JWT;


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`POSTGRES='postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName'`

`TOKEN_SECRET = 'Your Token Secret'` 


## Deploy

Instalar as dependencias

```bash
npm install
```

Ir para

```bash
cd Config/Models
```

Descomentar 

```bash
// User.sync({force:true})
```

Rodar 

```bash
node User.js
```

Comentar Novamente, para nao recriar tabela 

```bash
User.sync({force:true})
```

Ser feliz

```bash
npm run dev
```

## Referência

 - [Sequelize](https://sequelize.org/docs/v6/getting-started/)
 - [Express](https://expressjs.com/en/starter/hello-world.html)
 - [JWT](https://dev.to/franciscomendes10866/using-cookies-with-jwt-in-node-js-8fn)

