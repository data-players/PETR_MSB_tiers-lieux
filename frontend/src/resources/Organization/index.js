import OrganizationCreate from './OrganizationCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow/';
import HomeIcon from '@mui/icons-material/Home';

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
        list: {
          blankNodes: ['pair:hasLocation/pair:hasPostalAddress'],
          forceArray: [
            'petr:equipmentOffers',
            'petr:hasLabels',
            'petr:hasNetworks',
            'petr:serviceOffers',
            'petr:socialMedias',
            'petr:spaceOffers',
            'petr:videos',
          ],
        },
        fieldsMapping: {
          title: 'pair:label'
        }
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
            'pair:hasLegalStatus': 'Nature juridique',
            'pair:hasLocation': 'Emplacement',
            'pair:e-mail': 'E-mail',
            'petr:hasSector': 'Secteur géographique',
            'pair:phone': 'Téléphone',
            'pair:webPage': 'Site internet',
            'petr:socialMedias': 'Réseaux sociaux',
            'petr:hasLabels': 'Labels',
            'petr:hasNetworks': 'Réseaux',
            'petr:hasAudience': 'Public ciblé',
            'pair:affiliates' : 'Personnes'
          }
        }
      }
};
