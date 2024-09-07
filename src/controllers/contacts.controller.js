const Contact = require("../models/contact.model");

const contactsController = {
    
    create: async function (req, res) {
        try {
            const contact = new Contact(req.body);
            await contact.save();
            res.status(200).json("contacto creado exitosamente");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async function (req, res) {
        try {
            const contacts = await Contact.find();
            res.status(200).json(contacts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findOne: async function (req, res) {
        const id = req.params.id;

        try {
            const contact = await Contact.findById(id);
            return res.status(201).json(contact);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async function (req, res) {
        const id = req.params.id;

        try {
            const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
            return res.status(200).json(updatedContact);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async function (req, res) {
        const id = req.params.id;

        try {
            const deletedContact = await Contact.findByIdAndDelete(id);
            if (!deletedContact) {
              return res.status(404).json({ message: `contacto con id: ${id} no encontrado` });
            }
            res.status(200).json({ message: "contacto eliminado exitosamente", deletedContact });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    }
}

module.exports = contactsController;