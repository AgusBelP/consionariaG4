const express =  require('express');
const router = express.Router();
const jwtAdmin = require('../utils/jwt')

router.post('/login', jwtAdmin.create_token);

module.exports = router
