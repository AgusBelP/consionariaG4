const knex = require("knex");
const { config } = require("../config/configDB");

class EmpleadoModel {
  constructor() {
    this.knexDB = knex(config.db);
    this.tableName = "empleados";
  }

  /**  LISTAR TODOS LOS REGISTROS  **/

  async listAll() {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("*")
        .orderBy("id", "asc");
    } catch (error) {
      throw error;
    }
  }

  /**  OBTENER UNO POR ID  **/

  async getById(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("*")
        .where({ id: id });
    } catch (error) {
      throw error;
    }
  }

   /**  OBTENER UNO POR ID DE USUARIO  **/

  async getByIdUser(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("id_empleado")
        .where({ id_usuario: id });
    } catch (error) {
      throw error;
    }
  }

  /**  GUARDAR UN REGISTRO  **/

  async save(obj) {
    try {
      return await this.knexDB(this.tableName).insert(obj);
    } catch (error) {
      throw error;
    }
  }

  /**  ACTUALIZAR UN REGISTRO  **/

  async update(id, obj) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .where({ id: id })
        .update(obj);
    } catch (error) {
      throw error;
    }
  }

  /**  ELIMINAR UN REGISTRO  **/

  async delete(id) {
    try {
      return await this.knexDB.from(this.tableName).where({ id: id }).del();
    } catch (error) {
      throw error;
    }
  }
}

const empleadoModel = new EmpleadoModel();

module.exports = { empleadoModel };
