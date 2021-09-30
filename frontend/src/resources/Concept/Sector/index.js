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
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'sectors',
    slugField: 'pair:label'
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
