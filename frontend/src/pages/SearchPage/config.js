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
        "label": "Secteur",
        "path": {
          "type": "Organization",
          "name": "petr:serviceOfferedBy",
        }
      }
    ],
    "result-path" : {
      "type": "Organization",
      "name": "petr:serviceOfferedBy",
    }
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
        "label": "Secteur",
        "path": {
          "type": "Organization",
          "name": "petr:equipmentOfferedBy",
        }
      }
    ],
    "result-path" : {
      "type": "Organization",
      "name": "petr:equipmentOfferedBy",
    }
  },{
    "label": "Space",
    "fields" : [
      {
        "type": "SpaceType",
        "name": "petr:hasSpaceType",
        "label": "Type de lieu",
      },{
        "type": "EquipmentType",
        "name": "petr:hasEquipmentType",
        "label": "Equipement",
        "path": {
          "name": "pair:hasLocation",
          "pathType": "^"
        }
      },{
        "type": "Sector",
        "name": "petr:hasSector",
        "label": "Secteur",
        "path": {
          "type": "Organization",
          "name": "petr:spaceOfferedBy",
        }
      }
    ],
    "result-path" : {
      "type": "Organization",
      "name": "petr:spaceOfferedBy",
    }
  }
];

export default customSearchConfig;