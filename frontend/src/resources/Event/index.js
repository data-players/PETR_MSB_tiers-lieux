import EventCreate from './EventCreate';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
import EventIcon from '@material-ui/icons/Event';

export default {
  config:{
    list: EventList,
    show: EventShow,
    create: EventCreate,
    edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Événements'
    }
  },
  dataModel: {
    types: ['pair:Event'],
    list: {
      servers: '@default',
      forceArray: ['pair:aboutPage', 'pair:homePage', 'pair:deliveredBy', 'pair:hasTopic']
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Événement |||| Événements',
      fields: {
        'pair:label': 'Titre',
        'pair:depictedBy': 'Image',
        'pair:hasTopic' : 'Thématique',
        'pair:homePage':'Liens utiles',
        'pair:aboutPage':'Réseaux Sociaux',
        'pair:hasLocation':'Adresse',
        'pair:description':'Description',
        'pair:video':'Vidéo',
        'pair:startDate' : 'Date et heure de lancement',
        'pair:endDate' : 'Date et heure de fin',
      }
    }
  }
};
