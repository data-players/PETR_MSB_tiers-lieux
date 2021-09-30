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
      label: 'Réseau',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:Network',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'networks',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Réseau |||| Réseaux',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};