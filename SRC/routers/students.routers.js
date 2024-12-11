import studentController from "../controllers/students.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/insert', studentController.insertStudent);
router.get('/getAll', studentController.getStudents);
router.get('/getOne/:controlnumber', studentController.getStudent);
router.put('/update/:controlnumber', studentController.updateStudent);
router.delete('/delete/:controlnumber', studentController.deleteStudent);
export default router;