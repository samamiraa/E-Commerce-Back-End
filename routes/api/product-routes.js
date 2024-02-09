const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

//* The `/api/products` endpoint

//* gets all products
router.get('/', async (req, res) => {
  //* finds all products
  //* includes its associated Category and Tag data
  try {
    const findAllProducts = await Product.findAll({
      include: [{ model: Category}, { model: Tag }],
    })
    res.status(200).json(findAllProducts);
  } catch (err) {
    res.status(500).json(err);
  };
});

//* gets one product
router.get('/:id', async (req, res) => {
  //* finds a single product by its `id`
  //* includes its associated Category and Tag data
  try {
    const findOneProduct = await Product.findByPk(req.params.id, {
      include: [{ model: Category}, { model: Tag }],
    })
    if (!findOneProduct) {
      res.status(404).json({ message: 'Product does not exist!' });
      return;
    } else {
    res.status(200).json(findOneProduct);
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

//* creates new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      //* if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      //* if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//* updates product
router.put('/:id', (req, res) => {
  //* updates product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

            //* figures out which ones to remove
          const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
                  //* run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      //* console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  //* deletes one product by its `id` value
  try {
    const deleteProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!deleteProduct) {
      res.status(404).json({ message: 'Product does not exist!' });
      return;
    } else {
    res.status(200).json(deleteProduct);
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

//* exports router
module.exports = router;
