const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/users");

router.delete("/:id", controller.userDelete);
router.get("/:id", controller.userIndex);
router.post("/:id", controller.userUpdate);
router.get("/", controller.list);
router.post("/", controller.register);

module.exports = router;
