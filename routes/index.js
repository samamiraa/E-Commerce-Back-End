//* imports routes
const router = require('express').Router();
const apiRoutes = require('./api');

//* sets endpoint /api + apiRoutes
router.use('/api', apiRoutes);

//* sends wrong wroute when using incorrect route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//* exports router
module.exports = router;