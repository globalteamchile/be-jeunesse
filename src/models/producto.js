const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    v_id: String,
    v_nombreProd: String,
    v_descripcion: String,
    n_precio: String,
    v_imagen: String,
    n_stock: String
});

module.exports = mongoose.model('productos',ProductoSchema);