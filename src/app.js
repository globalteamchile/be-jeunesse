const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectando la base de datos
mongoose.connect('mongodb+srv://mongo:mongo123@cluster0-jiye8.mongodb.net/jeunesse')
.then(db => console.log('Db conectada'))
.catch(err => console.log(err));

// Importando routes
const productoRoutes = require('./routes/producto');
const stripeRoutes = require('./routes/stripe');

// Configuracion
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', productoRoutes);
app.use('/', stripeRoutes);

// Inicio del servidor
app.listen(app.get('port'), () => {
 console.log(`Server on port ${app.get('port')}`);
});