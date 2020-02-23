require('dotenv').config()

const jwt = require('jsonwebtoken');

const auth = (req,res,next) => {
    console.log(req);
    const token = req.header('auth-token')
    console.log("token: "+token);
    if(!token){
        return res.status(401).json({msg:'No token,access denied'})
    }

    try {
        const decoded = jwt.verify(token,process.env.SECRET)
        //requeste çözülmüş tokeni ekliyoruz. İçinde user id var
        req.user = decoded.user; // payload olarak user objesi yolladık
        console.log("in middleware decoced user: "+decoded.user);
        next();
    } catch (error) {
        res.status(401).json({msg:'Invalid token'})
    }
}

module.exports=auth;