const mongoose = require('mongoose')

const facturaSchema = new mongoose.Schema({

    concepto: {type:String, required: true},
    importe:{type:Number, required: true}
})

const Factura = mongoose.model('factura', facturaSchema)

module.exports = Factura