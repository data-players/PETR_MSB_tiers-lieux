const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
const urlJoin = require('url-join');
const ontologies = require('../ontologies');
const CONFIG = require('../config');
const containers = require('../containers');

module.exports = {
  mixins: [LdpService, DocumentTaggerMixin],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies,
    containers: [
      {
        path: '/organizations',
        acceptedTypes: ['pair:Organization'],
        dereference: [
          'pair:hasLocation/pair:hasPostalAddress',
<<<<<<< HEAD
=======
          'petr:equipmentOffers',
>>>>>>> 5a32cad47021f3e1c4b61f44b5300809558858b9
          'petr:serviceOffers',
          'petr:spaceOffers',
        ],
        disassembly: [{
<<<<<<< HEAD
=======
            path: 'petr:equipmentOffers',
            container:  process.env.SEMAPPS_HOME_URL + 'equipments'
          },{
>>>>>>> 5a32cad47021f3e1c4b61f44b5300809558858b9
            path: 'petr:spaceOffers',
            container:  process.env.SEMAPPS_HOME_URL + 'spaces'
          },{
            path: 'petr:serviceOffers',
            container:  process.env.SEMAPPS_HOME_URL + 'services'
          },
        ]
      },
      {
        path: '/equipments',
        acceptedTypes: ['petr:Equipment'],
<<<<<<< HEAD
=======
        dereference: ['petr:equipmentOfferedBy']
>>>>>>> 5a32cad47021f3e1c4b61f44b5300809558858b9
      },
      {
        path: '/services',
        acceptedTypes: ['petr:Service'],
<<<<<<< HEAD
=======
        dereference: ['petr:serviceOfferedBy']
>>>>>>> 5a32cad47021f3e1c4b61f44b5300809558858b9
      },
      {
        path: '/spaces',
        acceptedTypes: ['petr:Space'],
<<<<<<< HEAD
=======
        dereference: ['petr:spaceOfferedBy']
>>>>>>> 5a32cad47021f3e1c4b61f44b5300809558858b9
      },
      '/',
      '/audiences',
      '/access-modalities',
      '/equipments',
      '/equipment-types',
      '/labels',
      '/legal-status',
      '/networks',
      '/organizations',
      '/organization-types',
      '/persons',
      '/rates',
      '/sectors',
      '/services',
      '/spaces',
      '/space-types',
    ],
    defaultContainerOptions: {
      jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json'),
      allowAnonymousEdit: true,
      allowAnonymousDelete: true
    }
  }
};
