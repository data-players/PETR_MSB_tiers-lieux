import SpaceEdit from './SpaceEdit';
import SpaceCreate from './SpaceCreate';
import SpaceIcon from '@mui/icons-material/Home';

export default {
  config: {
    icon: SpaceIcon,
    edit: SpaceEdit,
    create: SpaceCreate,
    options: {
      label: 'Espaces'
    },
  },
  dataModel: {
    types: ['petr:Space'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Espace |||| Les espaces',
      fields: {
        'pair:label': 'Libellé',
        'petr:serviceOfferedBy': 'Organisation',
        'pair:description': 'Description',
        'petr:hasRate': 'Tarif',
        'petr:hasSpaceType': `Type d'espace`,
        'petr:capacity': 'Capacité',
        'pair:locationOf': `Lieux de`,
      }
    }
  }
};
