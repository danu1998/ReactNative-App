const { recipe } = require("../../models");

exports.addRecipe = async (req, res) => {
  try {
    const data = {
      tittle: req.body.tittle,
      content: req.body.content,
      author: req.body.author,
      duration: req.body.duration,
    };
    let newRecipe = await recipe.create(data);
    newRecipe = JSON.parse(JSON.stringify(newRecipe));
    res.send({
      status: "Success",
      ...newRecipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Add Recipe Failed",
    });
  }
};
exports.getRecipes = async (req, res) => {
  try {
    let recipeData = await recipe.findAll(req.body);
    recipeData = JSON.parse(JSON.stringify(recipeData));
    res.send({
      status: "Success",
      recipeData,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await recipe.findOne({
      where: { id },
    });
    data = JSON.parse(JSON.stringify(data));
    res.send({
      status: "Success !!!",
      message: "Get All By Id Success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await recipe.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Success !!!",
      message: "Delete Recipe Success",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      tittle: req?.body?.tittle,
      content: req?.body?.content,
      author: req?.body?.author,
      duration: req?.body?.duration,
    };

    await recipe.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "Success !!!",
      message: "Update Data Recipe Success !",
      data: {
        id,
        data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
