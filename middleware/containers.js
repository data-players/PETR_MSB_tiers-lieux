module.exports = [
  {
    path: '/',
  },
  {
    path: '/persons',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: [
      'pair:hasLocation/pair:hasPostalAddress',
      'petr:equipmentOffers',
      'petr:openingTimesDay1',
      'petr:openingTimesDay2/petr:startingTime','petr:openingTimesDay2/petr:source="petr:endingTime" ',
      'petr:openingTimesDay3',
      'petr:openingTimesDay4',
      'petr:openingTimesDay5',
      'petr:openingTimesDay6',
      'petr:openingTimesDay7',
    ],
    disassembly: [{ path: 'petr:equipmentOffers', container:  process.env.SEMAPPS_HOME_URL + 'resources' }]
  },
  {
    path: '/resources',
    acceptedTypes: ['pair:Resource'],
    dereference: ['petr:equipmentOfferedBy'],
    disassembly: [{ path: 'petr:equipmentOfferedBy', container:  process.env.SEMAPPS_HOME_URL + 'organizations' }]
  },
//// CONCEPTS ////
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
    path: '/sectors',
    acceptedTypes: ['petr:Sector']
  },
];
