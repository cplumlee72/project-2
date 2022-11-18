const sequelize = require('../config/connection');
const { User, Customer } = require('../models');

const userData = require('./userData.json');
const customerData = require('./customerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Customer.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
