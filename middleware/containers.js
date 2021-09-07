module.exports = [
  {
    path: '/persons',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization']
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/types',
    acceptedTypes: [
      'pair:Type',
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ]
  }
];
