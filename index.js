require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

//Crear el servidor express
const app = express();

//Configurar CORS Middleware
app.use(cors());

//Base de datos
dbConnection();

//Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));





app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: '+ process.env.PORT)
});