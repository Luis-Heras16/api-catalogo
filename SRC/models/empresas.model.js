import { model, Schema } from "mongoose";
import mongoose from 'mongoose';

// Esquema para las vacantes
const vacanteSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  requisitos: [
    {
      type: String,
      required: true
    }
  ]
});

// Esquema para el contacto
const contactoSchema = new Schema({
  telefono: {
    type: String,
    required: true
  },
  emails: [
    {
      type: String,
      required: true
    }
  ]
});

// Esquema principal para la empresa
const empresaSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  vacantes: [vacanteSchema],
  contacto: contactoSchema
});

// Modelo de Mongoose para la empresa
const Empresa = mongoose.model('Empresa', empresaSchema);

export default Empresa;
