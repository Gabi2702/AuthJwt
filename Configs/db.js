const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Option 1: Passing a connection URI
console.log(process.env.POSTGRES)
const sequelize = new Sequelize(process.env.POSTGRES) // Example for postgres

// Option 2: Passing parameters separately (sqlite)

async function Connection(){
    try {
        await sequelize.authenticate();
        console.log('Conexão Foi Efetuada com Sucesso');
      } catch (error) {
        console.error('Erro ao se conectar:', error);
      }
}

Connection()

module.exports= sequelize