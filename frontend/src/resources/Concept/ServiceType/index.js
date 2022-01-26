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
      label: 'Type de service',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:ServiceType',
    ],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Type de service |||| Types de service',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
