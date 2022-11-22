const router = require('express').Router();
const { User, Customer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const customerData = await Customer.findAll({
        order: [['name', 'ASC']],
      });
  
      const customers = customerData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        customers,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  
module.exports = router;