const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');

router.get('/', marcasController);
router.get('/:marca', marcasController);

module.exports = router;