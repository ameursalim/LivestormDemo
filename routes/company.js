const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { company } = require('../models');
const { faker } = require('@faker-js/faker');
// const { Company } = require('@faker-js/faker/company');
// const { DESCRIBE } = require('sequelize/types/lib/query-types');

faker.locale = 'fr';
const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('company');

// This file contains the logic of every route in Forest Admin for the collection company:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Company
router.post('/company', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Company
router.put('/company/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Company
router.delete('/company/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Companies
router.get('/company', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Companies
router.get('/company/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  // Improve peformances disabling pagination: https://docs.forestadmin.com/documentation/reference-guide/performance#disable-pagination-count
  next();
});

// Get a Company
router.get('/company/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Companies
router.get('/company.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Companies
router.delete('/company', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

router.post('/actions/add-fake-company', permissionMiddlewareCreator.smartAction(),
  (req, res) => {
    for (let i = 0; i < 10; i++) {
  const Company= faker.company.companyName();
   const adress=faker.address.city();
   const startAt = new Date(faker.date.recent());
  
 
      company
        .create({
          companyName: Company,
          companyAdress: adress,
          createdAt:startAt,
        
        })
        .then(() => {
      	
          res.send({
            success: 'New company created',
          });
        });
    }  
});


router.post('/actions/add-fake-company',  permissionMiddlewareCreator.smartAction(), (req, res) => {
  for ( let i = 0; i< 10< 10; i++) {
    const company= faker.company.companyName();
    const adress= faker.adress.companyAdress();
    const startAt= new Date(faker.daterecent()); 


    company.create({
      companyName:Company,
      companyAdress:adress,
      createdAt:startAt,

    })
    .then(() => {
      res.send({
        success:"well done the company have been created "
      })
    })
  }

}) 



module.exports = router;
