import Empresa from "../models/empresas.model.js";

const empresasDAO = {};

empresasDAO.insertEmpresa = async (empresa) => {
  try {
    return await Empresa.create(empresa);
  } catch (error) {
    console.error("Error inserting empresa:", error);
    throw error;
  }
};

empresasDAO.getAllEmpresas = async () => {
  try {
    return await Empresa.find();
  } catch (error) {
    console.error("Error getting all empresas:", error);
    throw error;
  }
};

empresasDAO.getEmpresa = async (id) => {
  try {
    return await Empresa.findOne({ _id: id });
  } catch (error) {
    console.error("Error getting empresa:", error);
    throw error;
  }
};

empresasDAO.updateEmpresa = async (id, empresa) => {
  try {
    return await Empresa.findOneAndUpdate({ _id: id }, empresa, { new: true });
  } catch (error) {
    console.error("Error updating empresa:", error);
    throw error;
  }
};

empresasDAO.deleteEmpresa = async (id) => {
  try {
    return await Empresa.deleteOne({ _id: id });
  } catch (error) {
    console.error("Error deleting empresa:", error);
    throw error;
  }
};

export default empresasDAO;
