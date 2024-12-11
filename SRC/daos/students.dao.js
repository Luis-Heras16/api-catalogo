import Student from '../models/students.model.js';
const studentDAO={};
studentDAO.insertStudent = async (student)=>{
    return await Student.create(student);
};
studentDAO.getStudents = async ()=>{
    return await Student.find();
};
  studentDAO.getStudent = async (controlnumber)=>{
  return await Student.findOne({controlnumber:controlnumber});
};
studentDAO.updateStudent = async (controlnumber, student)=> {
    return await Student.findOneAndUpdate({controlnumber:controlnumber}, student);
};
studentDAO.deleteStudent = async (controlnumber)=>{
    return await Student.findOneAndDelete({controlnumber:controlnumber});
};
export default studentDAO;