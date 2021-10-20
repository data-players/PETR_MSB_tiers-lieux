// import PersonCreate from "./PersonCreate";
import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
// import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
//    show: PersonShow,
//    create: PersonCreate,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes'
    }
  },
  dataModel: {
    types: ['foaf:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'persons',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: ['pair:label']
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:label': 'Nom complet',
        'pair:description': 'Description',
      }
    }
  }
};