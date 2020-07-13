const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');

router.get('/', marcasController.listadoMarcas);
router.get('/:marca', marcasController.autosPorMarca);

module.exports = router;