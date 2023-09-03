const { vehiculoModel } = require("../models/vehiculo.model");
const { vehiculosValidations } = require("../validations/vehiculosValidations");

async function altaVehiculoService(data) {
  try {
    //Validación de campos:
    vehiculosValidations(data);

    //falta validación de usuario registrado en la ddbb
    // ( --- AQUI VALIDACIÓN DE USUARIO REGISTRADO EN LA DDBB ---)

    const fecha_ingreso = new Date();

    const dataDB = await vehiculoModel.save({
      dominio: data.dominio,
      modelo: data.modelo,
      marca: data.marca,
      anio: data.anio,
      fecha_ingreso,
      id_cliente: data.cliente,
    });
    return dataDB;
  } catch (error) {
    throw error;
  }
}

module.exports = { altaVehiculoService };
