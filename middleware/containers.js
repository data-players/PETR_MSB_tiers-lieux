const writePermissionsToCreator = creatorUri => ({
  anon : {
    read: true
  },
  anyUser: {
    read: true
  },
  user: {
    uri: creatorUri,
    read: true,
    write: true
  }
});

module.exports = [
    {
      path: '/',
    },
  {
    path: '/persons',
    acceptedTypes: ['pair:Person']
  },
  /*
  {
    path: '/places',
    acceptedTypes: ['pair:Place']
  },
  */
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    newResourcesPermissions: writePermissionsToCreator
  },
  /*
  {
    path: '/equipments',
    acceptedTypes: ['petr:Equipment']
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  */
  {
    path: '/audiences',
    acceptedTypes: ['petr:Audience']
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
    path: '/organization-types',
    acceptedTypes: ['pair:OrganizationType']
  },
  {
    path: '/resources',
    acceptedTypes: ['pair:Resource'],
    newResourcesPermissions: writePermissionsToCreator
  },
  {
    path: '/sectors',
    acceptedTypes: ['petr:Sector']
  },
  /*
  {
    path: '/files'
  }
  */
];
