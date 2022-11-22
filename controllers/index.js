const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// base directory "eg: localhost"
router.use('/', homeRoutes);
// "eg: localhost/api"
router.use('/api', apiRoutes);

module.exports = router;
