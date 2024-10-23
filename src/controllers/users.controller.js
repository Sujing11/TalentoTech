const User = require("../models/user.model");

const usersController = {
    
    create: async function (req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(200).json("Usuario creado exitosamente");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async function (req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findOne: async function (req, res) {
        const id = req.params.id;

        try {
            const user = await User.findById(id);
            return res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async function (req, res) {
        const id = req.params.id;

        try {
            const updatedUser = await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
            return res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async function (req, res) {
        const id = req.params.id;

        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
              return res.status(404).json({ message: `Usuario con id: ${id} no encontrado` });
            }
            res.status(200).json({ message: "Usuario eliminado exitosamente", deletedUser });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    }
}

module.exports = usersController;