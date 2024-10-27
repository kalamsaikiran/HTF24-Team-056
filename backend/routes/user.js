import { Router } from "express";
import { getdata, loginUser, registerUser } from "../controllers/user.js";


const router = Router()

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getdata)

export default router

