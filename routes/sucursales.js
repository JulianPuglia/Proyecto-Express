const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController.listadoSucursales);
router.get('/:sucursal', sucursalesController.detallesSucursales);

module.exports = router;