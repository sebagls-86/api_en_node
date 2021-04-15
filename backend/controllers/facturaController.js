const Factura = require('../models/facturaModel')

const facturaController = {

    listarFacturas: async (req, res) => {
        const data = await Factura.find()
        res.json({ "respuesta": "DATA" })
    },
    cargarFacturas: async (req, res) => {
        var concepto = req.body.concepto
        var importe = req.body.importe

        const nuevafactura = new Factura({
            concepto: concepto,
            importe: importe
        })

        await nuevafactura.save()
        res.json({ "respuesta": "OK" })

    },
    borrarFacturas: async (req, res) => {
        var id = req.params.id
        var consulta = await Factura.findOneAndDelete({ _id: id })

        if (consulta === null) {
            res.status(404).send("No se encuentra la factura")
        }
        else {
            res.json({ "respuesta": "Factura borrada" })
        }
    },
    modificarFacturas: async (req, res) => {
        var id = req.params.id
        var concepto = req.body.concepto
        var importe = req.body.importe
        await Factura.findOneAndUpdate(
            { _id: id },
            {
                concepto: concepto,
                importe: importe
            })
        res.json({ "respuesta": "Factura modificada" })


    }

}

module.exports = facturaController