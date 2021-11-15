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
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'services',
    slugField: ['pair:label'],
  },
  translations: {
    fr: {
      name: 'Service |||| Les services',
      fields: {
        'petr:serviceOfferedBy': 'Organisation',
        'pair:label': 'Libellé',
        'petr:hasRate': 'Tarif',
        'petr:hasLabel': 'Labels',
        'petr:hasAudience': 'Audiance',
        'petr:itinerant': 'Itinérant',
        'petr:itinerantDetails': `Détail d'itinérance`,

      }
    }
  }
};
