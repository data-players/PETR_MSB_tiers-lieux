import ConceptCreate from './ConceptCreate';
import ConceptEdit from './ConceptEdit';
import ConceptList from './ConceptList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: ConceptList,
    create: ConceptCreate,
    edit: ConceptEdit,
    icon: StyleIcon,
    options: {
      label: 'Types d\'organisation',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'pair:OrganizationType',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organization-types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Type d\'organisation |||| Types d\'organisation',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
