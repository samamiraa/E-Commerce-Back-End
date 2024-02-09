//* imports route files
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//* sets endpoints
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

//* exports router
module.exports = router;
