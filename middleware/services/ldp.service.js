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
          'petr:serviceOffers',
          'petr:spaceOffers',
        ],
        disassembly: [{
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
      },
      {
        path: '/services',
        acceptedTypes: ['petr:Service'],
      },
      {
        path: '/spaces',
        acceptedTypes: ['petr:Space'],
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
