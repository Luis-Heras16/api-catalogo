import { model, Schema } from "mongoose";
import mongoose from "mongoose";

// Esquema para el contacto
const vacanteSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  requisitos: [
    {
      type: String,
      required: true,
    },
  ],
});

// Esquema para el contacto
const contactoSchema = new Schema({
  telefono: {
    type: String,
    required: true,
  },
  emails: [
    {
      type: String,
      required: true,
    },
  ],
});

// Esquema principal para la empresa
const empresaSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  id: {
    type: String,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  vacantes: [vacanteSchema],
  contacto: contactoSchema,
  logo: {
    type: String,
    default: "1XCARET.png",
  },
  beneficios: {
    type: [String],
    default: ["Estadía profesional", "Seguro médico", "Capacitación continua"],
  },
});

// Middleware para copiar _id a id antes de guardar
empresaSchema.pre("save", function (next) {
  this.id = this._id.toString();
  next();
});

// Modelo de Mongoose para la empresa
const Empresa = mongoose.model("Empresa", empresaSchema);

export default Empresa;
