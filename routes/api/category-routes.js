//* imports models and router
const router = require('express').Router();
const { Category, Product } = require('../../models');

//* The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //*  finds all categories
  //*  includes its associated Products
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}],
    });
      res.status(200).json(allCategories);
  } catch (err) {
      res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  //*  finds one category by its `id` value
  //*  includes its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!oneCategory) {
      res.status(404).json({ message: 'Category does not exist!' });
      return;
    } else {
    res.status(200).json(oneCategory);
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  //*  creates a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  //*  updates a category by its `id` value
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )
    if (!updateCategory) {
      res.status(404).json({ message: 'Category does not exist!' });
      return;
    } else {
    res.status(200).json(updateCategory);
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  //*  deletes a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deleteCategory) {
      res.status(404).json({ message: 'Category does not exist!' });
      return;
    } else {
    res.status(200).json(deleteCategory);
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

//* exports router
module.exports = router;
