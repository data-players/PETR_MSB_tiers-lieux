const customSearchConfig = [
  {
    "name": "Service",
    "label": "des services",
    "fields" : [
      {
        "type": "ServiceType",
        "predicate": "petr:hasServiceType",
        "label": "Type de service",
      },{
        "type": "Sector",
        "predicate": "petr:hasSector",
        "label": "Secteur",
        "path": {
          "predicate": "petr:serviceOfferedBy",
        }
      }
    ],
    "result-path" : {
      "type": "Organization",
      "predicate": "petr:serviceOfferedBy",
    }
  },{
    "name": "Equipment",
    "label": "des équipements",
    "fields" : [
      {
        "type": "EquipmentType",
        "predicate": "petr:hasEquipmentType",
        "label": "Type d'équipement",
      },{
        "type": "Sector",
        "predicate": "petr:hasSector",
        "label": "Secteur",
        "path": {
          "predicate": "petr:equipmentOfferedBy",
        }
      }
    ],
    "result-path" : {
      "type": "Organization",
      "predicate": "petr:equipmentOfferedBy",
    }
  },{
    "name": "Space",
    "label": "des espaces",
    "fields" : [
      {
        "type": "SpaceType",
        "predicate": "petr:hasSpaceType",
        "label": "Type de lieu",
      },{
        "type": "EquipmentType",
        "predicate": "petr:hasEquipmentType",
        "label": "Equipement",
        "path": {
          "predicate": "pair:hasLocation",
          "pathType": "^"
        }
      },{
        "type": "Sector",
        "predicate": "petr:hasSector",
        "label": "Secteur",
        "path": {
          "predicate": "petr:spaceOfferedBy",
        }
      }
    ],
    "result-path" : {
      "predicate": "petr:spaceOfferedBy",
    }
  }
];

export default customSearchConfig;