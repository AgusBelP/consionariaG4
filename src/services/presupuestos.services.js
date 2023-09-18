const { presupuestoModel } = require('../models/presupuesto.model');
const { vehiculoModel } = require('../models/vehiculo.model');
const { empleadoModel } = require('../models/empleado.model');
const facturacionesServicio = require('../services/facturaciones.services');
const moment = require('moment');

async function armadoPresup(presupuesto,facturaciones,user, res) {
    try {

        const dominioVehiculo = presupuesto.dominio_vehiculo;
        const id_vehiculo = await vehiculoModel.getByDom(dominioVehiculo);

        if(!id_vehiculo.length){
            res.json({ error: "Dominio no encontrado"})
            return
        }
        
        const id_empleado = await empleadoModel.getByIdUser(user[0].id_usuario);

        const presuPost = {
            tipo_trabajo : presupuesto.tipo_trabajo,
            detalle : presupuesto.detalle,
            importe_total : presupuesto.importe_total,
            fecha : moment().format("YYYY-MM-DD HH:mm:ss"),
            id_vehiculo: id_vehiculo[0].id_vehiculo,
            id_empleado : id_empleado[0].id_empleado
        };

        const id_presupuesto = await presupuestoModel.save(presuPost);
        
        await facturacionesServicio.crearFacturacion(presuPost, facturaciones, id_presupuesto);
        
        res.json({ resultado: "Presupuesto creado"})

        return  
         
    } catch (error) {
        throw error
    }
}

module.exports = {
    armadoPresup
}