const Router = require('express').Router();
//const Sale = require('../models/sale.model');
const SalesController = require("../controllers/sales.controller")


Router.get('/', SalesController.list);
Router.post('/', SalesController.create)

module.exports = Router