import authService from '../services/auth';

class AuthMiddleware{
    authenticate(req, res, next) {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token){
            authService.verifyToken(token)
                .then(decoded =>{
                    next();
                }).catch(error=>{
                    next(error);
                });
        } else{
            res.status(401).send({ error: "Please provide your token" });
        }
    }
}

module.exports = new AuthMiddleware();