const User = require('../models/User');
require('dotenv').config({path: '.env'});
const jwt = require('jsonwebtoken');

exports.newUser = async (req, res) => {

    const { nombre, segundoNombre, apellidoPaterno, apellidoMaterno, date, email, telefono} = req.body

    try {
        const user = await User.create({ 
            nombre: nombre, segundoNombre: segundoNombre, apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno, date: date, email: email, telefono: telefono 
        });

        const payload = {
            id: user.id,
            nombre: user.nombre,
            correo: user.apellidoPaterno
        }
    
        const token = await jwt.sign(payload, process.env.SECRETA, {
            expiresIn: '12h'
        });

        res.status(200).json({token, user})
    } catch(e) {
        console.log(e);
    }
}

exports.getUserInfo = async (req, res) => {

    try {
        const user = await User.findOne({ where: { id: req.userToken.id } });
        res.status(200).json({user})
    } catch(e) {
        console.log(e);
    }

}