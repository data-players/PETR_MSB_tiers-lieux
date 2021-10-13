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
  translations: {}
};
