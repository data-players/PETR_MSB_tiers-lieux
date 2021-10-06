import OrganizationCreate from './OrganizationCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: OrganizationList,
        show: OrganizationShow,
        create: OrganizationCreate,
        edit: OrganizationEdit,
        icon: HomeIcon,
        options: {
          label: 'Organisations'
        },
    },
    dataModel: {
        types: ['pair:Organization'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations',
        dereference: [
          'pair:hasLocation/pair:hasPostalAddress',
          'petr:openingTimesDay1',
          'petr:openingTimesDay2',
          'petr:openingTimesDay3',
          'petr:openingTimesDay4',
          'petr:openingTimesDay5',
          'petr:openingTimesDay6',
          'petr:openingTimesDay7',
        ],
        slugField: 'pair:label',
        forceArray: ['petr:equipmentOffers', 'petr:equipmentOfferedBy']
      },
      translations: {
        fr: {
          name: 'Organisation |||| Les organisations',
          fields: {
            'pair:label': 'Titre',
            'pair:hasType': 'Type',
            'pair:description': 'Contenu',
            'pair:depictedBy': 'Photos',
            'petr:logo': 'Logo',
            'petr:videos': 'Vidéos',
            'pair:hasLocation': 'Emplacement',
            'pair:hasSector': 'Secteur géographique',
            'pair:e-mail': 'E-mail',
            'pair:phone': 'Téléphone',
            'pair:webPage': 'Site internet',
            'petr:socialMedias': 'Réseaux sociaux',
            'pair:offers': 'Ressources de l\'organisation',
          }
        }
      }
};