function vehiculosValidations(data) {
  //validaciones:
  if (!data.modelo) {
    throw new Error("ingrese modelo");
  }
  if (data.modelo.length < 3 || data.modelo.length > 40) {
    throw new Error("Modelo debe tener 3-40 caracteres.");
  }
  if (!data.marca) {
    throw new Error("ingrese marca");
  }
  if (data.marca.length < 3 || data.marca.length > 40) {
    throw new Error("Marca debe tener 3-40 caracteres.");
  }
  if (!data.dominio) {
    throw new Error("Ingrese dominio");
  }
  if (data.dominio.length < 3 || data.dominio.length > 20) {
    throw new Error("Dominio debe tener 6-20 caracteres.");
  }
  if (!data.anio) {
    throw new Error("ingrese año");
  }
  if (!data.cliente) {
    throw new Error("ingrese cliente");
  }
  if (isNaN(data.anio)) {
    throw new Error("año no es un número");
  }
  if (data.anio > 2025 || data.anio < 1970) {
    throw new Error("año inválido");
  }
}

module.exports = { vehiculosValidations };
