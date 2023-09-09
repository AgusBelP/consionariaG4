const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authController = require('../controllers/auth.controller');
require('dotenv').config();

const secret = process.env.secret;

async function create_token(req,res) {
    const email = req.body.email;
    const pass = req.body.password;
    const user = await authController.userAuthEmail(email)
    console.log(pass);
    console.log(user[0].clave);
            
    if(user[0] != undefined && bcrypt.compareSync(pass,user[0].clave) === true){
        const payload = { sub: user[0].id_usuario};
        const token = jwt.sign(payload, secret, { expiresIn: '10min' });
        res.json({
        message: 'AUTENTICACION EXITOSA',
        token: token
    })
    }else{
        res.json({
        message: 'Credenciales incorrectas'
    })}
    
}

const verifyToken = ((req,res,next) => {
    let bearerHeader = req.headers['authorization'];
   
    if(typeof bearerHeader != undefined){
        let token = bearerHeader.split(" ")[1];
        req.token = token
    }else{
        res.status(401).send({
            error: "Es necesario un token para la autenticación"
        });
        return
    }
    
    jwt.verify(req.token, secret, (error, decoded)=>{
            if(error){
                return res.json({
                    message: "El token no es valido"
                })
            }else{
                req.decoded = decoded;
                res.json({
                    message: "Usuario autorizado"
                })
                next();
            }
        })
});

module.exports = {
    create_token,
    verifyToken
}