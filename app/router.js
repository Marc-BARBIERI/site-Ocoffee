const express = require('express');
const router = express.Router();


const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');

router.get('/', mainController.home);
router.get('/boutique', mainController.boutiquePage);
router.get('/catalogue', searchController.elementCoffee);
router.get('/detailProduit/:id', mainController.detailProduit);




module.exports = router;