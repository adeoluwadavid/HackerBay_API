import authController from '../controllers/autheC';
import patchController from '../controllers/jPatcher';
import thumbnailController from '../controllers/tGen';
import authMiddleware from '../middlewares/authM';
let loginValidator = require('../validators/loginValidator');
let validator = require('../middlewares/payloadErrorHandler');

module.exports = (router) => {
    router.post('/signin', validator.payloadValidatorHandler(loginValidator.payload), authController.login);
    router.patch('/jsonpatcher', authMiddleware.authenticate, patchController.patchData);
    router.get('/generatethumbnail', authMiddleware.authenticate, thumbnailController.generateThumbnail);
    
    return router;
}