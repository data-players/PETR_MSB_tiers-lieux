const customSearchConfig = [
  {
    "label": "Equipment",
    "fields" : [
      {
        "type": "EquipmentType",
        "name": "petr:hasEquipmentType",
        "label": "Type d'équipement",
      },
      {
        "type": "Organization",
        "name": "petr:equipmentOfferedBy",
        "label": "Organisations",
      }
    ]
  },{
    "label": "Space",
    "fields" : [
      {
        "type": "SpaceType",
        "name": "petr:hasSpaceType",
        "label": "Type de lieu",
      }
    ]
    // "petr:serviceOfferedBy",
  }/*,{
    "label": "Space",
    "fields" : [
      "petr:hasSpaceType",
      "petr:spaceOfferedBy",
    ]
  }*/
];

export default customSearchConfig;