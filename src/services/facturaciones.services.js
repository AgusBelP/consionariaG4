const { facturacionModel } = require('../models/facturacion.model');

async function crearFacturacion(presupuestoCreado,facturaciones,id_presupuesto) {
    try {

        for(let repuesto in facturaciones){
            facturaciones[repuesto].fecha = presupuestoCreado.fecha;
            facturaciones[repuesto].id_presupuesto = id_presupuesto[0];
            await facturacionModel.save(facturaciones[repuesto])
        }
      
        return
         
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearFacturacion
}