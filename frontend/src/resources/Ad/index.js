import AdCreate from './AdCreate';
import AdEdit from './AdEdit';
import AdList from './AdList';
import AdShow from './AdShow';
import DescriptionIcon from '@material-ui/icons/Description';
import FeedIcon from '@mui/icons-material/Feed';

export default {
  config: {
    list: AdList,
    show: AdShow,
    create: AdCreate,
    edit: AdEdit,
    icon: FeedIcon,
    options: {
      label: 'Annonces'
    }
  },
  dataModel: {
    types: ['petr:Ads'],
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Annonce |||| Annonces',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
        'pair:involvedIn': 'Lieu',
        'pair:hasTopic': 'Thématiques',
        'petr:date': 'Date'
      }
    }
  }
};
