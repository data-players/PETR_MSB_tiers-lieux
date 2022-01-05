import React, { useState, useEffect } from 'react';
import { 
  Link,
  linkToRecord,
  useDataProvider,
  useGetResourceLabel
} from 'react-admin';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import ontologies from '../../config/ontologies.json';
import customSearchConfig from './config';

import DataFactory from '@rdfjs/data-model';



console.log('==========> CustomSearch:', customSearchConfig);

const useStyles = makeStyles(theme => ({
  boxFlexRow: {
    padding: 10,
    display: 'flex',
  },
  dNone: {
    display: 'none',
  },
  loading: {
    height: 'unset',
  }
}));

const SearchPage = ({ theme }) => {
  
  const classes = useStyles();
  
  const dataProvider = useDataProvider();
  const getResourceLabel = useGetResourceLabel();

  const [selectedResource, setSelectedResource] = useState();
  const [searchFields, setSearchFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [fieldValues, setFieldValues] = useState();
  const [storedFieldValues, setStoredFieldValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  // const [searchStep, setSearchStep] = useState();
  const [results, setResults] = useState();
  
  const handleResourceStepClick = (resource) => {
    setSelectedField(null);
  }

  const handleResourceClick = (resource) => {
    setResults(null);
    if (resource !== selectedResource) {
      setSelectedResource(resource);
      setSearchFields(customSearchConfig.find( resourceConfig => resourceConfig === resource ).fields);
      const nextField = findNextField(resource, null);
      if (nextField) {
        handleFieldClick(nextField);
      } else {
        setSelectedField();
      }
    } else {
      setSelectedResource(null);
      setSearchFields([]);
      setSelectedField();
    }
    setSelectedValues([]);
  };
  
  async function getSelectedFieldValues(resourceType) {
    setFieldValues([]);
    const storedField = storedFieldValues.find(storedField => storedField.name === resourceType)
    if (storedField) {
      setFieldValues(storedField.data);  
    } else {
      const fieldValues = await dataProvider.getList(resourceType, {});
      setFieldValues(fieldValues.data);
      setStoredFieldValues([...storedFieldValues, {
        name:resourceType,
        data:fieldValues.data
      }]);
    }
  }
  
  const findNextField = (resource, selectedField) => {
    if (! resource) {
      return; 
    }
    if (! selectedField) {
      return Object.values(resource.fields)[0]; 
    }
    const fieldIndex = resource.fields.findIndex(field => field.type === selectedField.type);
    if ( fieldIndex === -1 || fieldIndex >= (Object.keys(resource.fields).length - 1)) {
      return; 
    }
    return Object.values(resource.fields)[fieldIndex + 1];
  }

  const handleFieldClick = (field) => {
    if (field !== selectedField) {
      console.log('setSelectedField', field);
      setSelectedField(field);
      getSelectedFieldValues(field.type);
    } else {
      setSelectedField(null);
    }
  };

  const changeSelectedValues = (field, value) => {
    console.log('changeSelectedValues', field, value, [...selectedValues]);
    const currentValueForField = selectedValues.find(selectedValue => selectedValue.field === field);
    if (! currentValueForField) {
      selectedValues.push({
        field: field,
        value: value
      })
      setSelectedValues([...selectedValues]);
    } else {
      if (currentValueForField.value.id === value.id) {
        setSelectedValues(selectedValues.filter(selectedValue => selectedValue.value.id !== value.id));
      } else {
        setSelectedValues(selectedValues.map(selectedValue => {
          if (selectedValue.field === field) {
            selectedValue.value = value
          }
          return selectedValue
        }));
        setSelectedValues([...selectedValues]);
      }
    }
    const nextField = findNextField(selectedResource, field);
    if (nextField) {
      handleFieldClick(nextField);
    }
  };
  
  const handleValueClick = (field, value) => {
    setResults(null);
    changeSelectedValues(field, value);
  };  
  
  const getFullPredicate = (predicate) => {
    const predicatePrefix = predicate.split(':')[0];
    const predicateValue = predicate.split(':')[1];
    const predicateOntologie = ontologies.find( ontologie => ontologie.prefix === predicatePrefix );
    return predicateOntologie.url + predicateValue;
  }
  
  async function getResults() {
    if (!selectedResource) {
      return;
    }
    const sparqlWhere = selectedValues.map( (selectedValue, index) => { 
      
      if (! selectedValue.field.path ) {
        return ({
          "type": "bgp",
          "triples": [{
            "subject": DataFactory.variable("s1"),
            "predicate": DataFactory.namedNode(getFullPredicate(selectedValue.field.name)),
            "object": DataFactory.namedNode(selectedValue.value.id)
          }]
        })
      } else {
        return ({
          "type": "bgp",
          "triples": [{
            "subject": DataFactory.variable("s1"),
            "predicate": {
              "type": "path",
              "pathType": selectedValue.field.path.pathType,
              "items": [DataFactory.namedNode(getFullPredicate(selectedValue.field.path.name))]
            },
            "object": DataFactory.blankNode("blank" + index)
          },{
            "subject": DataFactory.blankNode("blank" + index),
            "predicate": DataFactory.namedNode(getFullPredicate(selectedValue.field.name)),
            "object": DataFactory.namedNode(selectedValue.value.id)
          }]
        })
      }
    });
    const results = await dataProvider.getList(
      selectedResource.label,
      {
        "filter": {
          "sparqlWhere": sparqlWhere
        }
    });
    setResults(results);
  }
  
  useEffect( () => { 
    if (selectedValues.length > 0) {
      getResults();
    }
  }, [selectedValues])
  
  
  console.log('selectedResource:', selectedResource);
  console.log('searchFields:', searchFields);
  console.log('selectedField:', selectedField);
  console.log('fieldValues:', fieldValues);
  console.log('storedFieldValues:', storedFieldValues);
  console.log('selectedValues:', selectedValues);
  console.log('results:', results);

  return (
    <Container maxWidth="lg">
      <BreadcrumbsItem to='/Search'>Rechercher</BreadcrumbsItem>
      <h1>Custom Search</h1>
      <h2>Que recherchez-vous ?</h2>
      <Box p={3} className={classes.boxFlexRow}>
        { 
          selectedResource && 
            <Box p={1}>
              <Button 
                variant="contained" 
                color="secondary"
                onClick={()=>handleResourceStepClick()}
              >
                {getResourceLabel(selectedResource.label)}
              </Button>
            </Box>
        }
        {
          searchFields.map((field, index) => (
            <Box p={1} key={index}>
              <Button 
                variant="contained" 
                color={selectedField === field ? "primary" : "secondary"}
                onClick={()=>handleFieldClick(field)}
              >
                {field.label}
              </Button>
            </Box>
          ))
        }
      </Box>
      <hr />
      <Box p={3}>
        <Box p={1}>
          { selectedField === null &&
            <> 
              {
              customSearchConfig.map((resource, index) => (
                <Box pl={3} pt={2}>
                  <Button 
                    variant="contained" 
                    color={selectedResource === resource ? "primary" : "secondary"}
                    onClick={()=>handleResourceClick(resource)}
                  >
                    {getResourceLabel(resource.label)}
                  </Button>
                </Box>
              ))
              }
            </>
          }
        </Box>
        { 
          searchFields.map((field, index) => (
            <Box p={1} key={index}>
              <Box className={selectedField === field ? null : classes.dNone} >
                {
                  fieldValues?.map((value, index) => (
                    <Box pl={3} pt={2} key={index}>
                      <Button 
                        variant="contained" 
                        color={selectedValues.find(selectedValue => selectedValue.value.id === value.id) ? "primary" : "secondary"}
                        onClick={()=>handleValueClick(field, value)}
                      >
                        {value["pair:label"]}
                      </Button>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          ))
        }
      </Box>
      {selectedValues.length > 0 && <><hr /><h3>Critères :</h3></>}
      {
        selectedValues.map((selectedValue, index) => (
          selectedValue &&
            <Box p={1} key={index}>{selectedValue.field.label} : {selectedValue.value["pair:label"]}</Box>
        ))
      }
      {results && 
        <>
          <hr />
          <div>Nb résultats : {results.total}</div>
          <br />
          {
            results.data?.map((item, index) => (
              <Box key={index}>
                <Link to={linkToRecord(selectedResource.label, item.id, 'show')} onClick={(e) => e.stopPropagation()}>
                  <strong>{item["pair:label"]}</strong>
                </Link>
              </Box>
            ))
          }
        </>
      }
    </Container>
  );
};

export default SearchPage;