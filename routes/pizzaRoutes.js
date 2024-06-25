const express = require("express");

const tourController = require("../controllers/pizzaController.js");

const router = express.Router();

router.param("id", tourController.checkID);

router
  .route("/")
  .get(tourController.getAllPizzas)
  .post(tourController.createPizza);
router
  .route("/:id")
  .get(tourController.getPizza)
  .patch(tourController.updatePizza)
  .delete(tourController.deletePizza);

module.exports = router;
