import EquipmentCreate from './EquipmentCreate';
import EquipmentEdit from './EquipmentEdit';
import EquipmentList from './EquipmentList';
import EquipmentShow from './EquipmentShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: EquipmentList,
        show: EquipmentShow,
        create: EquipmentCreate,
        edit: EquipmentEdit,
        icon: HomeIcon,
        options: {
          label: 'Equipements',
          parent: 'Resource'
        },
    },
    dataModel: {
        types: ['petr:Equipment'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'Equipments',
        slugField: 'pair:label',
      },
      translations: {
        fr: {
          name: 'Equipement |||| Les équipements',
          fields: {
            'pair:label': 'Nom',
            'pair:offeredBy': 'Proposé par',
            'pair:description': 'Description',
            'petr:model': 'Modèle',
            'petr:amount':'Quantité',
            'petr:rate':'Tarif',
            'petr:availablity':'Disponibilité',
            'petr:accessModality':'Modalité d\'accès',
          }
        }
      }
};