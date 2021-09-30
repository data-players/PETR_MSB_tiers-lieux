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
      label: 'Public ciblé',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:Audience',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'audiences',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Public ciblé |||| Publics ciblés',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
