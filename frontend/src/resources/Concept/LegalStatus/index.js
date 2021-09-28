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
      label: 'Nature juridique',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:LegalStatus',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'legal-status',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Nature juridique |||| Natures juridiques',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
