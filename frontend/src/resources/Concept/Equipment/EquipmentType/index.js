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
      label: 'Type d\'équipement',
      parent: 'EquipmentConcept'
    }
  },
  dataModel: {
    types: [
      'petr:EquipmentType',
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'equipment-types',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Type d\'équipement |||| Types d\'équipement',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
