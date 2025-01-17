const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

// importar rutas
const productRoutes = require('./routes/product.routes')
const salesRoutes = require("./routes/sale.routes")
const contactRoute = require("./routes/contacts.routes");
const userRoute = require("./routes/user.routes");
require("dotenv").config();

// conectamos a mongoose
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("DB Connected"))
  .catch((err) => console.log(err));

// configuraciones
app.use(express.json());

// configurar rutas
app.get("/", function (req, res) {
  res.send("Hello from vercel");
});
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/contacts", contactRoute);
app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("Server Running");
});