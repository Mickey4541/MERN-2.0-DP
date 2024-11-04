import express,{Router} from 'express'
import authmiddleware, { Role } from '../Middleware/authmiddleware'
import errorHandler from '../services/CatchAsyncError'
import OrderController from '../controllers/orderController'
import orderController from '../controllers/orderController'
const router:Router = express.Router()

router.route('/').post(authmiddleware.isAuthenticated, errorHandler(OrderController.createOrder))


router.route('/verify').post(authmiddleware.isAuthenticated,errorHandler(orderController.verifyTransaction))
export default router

router.route('/customer/').post(authmiddleware.isAuthenticated, errorHandler(orderController.fetchMyOrders))

router.route('/customer/:id').patch(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Customer), errorHandler(orderController.cancelMyOrder)).get(authmiddleware.isAuthenticated, errorHandler(orderController.fetchOrderDetails))


router.route("/admin/payment/:id").patch(authmiddleware.isAuthenticated,authmiddleware.restrictTo(Role.Admin),errorHandler(orderController.changePaymentStatus))

router.route("/admin/:id").patch(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin), errorHandler(orderController.changeOrderStatus)).delete(authmiddleware.isAuthenticated,authmiddleware.restrictTo(Role.Admin), errorHandler(orderController.deleteOrder))
//router.route ko faidaa vaneko aautai route maa different work garna sakinxa like getproduct, postproduct etc. 