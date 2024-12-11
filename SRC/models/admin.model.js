import mongoose from 'mongoose';
const { Schema } = mongoose;

// Esquema para el documento de usuario
const adminSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  matricula: {
    type: Number,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  }
});

// Modelo de Mongoose para el usuario
const Admin = mongoose.model('admin', adminSchema);

export default Admin;
