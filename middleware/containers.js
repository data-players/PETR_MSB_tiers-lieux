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
    path: '/audiences',
    acceptedTypes: ['petr:Audience']
  },
  {
    path: '/equipments',
    acceptedTypes: ['petr:Equipment']
  },
  {
    path: '/equipment-access-modalities',
    acceptedTypes: ['petr:EquipmentAccessModality']
  },
  {
    path: '/equipment-rates',
    acceptedTypes: ['petr:EquipmentRate']
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
    path: '/sectors',
    acceptedTypes: ['petr:Sector']
  },
  {
    path: '/spaces',
    acceptedTypes: ['petr:Space']
  },

  /*
  {
    path: '/files'
  }
  */
];
