import Admin from '../models/admin.model.js';

const adminsDAO = {};

adminsDAO.insertAdmin = async (admin) => {
  return await Admin.create(admin);
};

adminsDAO.getAllAdmins = async () => {
  return await Admin.find();
};

adminsDAO.getAdmin = async (id) => {
  return await Admin.findOne({ _id: id });
};

adminsDAO.updateAdmin = async (id, admin) => {
  return await Admin.findOneAndUpdate({ _id: id }, admin, { new: true });
};

adminsDAO.deleteAdmin = async (id) => {
  return await Admin.deleteOne({ _id: id });
};

export default adminDAO;
