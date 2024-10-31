import express,{Router} from 'express'
import authmiddleware, { Role } from '../Middleware/authmiddleware'
import productController from '../controllers/productController'
// import { multer, storage } from '../Middleware/multerConfig'
import multerConfig = require('../Middleware/multerConfig');

const upload = multerConfig.multer({ storage: multerConfig.storage });

// const upload = multer({storage : storage})
const router:Router = express.Router()




router.route('/').post(authmiddleware.isAuthenticated,authmiddleware.restrictTo(Role.Admin),
upload.single('image'), productController.registerProduct) //here Role.Admin is from authmiddleware.ts enum Role.


export default router