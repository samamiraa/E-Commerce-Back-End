//* imports category model
const { Category } = require('../models');

//* prepopulated category data
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

//* function to bulk create categories
const seedCategories = () => Category.bulkCreate(categoryData);

//*exports data
module.exports = seedCategories;
