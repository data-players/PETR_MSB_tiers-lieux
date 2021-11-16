const CONFIG = require('./config');

const writePermissionsToCreator = creatorUri => {
  console.log('---------------------------- writePermissionsToCreator',CONFIG.HOME_URL+'_groups/superadmins');
  return {
    anon : {
      read: true
    },
    anyUser: {
      read: true,
    },
    user: {
      uri: creatorUri,
      read: true,
      write: true,
      control : true
    },
    group: {
      uri : CONFIG.HOME_URL+'_groups/superadmins',
      read: true,
      write: true,
      control : true
    }
  }
};

module.exports = [
    {
      path: '/',
    },
  {
    path: '/access-modalities',
    acceptedTypes: ['petr:AccessModality']
  },
  {
    path: '/audiences',
    acceptedTypes: ['petr:Audience']
  },
  {
    path: '/equipments',
    acceptedTypes: ['petr:Equipment']
  },
  {
    path: '/equipment-types',
    acceptedTypes: ['petr:EquipmentType']
  },
  {
    path: '/files'
  },
  {
    path: '/labels',
    acceptedTypes: ['petr:Label']
  },
  {
    path: '/legal-status',
    acceptedTypes: ['petr:LegalStatus']
  },
  {
    path: '/networks',
    acceptedTypes: ['pair:OrganizationType']
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/organization-types',
    acceptedTypes: ['pair:OrganizationType']
  },
  {
    path: '/persons',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/rates',
    acceptedTypes: ['petr:Rate']
  },
  {
    path: '/resources',
    acceptedTypes: ['pair:Resource'],
  },
  {
    path: '/sectors',
    acceptedTypes: ['petr:Sector']
  },
  {
    path: '/services',
    acceptedTypes: ['petr:Service']
  },
  {
    path: '/spaces',
    acceptedTypes: ['petr:Space']
  },
  {
    path: '/space-types',
    acceptedTypes: ['petr:SpaceType']
  },
];
