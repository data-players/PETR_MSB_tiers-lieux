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
      label: 'Modalité d\'accès',
      parent: 'EquipmentConcept'
    }
  },
  dataModel: {
    types: [
      'petr:EquipmentAccessModality',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'equipment-access-modalities',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Modalité d\'accès |||| Modalités d\'accès',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
