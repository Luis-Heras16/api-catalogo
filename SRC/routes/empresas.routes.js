import empresaController from "../controllers/empresas.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/insert', empresaController.insertEmpresa);
router.get('/getAll', empresaController.getAllEmpresa);
router.get('/getOne/:id', empresaController.getEmpresa);
router.put('/updateOne/:id', empresaController.updateEmpresa);
router.delete('/deleteOne/:id', empresaController.deleteEmpresa);
export default router;