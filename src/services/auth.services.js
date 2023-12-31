const { usuarioModel } = require('../models/usuario.model');

async function userEmail(email) {
    try {
        const usuarioEmail = await usuarioModel.getByEmail(email);
        return usuarioEmail
    } catch (error) {
        throw error
    }
}

async function userById(id) {
    try {
        const usuario = await usuarioModel.getById(id);
        return usuario
    } catch (error) {
        throw error
    }
}


module.exports = {
    userEmail,
    userById
}