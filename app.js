const express = require('express');
const app = express();

app.listen(1212, () => {console.log('El servirdor esta funcionando en el puerto 1212')})

const rutaHome = require('./routes/home');
const rutaSucursales = require('./routes/sucursales');
const rutaMarcas = require('./routes/marcas');
const rutaAutos = require('./routes/autos');

app.use('/', rutaHome);
app.use('/sucursales', rutaSucursales);
app.use('/marcas', rutaMarcas);
app.use('/Autos', rutaAutos);