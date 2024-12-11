import Empresa from '../models/empresas.model.js';
const empresasDAO={};
empresasDAO.insertEmpresa = async (empresas)=>{
    return await Empresa.create(empresas);
};
empresasDAO.getAllEmpresa = async ()=>{
    return await Empresa.find();
};
empresasDAO.getEmpresa = async (id)=>{
    return await Empresa.findOne({id:id});
};
empresasDAO.updateEmpresa = async (id, empresas)=>{
    return await Empresa.findOneAndUpdate({id:id}, empresas);
};
empresasDAO.deleteEmpresa = async (id)=>{
    return await Empresa.deleteOne({id:id});
};
export default empresasDAO;