import Admin from "../models/admin.model.js";

const authController = {};

authController.login = async (req, res) => {
  const { matricula, contraseña } = req.body;

  try {
    // Buscar al admin por matrícula
    const admin = await Admin.findOne({ matricula });

    if (!admin) {
      return res.status(404).json({
        message: "Admin no encontrado",
      });
    }

    // Comparar directamente la contraseña proporcionada con la almacenada
    if (contraseña !== admin.contraseña) {
      return res.status(400).json({
        message: "Contraseña incorrecta",
      });
    }

    // Si la matrícula y la contraseña son correctas, responder con éxito
    res.json({
      message: "Inicio de sesión exitoso",
      admin: {
        _id: admin._id,
        nombre: admin.nombre,
        matricula: admin.matricula,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default authController;
