const express = require("express");
const validateLoginDto = require("../middlewares/validateLoginDto")
const userController = require("../controllers/userController")
const userRouter = express.Router();

// obtener los datos de un usuario por id con token
userRouter.get("/:id", userController.getUser);

// obtener los datos de todas los usuarios
userRouter.get("/", userController.getUsersList);

// registro de un nuevo usuario
userRouter.post("/", userController.addUser);

// login de un nuevo usuario
userRouter.post("/login", validateLoginDto, userController.login);
// userRouter.post("/uploadImage", validateLoginDto, userController.uploadImage);
// userRouter.post("/:id/uploadImage", validateLoginDto, userController.uploadImage);

// borrar un nuevo usuario por id sin token
userRouter.delete("/:id", userController.deleteUser);

// actualizar un usuario por id con token
userRouter.patch("/:id", userController.updateUser);

// actualizar un usuario por id con token
userRouter.put("/:id", userController.updateUser);

module.exports = userRouter;