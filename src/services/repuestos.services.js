const { repuestoModel } = require('../models/respuesto.model');

async function repuestos(tipo) {
    try {
        const listadoRepuestos = await repuestoModel.getByType(tipo);
        return listadoRepuestos
    } catch (error) {
        throw error
    }
}


module.exports = {
    repuestos
}