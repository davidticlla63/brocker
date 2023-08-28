// conexion.js
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'broker_db',
  password: 'admin',
  port: 5432,
});

async function conectar() {
  try {
    await client.connect();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = {
  conectar,
  client // También puedes exportar el cliente si lo necesitas en otros lugares
};