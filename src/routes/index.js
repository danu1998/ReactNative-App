const express = require("express");
const {
  addRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipe");
const router = express.Router();

router.post("/recipe", addRecipe);
router.get("/recipes", getRecipes);
router.get("/recipe/:id", getRecipe);
router.delete("/recipe/:id", deleteRecipe);
router.patch("/recipe/:id", updateRecipe);

module.exports = router;
