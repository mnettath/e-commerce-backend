const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/:id
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:3001/api/categories/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedCategory);
  } catch {
    res.status(400).json(err);
  }
  // returns [0] and does not update the category

  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
  // delete a category by its `id` value
});
// does not delete item,
// "sqlMessage": "Cannot delete or update a parent row: a foreign key constraint fails (`ecommerce_db`.`product`, CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE)"

module.exports = router;
