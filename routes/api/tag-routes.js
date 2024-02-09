const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//* The `/api/tags` endpoint

router.get('/', async (req, res) => {
  //* finds all tags
  //* includes its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}],
    });
      res.status(200).json(allTags);
  } catch (err) {
      res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  //* finds a single tag by its `id`
  //* includes its associated Product data
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!oneTag) {
      res.status(404).json({ message: 'Tag does not exist!' });
      return;
    } else {
    res.status(200).json(oneTag);
    }
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  //* creates a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  //* updates a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )
    if (!updateTag) {
      res.status(404).json({ message: 'Tag does not exist!' });
      return;
    } else {
    res.status(200).json(updateTag);
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  //* deletes on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deleteTag) {
      res.status(404).json({ message: 'Tag does not exist!' });
      return;
    } else {
    res.status(200).json(deleteTag);
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

//* exports router
module.exports = router;
