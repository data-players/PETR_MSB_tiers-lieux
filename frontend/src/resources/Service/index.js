import SpaceEdit from './ServiceEdit';
import SpaceCreate from './ServiceCreate';

export default {
  config: {
    edit: SpaceEdit,
    create: SpaceCreate,
    options: {
      label: 'Services'
    },
  },
  dataModel: {
    types: ['petr:Service'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Service |||| Les services',
      fields: {
        'petr:serviceOfferedBy': 'Organisation',
        'pair:label': 'Libellé',
        'petr:hasRate': 'Tarif',
        'petr:hasLabel': 'Labels',
        'petr:hasAudience': 'Public',
        'petr:hasServiceType': `Type de service`,
        'petr:itinerant': 'Itinérant',
        'petr:itinerantDetails': `Détail d'itinérance`,

      }
    }
  }
};
