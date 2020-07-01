const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');

router.get('/', autosController);
router.get('/:marca', autosController);
router.get('/:marca/:dato', autosController);


module.exports = router;