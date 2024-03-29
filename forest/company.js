const { collection } = require('forest-express-sequelize');

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('company', {
  actions: [
    {
      name: 'Add fake company',
      type: 'global',
    },
    { 
      name: 'Mark as Live',
      type: 'bulk',
    },
  //  {name:'Niveau tarifaire',
  //   field: 'Niveau tarifaire',
  //   type: 'bulk',
  //   enums:['primaire','collège','lycée','supérieur','boost'],
  // },

  ],
  fields: [],
  segments: [],
  
});
