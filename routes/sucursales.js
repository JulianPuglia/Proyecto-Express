const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController);
router.get('/:sucursal', sucursalesController);

module.exports = router;