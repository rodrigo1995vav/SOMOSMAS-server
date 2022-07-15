const categoryService = require("../services/category-service");
const { validationResult } = require("express-validator");

const getListCategory = async (req, res) => {
  try {
    const { query } = req;
    const categories = await categoryService.getAllCategories(query);
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = Number(req.params.id);

  try {
    const deletedCategory = await categoryService.deleteCategoryById(
      categoryId
    );
    res
      .status(201)
      .json({
        message: "Categoria eliminada exitosamente",
        deleted: deletedCategory,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createCategory = async (req, res) => {
  const { body } = req;

  const errorsRegister = validationResult(req);

  try {
    if (!errorsRegister.isEmpty()) {
      res.status(406).json(errorsRegister.mapped());
    } else {
      const newCategory = await categoryService.createCategory({ ...body });

      res.json({ categoryCreated: newCategory });
    }
  } catch (err) {
    res.status(400);
    res.json({ error: err.message });
  }
};

module.exports = {
  createCategory,
  getListCategory,
  deleteCategory,
};
