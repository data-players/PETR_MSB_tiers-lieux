import ConceptCreate from '../../ConceptCreate';
import ConceptEdit from '../../ConceptEdit';
import ConceptList from '../../ConceptList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: ConceptList,
    create: ConceptCreate,
    edit: ConceptEdit,
    icon: StyleIcon,
    options: {
      label: 'Type d\'espace',
      parent: 'SpaceConcept'
    }
  },
  dataModel: {
    types: [
      'petr:SpaceType',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'space-types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Type d\'espace |||| Types d\'espace',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
