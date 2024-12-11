import teacherDAO from "../daos/teachers.dao.js";
const teacherController = {};
teacherController.insertTeacher = async (req, res) => {
    teacherDAO.insertTeacher(req.body)
    .then((teacher) => {
        res.json({
            message: "Teacher create succesfully"
        })
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({
            message: error
        })
    });
};
teacherController.getTeachers = async (req,res) =>{
    teacherDAO.getTeachers()
    .then((teachers) => {
        res.json(teachers);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
teacherController.getTeacher = async (req,res) =>{
    teacherDAO.getTeacher(req.params.controlnumber)
    .then((teacher) => {
        res.json(teacher);
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
teacherController.updateTeacher = async (req, res) =>{
    teacherDAO.updateTeacher(req.params.controlnumber,req.body)
    .then((teacher) =>{
        res.json(teacher);
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });
}
teacherController.deleteTeacher = async (req, res) =>{
    teacherDAO.deleteTeacher(req.params.controlnumber)
    .then((teacher) =>{
        res.json({message: "Teacher delete successfully"})
    })
    .catch((error) => {
        //console.error(error);
        res.status(500).json({
            message: error
        })
    });

}
    
export default teacherController;