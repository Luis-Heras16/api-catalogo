import teacherController from "../controllers/teachers.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/insert', teacherController.insertTeacher);
router.get('/getAll', teacherController.getTeachers);
router.get('/getOne/:controlnumber', teacherController.getTeacher);
router.put('/update/:controlnumber', teacherController.updateTeacher);
router.delete('/delete/:controlnumber', teacherController.deleteTeacher);
export default router;