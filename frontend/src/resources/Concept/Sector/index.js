import ConceptList from '../ConceptList';
import StyleIcon from '@material-ui/icons/Style';

export default {
  config: {
    list: ConceptList,
    icon: StyleIcon,
    options: {
      label: 'Secteur',
      parent: 'Concept'
    }
  },
  dataModel: {
    types: [
      'petr:Sector',
    ],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Secteur |||| Secteurs',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
