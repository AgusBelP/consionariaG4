const { altaVehiculoService } = require("../services/altaVehiculo.services");

async function altaVehiculoController(req, res) {
  try {
    //data del request:
    const data = req.body;

    //servicio
    const resService = await altaVehiculoService(data);

    //respuesta:
    res.json({ id_vehiculo: resService[0] });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = { altaVehiculoController };
