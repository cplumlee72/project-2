const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Customer } = require('../../models');
// "EG: localhost/api/users/login"
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // "EG: localhost/api/users/data"
  router.get("/data", withAuth , async (req, res) => {
    try {
      const customerData = await Customer.findAll({
        order: [["name", "ASC"]],
      });
  
      const customers = customerData.map((project) =>
        project.get({ plain: true })
      );
  
      res.render("datapage", {
        customers,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  