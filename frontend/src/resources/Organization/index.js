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
        dereference: ['pair:hasLocation/pair:hasPostalAddress'],
        slugField: 'pair:label',
      },
      translations: {
        fr: {
          name: 'Organisation |||| Les organisations',
          fields: {
            'pair:label': 'Titre',
            'pair:hasType': 'Type',
            'pair:description': 'Contenu',
            'pair:depictedBy': 'Photos',
            'pair:logo':'Logo',
            'pair:webPage':'Site internet',
            'pair:hasLocation':'Emplacement',
            'pair:e-mail':'E-mail',
            'pair:phone':'Téléphone',
          }
        }
      }
};