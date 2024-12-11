import empresasDAO from "../daos/empresas.daos.js";
const empresasController ={};
empresasController.insertEmpresa = async (req, res) =>{
    empresasDAO.insert(req.body)
    .then((empresa)=>{
        res.json({
            message:"Student created succesfully"
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    });
};
empresasController.getAllEmpresa = async (req, res) => {
    empresasDAO.getAllEmpresa()
    .then((empresa) =>{
        res.json(empresa);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};
empresasController.getEmpresa = async (req, res) => {
    empresasDAO.getEmpresa(req.params.id)
    .then((empresa) =>{
        res.json(empresa);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};
empresasController.updateEmpresa = async (req, res) => {
    empresasDAO.updateEmpresa(req.params.id, req.body)
    .then((empresa) =>{
        res.json(empresa);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};

empresasController.deleteEmpresa = async(req, res) =>{
    empresasDAO.deleteEmpresa(req.params.id)
    .then((empresa) =>{
        res.json(empresa);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    });
};

export default empresasController;