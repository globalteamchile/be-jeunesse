// Import necesario para trabajar.
const express = require('express');
const path = require('path');

// Instancia inicial de variables
const app = express();

// Middleware -- variable para manejo de json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// //Routes - path para consumo del servicio
// app.use(require('./routes/index'));

// //Static files - ruta para imagenes
// app.use(express.static(path.join(__dirname, 'public')));

// inicio del servidor en el puerto indicado
app.listen(3000, () => {
console.log('Server on port', 3000);
});