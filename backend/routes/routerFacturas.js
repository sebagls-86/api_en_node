const express = require('express')
const facturaController = require('../controllers/facturaController')

const router = express.Router()

router.route('/facturas')
.get(facturaController.listarFacturas)
.post(facturaController.cargarFacturas)


router.route('/facturas/:id')
.delete(facturaController.borrarFacturas)
.put(facturaController.modificarFacturas)

module.exports=router