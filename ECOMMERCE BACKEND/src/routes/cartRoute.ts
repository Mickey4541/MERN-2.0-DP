import express, {Router} from 'express'
import authmiddleware from '../Middleware/authmiddleware'
import cartController from '../controllers/cartController'
const router:Router = express.Router()

router.route('/').post(authmiddleware.isAuthenticated, cartController.addToCart).get(authmiddleware.isAuthenticated, cartController.getMyCarts)

export default router