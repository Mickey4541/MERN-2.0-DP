

import express,{ Router } from "express"
import AuthController from "../controllers/userController"
import errorHandler from "../services/CatchAsyncError"
import authmiddleware, { Role } from "../Middleware/authmiddleware"
// import ProductController from "../controllers/productController"
const router:Router = express.Router()

router.route('/register').post(errorHandler(AuthController.registerUser))
router.route("/login").post(errorHandler(AuthController.loginUSer))
router.route("/users").get(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin), errorHandler(AuthController.fetchUsers))


router.route("/users/:id").delete(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin), errorHandler(AuthController.deleteUser))
export default router