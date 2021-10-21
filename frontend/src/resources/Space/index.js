import SpaceEdit from './SpaceEdit';
import SpaceCreate from './SpaceCreate';

export default {
  config: {
    edit: SpaceEdit,
    create: SpaceCreate,
    options: {
      label: 'Espaces'
    },
  },
  dataModel: {
    types: ['petr:Space'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'spaces',
    slugField: ['pair:label'],
    forceArray : ['pair:locationOf']
  },
  translations: {
    fr: {
      name: 'Espace |||| Les espaces',
      fields: {
        'pair:label': 'Libellé',
        'pair:description': 'Description',
      }
    }
  }
};
