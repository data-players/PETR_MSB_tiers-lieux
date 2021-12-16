const dataServers = {
  av: {
    name: 'Assemblée Virtuelle',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      av: {
        'foaf:Person': ['/persons'],
        'pair:Organization': ['/organizations'],
        'pair:OrganizationType': ['/organization-types'],
        'petr:AccessModality': ['/access-modalities'],
        'petr:Audience': ['/audiences'],
        'petr:Equipment': ['/equipments'],
        'petr:EquipmentType': ['/equipment-types'],
        'petr:Label': ['/labels'],
        'petr:LegalStatus': ['/legal-status'],
        'petr:Network': ['/networks'],
        'petr:Rate': ['/rates'],
        'petr:Sector': ['/sectors'],
        'petr:Service': ['/services'],
        'petr:Space': ['/spaces'],
        'petr:SpaceType': ['/space-types']
      }
    },
    uploadsContainer: '/files'
  }
};

export default dataServers;
