import React, { useRef, useState, useEffect } from 'react';
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
import ChevronRightIcon from '../../svg/ChevronRightIcon';

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
  },
  chevronRight: {
    position: 'relative',
    top: 8,
    left: 8
  }
}));

const SearchPage = ({ theme }) => {
  
  const classes = useStyles();
  
  const dataProvider = useDataProvider();
  const getResourceLabel = useGetResourceLabel();

  const searchSteps = ['resource', 'field', 'results'];
  const [searchStep, setSearchStep] = useState();
  const [selectedResource, setSelectedResource] = useState();
  const [searchFields, setSearchFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [fieldValues, setFieldValues] = useState();
  const [storedFieldValues, setStoredFieldValues] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [results, setResults] = useState();
  
  const getSearchStep = (step) => {
    return searchSteps.indexOf(step)
  }
  
  const handleResourceStepClick = (resource) => {
    setSearchStep(getSearchStep('resource'));
    setSelectedField(null);
  }

  const handleResourceClick = (resource) => {
    setResults(null);
    if (resource !== selectedResource) {
      setSelectedResource(resource);
      setSearchFields(customSearchConfig.find( resourceConfig => resourceConfig === resource ).fields);
      const nextField = findNextField(resource, null);
      if (nextField) {
        handleFieldClick(resource, nextField);
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
  
  async function getSelectedFieldValues(resource, field) {
    setFieldValues([]);
    const storedField = storedFieldValues.find(storedField =>
      storedField.resource === resource.label && storedField.name === field.type
    )
    if (storedField) {
      setFieldValues(storedField.data);  
    } else {
      const fieldValues = await dataProvider.getList(field.type, {});
      setFieldValues(fieldValues.data);
      setStoredFieldValues([...storedFieldValues, {
        resource: resource.label,
        name:field.type,
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
    if (fieldIndex === -1) {
      return; 
    }
    if (fieldIndex >= (Object.keys(resource.fields).length - 1)) {
      handleResultsStepClick();
      return; 
    }
    return Object.values(resource.fields)[fieldIndex + 1];
  }

  const handleFieldClick = (resource, field) => {
    setSearchStep(getSearchStep('field'));
    if (field !== selectedField) {
      console.log('setSelectedField', field);
      setSelectedField(field);
      getSelectedFieldValues(resource, field);
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
      handleFieldClick(selectedResource, nextField);
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
  
  const resultsRef = useRef(null);
  const handleResultsStepClick = () => {
    setSearchStep(getSearchStep('results'));
    setSelectedField(null);
    resultsRef.current.scrollIntoView();
  }
  
  console.log('searchStep:', searchStep);  
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
        { selectedResource && 
          <Box p={1}>
            <Button 
              variant="contained" 
              color={searchStep === getSearchStep('resource') ? "primary" : "secondary"}
              onClick={()=>handleResourceStepClick()}
            >
              {getResourceLabel(selectedResource.label)}
            </Button>
            <ChevronRightIcon className={classes.chevronRight}/>
          </Box>
        }
        {
          searchFields.map((field, index) => (
            <Box p={1} key={index}>
              <Button 
                variant="contained" 
                color={selectedField === field ? "primary" : "secondary"}
                onClick={()=>handleFieldClick(selectedResource, field)}
              >
                {field.label}
              </Button>
              { ( Object.keys(selectedValues).length !== 0 ||
                  index !== (searchFields.length - 1) 
                ) &&
                  <ChevronRightIcon className={classes.chevronRight}/>
              }
            </Box>
          ))
        }
        { Object.keys(selectedValues).length > 0 &&
          <Box p={1}>
            <Button 
              variant="contained" 
              color={searchStep === getSearchStep('results') ? "primary" : "secondary"}
              onClick={()=>handleResultsStepClick()}
            >
              Résultats 
              { results &&
                <span>&nbsp;({results.total})</span>
              }
            </Button>
          </Box>
        }
      </Box>
      { searchStep !== getSearchStep('results') &&
        <>
          <hr />
          <Box p={3}>
            { selectedField === null &&
              <Box p={1}>              
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
              </Box>
            }
            { 
              searchFields.filter(field => selectedField === field).map((field) => (
                <Box p={1}>
                  <Box pl={3} pt={2}>
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
        </>
      }
      {selectedValues.length > 0 && <><hr /><h3>Critères :</h3></>}
      {
        selectedValues.map((selectedValue, index) => (
          selectedValue &&
            <Box p={1} key={index}>{selectedValue.field.label} : {selectedValue.value["pair:label"]}</Box>
        ))
      }
      <Box ref={resultsRef}>
        { results && 
          <Box>
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
          </Box>
        }
      </Box>
    </Container>
  );
};

export default SearchPage;