const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { user } = require('../models');
const { faker } = require('@faker-js/faker');
const {company} = require('../models');

faker.locale = 'fr';

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('user');

// This file contains the logic of every route in Forest Admin for the collection user:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a User
router.post('/user', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a User
router.put('/user/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a User
router.delete('/user/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Users
router.get('/user', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Users
router.get('/user/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  // Improve peformances disabling pagination: https://docs.forestadmin.com/documentation/reference-guide/performance#disable-pagination-count
  next();
});

// Get a User
router.get('/user/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Users
router.get('/user.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Users
router.delete('/user', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

// async function getRandomInstance (company) {
//    await company.findAll(
//     {
//       attributes:["id"]
//     }
//   );

// }
async function getRandomInstance (model) {
  let record = await model.findAll();
  record = faker.helpers.shuffle(record)[0];
  return record 
}

router.post('/actions/add-fake-user', permissionMiddlewareCreator.smartAction(),
  async(req, res) => {
    for (let i = 0; i < 10; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const emailDomains = ["gmail.com", "yahoo.fr", "example.com", "hotmail.com"]
      const randomEmailDomain= emailDomains[Math.floor(Math.random() * emailDomains.length)];
      const startAt = new Date(faker.date.recent());
      const rand = Boolean(Math.round(Math.random()));
      const randomCompany =   await getRandomInstance(company)
    

  
      
      user
        .create({
          userFirstName: firstName,
          userLastName: lastName,
          email: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), randomEmailDomain),
          joinedDate:startAt,
          isActive:rand,
          companyIdKey:randomCompany.id,
        })
        .then(() => {
      	
          res.send({
            success: 'New user created',
          });
        });
    }  
});

module.exports = router;
