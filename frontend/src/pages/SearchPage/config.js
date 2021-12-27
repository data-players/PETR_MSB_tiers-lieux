const customSearchConfig = [
  {
    "label": "Service",
    "fields" : [
      {
        "type": "ServiceType",
        "name": "petr:hasServiceType",
        "label": "Type de service",
      },{
        "type": "Sector",
        "name": "petr:hasSector",
        "label": "Secteurs",
        "path": {
          "type": "Organization",
          "name": "petr:serviceOfferedBy",
        }
      }
    ]
  },{
    "label": "Equipment",
    "fields" : [
      {
        "type": "EquipmentType",
        "name": "petr:hasEquipmentType",
        "label": "Type d'équipement",
      },{
        "type": "Sector",
        "name": "petr:hasSector",
        "label": "Secteurs",
        "path": {
          "type": "Organization",
          "name": "petr:equipmentOfferedBy",
        }
      }
    ]
  },{
    "label": "Space",
    "fields" : [
      {
        "type": "SpaceType",
        "name": "petr:hasSpaceType",
        "label": "Type de lieu",
      },{
        "type": "Sector",
        "name": "petr:hasSector",
        "label": "Secteurs",
        "path": {
          "type": "Organization",
          "name": "petr:spaceOfferedBy",
        }
      },{
        "type": "EquipmentType",
        "name": "petr:hasEquipmentType",
        "label": "Equipement",
        "path": {
          "name": "pair:hasLocation",
          "pathType": "^"
        }
      }
    ]
  }
];

export default customSearchConfig;