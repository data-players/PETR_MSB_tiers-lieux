export default {
  config: {},
  dataModel: {
    types: ['petr:Space'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'spaces',
    slugField: ['pair:label'],
    forceArray: ['petr:spaceOffers', 'petr:spaceOfferedBy']
  },
  translations: {}
};
