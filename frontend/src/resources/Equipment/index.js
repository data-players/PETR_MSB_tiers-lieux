import EquipmentEdit from './EquipmentEdit';
import EquipmentCreate from './EquipmentCreate';

export default {
  config: {
    edit: EquipmentEdit,
    create: EquipmentCreate,
    options: {
      label: 'Equipements'
    },
  },
  dataModel: {
    types: ['petr:Equipment'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'equipments',
    slugField: ['pair:label'],
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
