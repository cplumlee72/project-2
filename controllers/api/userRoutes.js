const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Customer } = require("../../models");
// "EG: localhost/api/users/login"
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// "EG: localhost/api/users/data"
router.get("/data", async (req, res) => {
  try {
    const customerData = await Customer.findAll({
      order: [["name", "ASC"]],
    });

    const customers = customerData.map((project) =>
      project.get({ plain: true })
    );

    // res.json(customers);
    res.render("datapage", {
      customers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/data/:id", async (req, res) => {
  try {
    const customerData = await Customer.findAll({
      where: { id: req.params.id },
    });

    const customers = customerData.map((project) =>
      project.get({ plain: true })
    );

    // res.json(customers);
    res.render("singleCust", {
      customers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Customer
router.put("/data/:id", async (req, res) => {
  try {
    const customerData = await Customer.update(
      {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        cost: req.body.cost,
      },
      { where: { id: req.params.id } }
    );

    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new customer
router.post("/data/newcustomer", async (req, res) => {
  try {
    const customerData = await Customer.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      cost: req.body.cost,
    });
    console.log(customerData);
    res.status(200).json(res.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new User

// Delete a customer
router.delete("/data/:id", async (req, res) => {
  try {
    const customerData = await Customer.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json(res.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
