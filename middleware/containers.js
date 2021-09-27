module.exports = [
    {
      path: '/',
    },
  {
    path: '/persons',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/places',
    acceptedTypes: ['pair:Place']
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
  },
  {
    path: '/equipments',
    acceptedTypes: ['petr:Equipment']
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/organization-types',
    acceptedTypes: ['pair:OrganizationType']
  },
  {
    path: '/files'
  }
];
