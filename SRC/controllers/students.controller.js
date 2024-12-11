import studentDAO from "../daos/students.dao.js";
const studentController = {};
studentController.insertStudent = async (req, res) => {
    studentDAO.insertStudent(req.body)
    .then((student) => {
        res.json({
            message: "Student create succesfully"
        })
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });
};
studentController.getStudents = async (req,res) =>{
    studentDAO.getStudents()
    .then((students) => {
        res.json(students);
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
studentController.getStudent = async (req,res) =>{
    studentDAO.getStudent(req.params.controlnumber)
    .then((student) => {
        res.json(student);
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
studentController.updateStudent = async (req, res) =>{
    studentDAO.updateStudent(req.params.controlnumber,req.body)
    .then((student) =>{
        res.json(student);
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });
}
studentController.deleteStudent = async (req, res) =>{
    studentDAO.deleteStudent(req.params.controlnumber)
    .then((student) =>{
        res.json({message: "Student delete successfully"})
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
    
export default studentController;