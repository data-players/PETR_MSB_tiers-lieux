export default {
  config: {},
  dataModel: {
    types: ['petr:Service'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'services',
    slugField: ['pair:label'],
    forceArray: ['petr:serviceOffers', 'petr:serviceOfferedBy']
  },
  translations: {}
};
