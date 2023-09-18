const repuestosServices = require('../services/repuestos.services')

async function getRepuesto (req,res) {
    try {
        const tipo_repuesto = req.params.tipo;
        const lista_repuestos = await repuestosServices.repuestos(tipo_repuesto);
        res.json({repuestos: lista_repuestos})
    } catch (error) {
        throw error
    }
}

module.exports = {
    getRepuesto
}