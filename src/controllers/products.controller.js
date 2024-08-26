const Product = require("../models/product.model");

const productsController = {
    
    create: async function (req, res) {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(200).json("Producto creado exitosamente");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findAll: async function (req, res) {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    findOne: async function (req, res) {
        const id = req.params.id;

        try {
            const product = await Product.findById(id);
            return res.status(201).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async function (req, res) {
        const id = req.params.id;

        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
            return res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async function (req, res) {
        const id = req.params.id;

        try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
              return res.status(404).json({ message: `Producto con id: ${id} no encontrado` });
            }
            res.status(200).json({ message: "Producto eliminado exitosamente", deletedProduct });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    }
}

module.exports = productsController;