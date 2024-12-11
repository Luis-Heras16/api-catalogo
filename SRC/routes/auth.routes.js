import authController from "../controllers/auth.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/logIn', authController.login);
export default router;