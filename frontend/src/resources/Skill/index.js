import SkillEdit from './SkillEdit';
import SkillShow from './SkillShow';
import SkillCreate from './SkillCreate';
import SkillList from './SkillList';
import SchoolIcon from '@mui/icons-material/School';
import Skill from '.';

export default {
  config: {
    icon: SchoolIcon,
    edit: SkillEdit,
    show : SkillShow,
    create: SkillCreate,
    list : SkillList,
    options: {
      label: 'Compétences'
    },
  },
  dataModel: {
    types: ['pair:Skill'],
    list: {
      servers: '@default',
      blankNodes: []
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Compétence |||| Compétences',
      fields: {
        'pair:label': 'Titre',
        'pair:offeredBy': 'Proposé par'
      }
    }
  }
};
