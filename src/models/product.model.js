const mongoose = require("mongoose");

const ImagenesSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
  },
  { _id: false } // Evita la creación de un _id para cada imagen.
);

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String },
  imagenes: [ImagenesSchema],
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("product", ProductSchema);