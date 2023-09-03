const { Router } = require("express");
const {
  altaVehiculoController,
} = require("../controllers/altaVehiculo.controller");

const vehiculoRoute = Router();

vehiculoRoute.post("/", altaVehiculoController);

module.exports = { vehiculoRoute };
