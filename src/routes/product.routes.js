const router = require("express").Router();
const productsController = require("../controllers/products.controller");

router.post("/", productsController.create);
router.get("/", productsController.findAll);
router.get("/:id", productsController.findOne);
router.patch("/:id", productsController.update);
router.delete("/:id", productsController.delete);

module.exports = router;