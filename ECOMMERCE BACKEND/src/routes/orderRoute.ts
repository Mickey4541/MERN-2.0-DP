import express,{Router} from 'express'
import authmiddleware from '../Middleware/authmiddleware'
import errorHandler from '../services/CatchAsyncError'
import OrderController from '../controllers/orderController'
const router:Router = express.Router()

router.route('/').post(authmiddleware.isAuthenticated, errorHandler(OrderController.createOrder))

export default router




//router.route ko faidaa vaneko aautai route maa different work garna sakinxa like getproduct, postproduct etc.