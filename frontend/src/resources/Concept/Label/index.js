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
      label: 'Label',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:Label',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'labels',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Label |||| Labels',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
