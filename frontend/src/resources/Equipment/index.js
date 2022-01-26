import EquipmentEdit from './EquipmentEdit';
import EquipmentCreate from './EquipmentCreate';
import EquipmentIcon from '@mui/icons-material/Construction';

export default {
  config: {
    icon: EquipmentIcon,
    edit: EquipmentEdit,
    create: EquipmentCreate,
    options: {
      label: 'Equipements'
    },
  },
  dataModel: {
    types: ['petr:Equipment'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Equipement |||| Les équipements',
      fields: {
        'petr:serviceOfferedBy': 'Organisation',
        'pair:label': 'Libellé',
        'pair:description': 'Description',
        'petr:hasEquipmentType': `Type d'équipement`,
        'petr:model': 'Modèle',
        'petr:amount': 'Quantité',
        'petr:hasRate': 'Tarif',
        'petr:hasAccessModality': `Modalités d'accès`,
        'pair:hasLocation' : 'Lieux'
      }
    }
  }
};
