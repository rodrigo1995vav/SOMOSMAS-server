const categoryService = require("../services/category-service");

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
    res.status(201).json({message: "Categoria eliminada exitosamente", deleted: deletedCategory});
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
};

module.exports = {
  getListCategory,
  deleteCategory,
};
