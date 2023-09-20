function presupuestoValidation(req,res,next){

    const presupuesto = req.body.presupuesto;

    if(!presupuesto.tipo_trabajo){
        return res.json({ error: "Por favor ingrese el tipo de trabajo a realizar (service o reparación)"}) 
    }

    if(!presupuesto.importe_total){
        return res.json({ error: "Por favor ingrese el importe total del trabajo a realizar"}) 
    }

    if(!presupuesto.importe_total){
        return res.json({ error: "Por favor ingrese el dominio del vehículo sobre el cual se debe realizar el trabajo"}) 
    }

    const facturaciones = req.body.facturaciones;

    for(let repuesto in facturaciones){

            if(!facturaciones[repuesto].precio_total || facturaciones[repuesto].precio_total <= 1){
                return res.json({ error: "Por favor revise los precios totales de los repuestos utilizados en el presupuesto"}) 
            }

            if(!facturaciones[repuesto].cantidad || facturaciones[repuesto].cantidad < 1){
                return res.json({ error: "Por favor revise las cantidades de los repuestos utilizados en el presupuesto"}) 
            }

            if(!facturaciones[repuesto].id_repuesto){
                return res.json({ error: "Por favor ingrese el id de todos los repuestos utilizados en el presupuesto"}) 
            }

        }

    next()

};



module.exports = {
    presupuestoValidation,
}