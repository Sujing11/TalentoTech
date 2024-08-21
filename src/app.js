const express = require('express')
const mongoose = require('mongoose');
const app = express()
// importar rutas
const productRoutes = require('./routes/product.routes')
const salesRoutes = require("./routes/sale.routes")
require("dotenv").config();

// conectamos a mongoose
mongoose
.connect(process.env.DB_URL)
.then((db) => console.log("DB Connected"))
.catch((err) => console.log(err))


// configuraciones
app.use(express.urlencoded({extended:false}))

// configurar rutas
app.use('/products', productRoutes)
app.use("/sales", salesRoutes)

/* app.get('/', function (req, res) {
  res.send('Hello World')
}) */

app.listen(3000, () => {
  console.log("Server Running");
});