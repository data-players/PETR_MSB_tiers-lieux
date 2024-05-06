import ConceptCreate from '../ConceptCreate';
import ConceptEdit from '../ConceptEdit';
import ConceptList from '../ConceptList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: ConceptList,
    create: ConceptCreate,
    edit: ConceptEdit,
    icon: StyleIcon,
    options: {
      label: 'Statut d\'annonce',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:AdStatus',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'adStatus',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Statut annonce |||| Statuts annonce',
      fields: {
        '@type': 'Statut',
        'pair:label': 'Nom',
      }
    }
  }
};
