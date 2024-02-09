//* imports Tag model
const { Tag } = require('../models');

//* prepopulated Tag data
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

//* function to bulk create Tag
const seedTags = () => Tag.bulkCreate(tagData);

//*exports data
module.exports = seedTags;
