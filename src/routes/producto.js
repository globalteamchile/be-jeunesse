const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.post('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.send(productos);
});

router.post('/add', async (rep, res) =>{
const producto = new Producto({
    v_id: "5",
    v_nombreProd: "xxx",
    v_descripcion: "xxx",
    n_precio: "xxx",
    v_imagen: "xxx",
    n_stock: "xxx"
});
await producto.save();
res.send('received');
});



module.exports = router;