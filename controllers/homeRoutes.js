const router = require("express").Router();
const { User, Customer } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/users/data");
    return;
  }
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/users/data");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/newcustomer", (req, res) => {
  if (req.session.logged_in) {
    res.render("newcustomer");
    return;
  }

  res.render("login");
});
module.exports = router;
