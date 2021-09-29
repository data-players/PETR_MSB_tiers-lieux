export default {
  config: {},
  dataModel: {
    types: ['pair:Resource'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: ['pair:label'],
    forceArray: ['petr:equipmentOffers', 'petr:equipmentOfferedBy']
  },
  translations: {}
};
