export default {
  config: {},
  dataModel: {
    types: ['petr:Equipment'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'equipments',
    slugField: ['pair:label'],
    forceArray: ['petr:equipmentOffers', 'petr:equipmentOfferedBy']
  },
  translations: {}
};
