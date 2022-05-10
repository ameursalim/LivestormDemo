const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { session, company, user, device, show } = require('../models');
const { faker } = require('@faker-js/faker');
const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('session');

// This file contains the logic of every route in Forest Admin for the collection session:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Session
router.post('/session', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Session
router.put('/session/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Session
router.delete('/session/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Sessions
router.get('/session', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Sessions
router.get('/session/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  // Improve peformances disabling pagination: https://docs.forestadmin.com/documentation/reference-guide/performance#disable-pagination-count
  next();
});

// Get a Session
router.get('/session/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Sessions
router.get('/session.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Sessions
router.delete('/session', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

async function getRandomInstance (model) {
  let record = await model.findAll();
  record = faker.helpers.shuffle(record)[0];
  return record 
}

router.post('/actions/add-fake-session', permissionMiddlewareCreator.smartAction(),
  async(req, res) => {
    for (let i = 0; i < 10; i++) {
  
      const randomCompany =   await getRandomInstance(company)
      const randomShow =   await getRandomInstance(show)
      const randomUser = await getRandomInstance(user)
      const randomDevice= await getRandomInstance(device)
    
      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const rndInt = randomIntFromInterval(1, 300)
      
  
      
      session
        .create({
          userIdKey:randomUser.id,
          companyIdKey:randomCompany.id,
          showIdKey:randomShow.id,
          deviceIdKey:randomDevice.id,
          sessionTime:rndInt,
        })
        .then(() => {
      	
          res.send({
            success: 'New session created',
          });
        });
    }  
});
module.exports = router;
