const controller = require("../controller/dev");
const router = require("express").Router();

router.get("/version", controller.version);

module.exports = router;
