import SkillEdit from './SkillEdit';
import SkillCreate from './SkillCreate';
import SkillList from './SkillList';
import SchoolIcon from '@mui/icons-material/School';
import Skill from '.';

export default {
  config: {
    icon: SchoolIcon,
    edit: SkillEdit,
    create: SkillCreate,
    list : SkillList,
    options: {
      label: 'Skills'
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
