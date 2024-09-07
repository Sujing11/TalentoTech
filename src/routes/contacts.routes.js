const router = require("express").Router();
const contactsController = require("../controllers/contacts.controller");

router.post("/", contactsController.create);
router.get("/", contactsController.findAll);
router.get("/:id", contactsController.findOne);
router.patch("/:id", contactsController.update);
router.delete("/:id", contactsController.delete);

module.exports = router;