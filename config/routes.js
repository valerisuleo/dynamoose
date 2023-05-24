const router = require("express").Router();
const moviesController = require("../controllers/movies");

router
    .route("/movies")
    .get(moviesController.index)
    .post(moviesController.create);

router
    .route("/movies/:id")
    .get(moviesController.show)
    .put(moviesController.update)
    .delete(moviesController.delete);

// Catch all 404 response
router.all("*", (req, res) => res.status(404).send("Not Found"));

module.exports = router;
