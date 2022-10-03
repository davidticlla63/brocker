import jwt from 'jsonwebtoken';
import config from '../config'

export function ensureToken(req, res, next) {
    //console.log(req.headers)
    const bearerHeader = req.headers['authorization']
    //console.log(bearerHeader)
    if (typeof bearerHeader!=='undefined') {
        const bearer=bearerHeader.split(" ")
        const bearerToken= bearer[1]
        req.token=bearerToken
        jwt.verify(bearerToken,config.SECRET,(err,data)=>{
            if (err) {
                res.sendStatus(403)
            } else {
                next()
            }
        })
        //next()
    }else{
        res.sendStatus(403)
    }
}