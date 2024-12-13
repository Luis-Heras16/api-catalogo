import mongoose from "./src/database.js";
import Empresa from "./src/models/empresas.model.js";

async function updateEmpresasId() {
  try {
    const empresas = await Empresa.find();
    for (const empresa of empresas) {
      empresa.id = empresa._id.toString();
      await empresa.save();
    }

    console.log(
      "Todos los documentos han sido actualizados con el campo id igual a _id."
    );
  } catch (error) {
    console.error("Error actualizando los documentos:", error);
  } finally {
    mongoose.connection.close();
  }
}

updateEmpresasId();
