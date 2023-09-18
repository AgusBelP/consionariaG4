const prespuestoServices = require('../services/presupuestos.services');


async function postPresup (req,res) {
    try {
        const presupuesto = req.body.presupuesto;
        const facturaciones = req.body.facturaciones;

        const user = req.user
               
        await prespuestoServices.armadoPresup(presupuesto, facturaciones, user, res);
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    postPresup
}