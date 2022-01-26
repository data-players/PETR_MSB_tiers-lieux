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
      label: 'Tarif',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:Rate',
    ],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Tarif |||| Tarifs',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
