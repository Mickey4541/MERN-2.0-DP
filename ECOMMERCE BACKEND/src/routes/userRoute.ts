

import express,{ Router } from "express"
import AuthController from "../controllers/userController"
import errorHandler from "../services/CatchAsyncError"
// import ProductController from "../controllers/productController"
const router:Router = express.Router()

router.route('/register').post(errorHandler(AuthController.registerUser))
router.route("/login").post(errorHandler(AuthController.loginUSer))


export default router