import Teacher from '../models/teachers.model.js';
const teacherDAO={};
teacherDAO.insertTeacher = async (teacher)=>{
    return await Teacher.create(teacher);
};
teacherDAO.getTeachers = async ()=>{
    return await Teacher.find();
};
  teacherDAO.getTeacher = async (controlnumber)=>{
  return await Teacher.findOne({controlnumber:controlnumber});
};
teacherDAO.updateTeacher = async (controlnumber, teacher)=> {
    return await Teacher.findOneAndUpdate({controlnumber:controlnumber}, teacher);
};
teacherDAO.deleteTeacher = async (controlnumber)=>{
    return await Teacher.findOneAndDelete({controlnumber:controlnumber});
};
export default teacherDAO;