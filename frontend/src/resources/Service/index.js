import ServiceEdit from './ServiceEdit';
import ServiceCreate from './ServiceCreate';
import ServiceIcon from '@mui/icons-material/Face';

export default {
  config: {
    icon: ServiceIcon,
    edit: ServiceEdit,
    create: ServiceCreate,
    options: {
      label: 'Services'
    },
  },
  dataModel: {
    types: ['petr:Service'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Service |||| Les services',
      fields: {
        'petr:serviceOfferedBy': 'Organisation',
        'pair:label': 'Libellé',
        'petr:hasRate': 'Tarif',
        'petr:hasLabel': 'Labels',
        'petr:hasAudience': 'Public',
        'petr:hasServiceType': `Type de service`,
        'petr:itinerant': 'Itinérant',
        'petr:itinerantDetails': `Détail d'itinérance`,

      }
    }
  }
};
