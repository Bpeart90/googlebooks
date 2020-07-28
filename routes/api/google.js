const router = require("express").Router();
const googleController = require("../../controller/googleController");

// Matches with "/api/google"
router
    .route("/")
    .get(googleController.findAll);

module.exports = router;