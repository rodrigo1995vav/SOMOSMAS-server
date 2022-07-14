const { Category } = require("../models");

const listAllCategory = async (page, limit) => {
  const offset = page * limit;
  const { count, rows } = await Category.findAndCountAll({
    attributes: ["name"],
    raw: true,
    offset: offset,
    limit,
  });
  return {
    total_categories: count,
    current_page: page + 1,
    total_pages: Math.ceil(count / limit),
    categories: rows,
  };
};

const deleteCategoryById = async (id) => {
  const deletedCategory = await Category.findOne({ where: { id: id } });
  if (!deletedCategory) {
    return null;
  }
  await deletedCategory.destroy();
  return deletedCategory;
};

module.exports = {
  listAllCategory,
  deleteCategoryById,
};
