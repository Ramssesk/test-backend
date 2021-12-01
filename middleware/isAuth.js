
const jwt = require('jsonwebtoken');
require('dotenv').config({path: '.env'});

exports.isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization')
    
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const usertoken = await jwt.verify(token, process.env.SECRETA);
            req.userToken = usertoken;
            return next();
        } catch (e) {
            console.log(e, "error");
            res.status(401).json({ msg: 'Error en la autenticacion'});
        }
    }
    else{
        res.status(401).json({ msg: 'no hay toekn'});
    }
}
