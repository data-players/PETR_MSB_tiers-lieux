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
      label: 'Thème',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'pair:Topic',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'topic',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Thème |||| Thèmes',
      fields: {
        '@type': 'Thème',
        'pair:label': 'Nom',
      }
    }
  }
};
