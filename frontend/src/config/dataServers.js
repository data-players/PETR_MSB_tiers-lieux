const dataServers = {
  av: {
    name: 'Etablir',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      av: {
        'pair:Event': ['/events'],
        'pair:Organization': ['/organizations'],
        'pair:OrganizationType': ['/organization-types'],
        // 'pair:Person': ['/persons'],
        'pair:Topic': ['/topics'],
        'pair:Skill': ['/skills'],
        'petr:AccessModality': ['/access-modalities'],
        'petr:Audience': ['/audiences'],
        'petr:Equipment': ['/equipments'],
        'petr:EquipmentType': ['/equipment-types'],
        'petr:Label': ['/labels'],
        'petr:LegalStatus': ['/legal-status'],
        'petr:AdStatus': ['/ad-status'],
        'petr:Network': ['/networks'],
        'petr:Rate': ['/rates'],
        'petr:Sector': ['/sectors'],
        'petr:Service': ['/services'],
        'petr:ServiceType': ['/service-types'],
        'petr:Space': ['/spaces'],
        'petr:SpaceType': ['/space-types'],
        'petr:Ad': ['/ads']
      }
    },
    uploadsContainer: '/files'
  }
};

export default dataServers;
