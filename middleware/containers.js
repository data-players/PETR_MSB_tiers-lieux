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
    acceptedTypes: ['petr:AccessModality'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/audiences',
    acceptedTypes: ['petr:Audience'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/equipments',
    acceptedTypes: ['petr:Equipment'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/equipment-types',
    acceptedTypes: ['petr:EquipmentType'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/events',
    acceptedTypes: ['pair:Event'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/files'
  },
  {
    path: '/labels',
    acceptedTypes: ['petr:Label'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/legal-status',
    acceptedTypes: ['petr:LegalStatus'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/networks',
    acceptedTypes: ['pair:OrganizationType'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/organization-types',
    acceptedTypes: ['pair:OrganizationType'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/persons',
    acceptedTypes: ['pair:Person'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/rates',
    acceptedTypes: ['petr:Rate'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/resources',
    acceptedTypes: ['pair:Resource'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/sectors',
    acceptedTypes: ['petr:Sector'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/services',
    acceptedTypes: ['petr:Service'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/service-types',
    acceptedTypes: ['petr:ServiceType'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/spaces',
    acceptedTypes: ['petr:Space'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/space-types',
    acceptedTypes: ['petr:SpaceType'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/topics',
    acceptedTypes: ['pair:Topic'],
    newResourcesPermissions: writePermissionsToCreator
  },
];
