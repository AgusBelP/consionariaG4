const express =  require('express');
const router = express.Router();
const jwtAdmin = require('../utils/jwt')
const { checkRole } = require('../validations/user.validation');
const repuestosController = require('../controllers/repuestos.controller');
const presupuestosController = require('../controllers/presupuestos.controller');


router.get('/:tipo', jwtAdmin.verifyToken, checkRole(["empleado"]), repuestosController.getRepuesto);
router.post('/presupuestos', jwtAdmin.verifyToken, checkRole(["empleado"]) ,presupuestosController.postPresup);
//router.post('/presupuestos', jwtAdmin.verifyToken, checkRole(["empleado"]));

module.exports = router
