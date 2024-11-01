import express,{Router} from 'express'
import authmiddleware, { Role } from '../Middleware/authmiddleware'
import categoryController from '../controllers/categoryController'
const router:Router = express.Router()

router.route("/").post(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin),categoryController.addCategory).get(categoryController.getCategory)

router.route("/:id").delete(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin),categoryController.deleteCategory).patch(authmiddleware.isAuthenticated, authmiddleware.restrictTo(Role.Admin), categoryController.updateCategory)



export default router




//router.route ko faidaa vaneko aautai route maa different work garna sakinxa like getproduct, postproduct etc.