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
  },
  /*
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  */
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
    path: '/rates',
    acceptedTypes: ['petr:Rate']
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


  /*
  {
    path: '/files'
  }
  */
];
