import EquipmentEdit from './EquipmentEdit';
import EquipmentShow from './EquipmentShow';
import EquipmentCreate from './EquipmentCreate';

export default {
  config: {
    show: EquipmentShow,
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
  translations: {}
};
