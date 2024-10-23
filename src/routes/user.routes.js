const router = require("express").Router();
const usersController = require("../controllers/users.controller");

router.post("/", usersController.create);
router.get("/", usersController.findAll);
router.get("/:id", usersController.findOne);
router.patch("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;