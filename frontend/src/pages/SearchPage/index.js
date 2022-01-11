import React, { useRef, useState, useEffect } from 'react';
import { 
  SimpleList,
  useDataProvider,
  useGetResourceLabel
} from 'react-admin';
import { ListContext } from 'ra-core';
import { Avatar, Box, Button, Chip, Container, makeStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import ontologies from '../../config/ontologies.json';
import customSearchConfig from './config';

import DataFactory from '@rdfjs/data-model';



console.log('==========> CustomSearch:', customSearchConfig);

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 16,
      paddingRight: 16
    },
    textAlign: 'center',
    '& button': {
      width: '90%',
      maxWidth: 400
    },
    '& hr': {
      width: '90%'
    },
  },
  stepsContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  dNone: {
    display: 'none'
  },
  loading: {
    height: 'unset'
  },
  stepContainer: {
    whiteSpace: 'nowrap'
  },
  stepChevron: {
    position: 'relative',
    top: 8,
    left: 8
  },
  selectedCriterias: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  criteriasContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 24,
      paddingRight: 24
    },
  },
  criteriaContainer: {
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: 'unset',
      minWidth: 400
    },
  },
  criteria: {
    width: '90%',
    maxWidth: 600,
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'left'
  },
  manyCriterias: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '& > *': {
      width: '50%'
    }
  },
  criteriaChevronContainer: {
    margin: 'auto 0',
    minWidth: 50,
    [theme.breakpoints.up('sm')]: {
      minWidth: 90
    },
  },
  criteriaChevron: {
    fontSize: 50,
    [theme.breakpoints.up('sm')]: {
      fontSize: 90
    },
    stroke: 'white',
    cursor: 'pointer',
    '&:hover': {
      opacity: .8
    }
  },
  cancelIcon: {
    marginRight: 8,
    color: 'tomato',
    fontSize: '2rem',
    cursor: 'pointer'
  },
  noChoiceButton: {
    color: '#203142 !important'
  },
  resultsContainer: {
    width: '90%',
    maxWidth: 600,
    margin: '-16px auto'
  },
  resultItem: {
    marginTop: 2,
    listStyleType: 'disc',
  }
}));

const SearchPage = ({ theme }) => {
  
  const classes = useStyles();
  
  const dataProvider = useDataProvider();
  const getResourceLabel = useGetResourceLabel();

  const searchSteps = ['resource', 'field', 'results'];
  const [searchStep, setSearchStep] = useState(0);
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
  
  const handleNewSearchClick = (resource) => {
    setSearchStep(getSearchStep('resource'));
    setSelectedResource(null);
    setSearchFields([]);
    setSelectedField(null);
    setFieldValues(null);
    setSelectedValues([]);
    setResults(null);
  }
  
  const goToNextField = (resource, field, backward=false) => {
    const nextField = findNextField(resource, field, backward);
    if (nextField) {
      handleFieldClick(resource, nextField);
      return nextField;
    }
  }

  const handleResourceClick = (resource) => {
    setResults(null);
    if (resource !== selectedResource) {
      setSelectedResource(resource);
      setSearchFields(customSearchConfig.find( resourceConfig => resourceConfig === resource ).fields);
      const nextField = goToNextField(resource, null);
      if (! nextField) {
        setSelectedField();
      }
    }
    setSelectedValues([]);
  };
  
  const getSelectedFieldValues = async (resource, field) => {
    setFieldValues([]);
    const storedField = storedFieldValues.find(storedField =>
      storedField.resource === resource.name && storedField.name === field.type
    )
    if (storedField) {
      setFieldValues(storedField.data);  
    } else {
      const fieldValues = await dataProvider.getList(field.type, {});
      setFieldValues(fieldValues.data);
      setStoredFieldValues([...storedFieldValues, {
        resource: resource.name,
        name:field.type,
        data:fieldValues.data
      }]);
    }
  }
  
  const findNextField = (resource, selectedField, backward=false) => {
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
    console.log('backward:', backward);
    if (! backward ) {
      if (fieldIndex >= (Object.keys(resource.fields).length - 1)) {
        handleResultsStepClick();
        return; 
      }
      return Object.values(resource.fields)[fieldIndex + 1];
    } else {
      if (fieldIndex === 0) {
        return; 
      }
      return Object.values(resource.fields)[fieldIndex - 1];
    }
  }
  
  const handleClickLeftCriteriaChevron = () => {
    console.log('handleClickLeftCriteriaChevron');
    goToNextField(selectedResource, selectedField, true);
  }
  const handleClickRightCriteriaChevron = () => {
    goToNextField(selectedResource, selectedField);
  }

  const handleFieldClick = (resource, field) => {
    setSearchStep(getSearchStep('field'));
    if (field !== selectedField) {
      setSelectedField(field);
      getSelectedFieldValues(resource, field);
    }
  };

  const changeSelectedValues = (field, value) => {
    if (value) {
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
          return;
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
    } else {
      setSelectedValues(selectedValues.filter(selectedValue => selectedValue.field.type !== field.type));
    }
    goToNextField(selectedResource, field);
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
  
  const getResults = async () => {
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
      selectedResource.name,
      {
        "filter": {
          "sparqlWhere": sparqlWhere
        }
    });
      
    const uniqueResources = [...new Set(results.data.map(item => item[selectedResource["result-path"]["name"]]))];
    const resultsByResource = await Promise.all( uniqueResources.map(async uniqueResource => {
      const resourceData = await dataProvider.getOne(selectedResource.name, {id: uniqueResource});
      return ([ 
        uniqueResource, {
          id : uniqueResource,
          resourceData : resourceData.data,
          list: results.data
            .filter(item => item[selectedResource["result-path"]["name"]] === uniqueResource)
            .map(item => item["pair:label"])
        }
      ])
    }))
  
    setResults({
      ...results,
      dataByResource: Object.fromEntries(resultsByResource)
    });
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
    <Container className={classes.mainContainer} maxWidth="lg">
      <BreadcrumbsItem to='/Search'>Rechercher</BreadcrumbsItem>
      { ! selectedResource &&
        <h1>Que recherchez-vous ?</h1>
      }
      { selectedResource &&
        <>
          <h1>Rechercher {selectedResource.label}</h1>
          <hr/>
          <Box p={3} className={classes.stepsContainer}>
            <Box p={1} className={classes.stepContainer}>
              <Button 
                variant="contained" 
                color={searchStep === getSearchStep('resource') ? "primary" : "secondary"}
                onClick={()=>handleNewSearchClick()}
              >
                {selectedResource.label}
              </Button>
              <ChevronRightIcon className={classes.stepChevron}/>
            </Box>
            {
              searchFields.map((field, index) => (
                <Box p={1} className={classes.stepContainer} key={index}>
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
                      <ChevronRightIcon className={classes.stepChevron}/>
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
          { searchStep === getSearchStep('field') &&
            <hr/>
          }
        </>
      }
      { searchStep === getSearchStep('results') &&
        <>
          { selectedValues.length === 0 &&
            searchStep === getSearchStep('results') &&
              <Box p={3}>
                <p>Veuillez sélectionner au moins un critère de recherche.</p>
              </Box>
          }
          { selectedValues.length > 0 &&
            <Box pb={1} mt={-1} className={classes.selectedCriterias}>
              {
                selectedValues.map((selectedValue, index) => (
                  selectedValue &&
                    <Box pt={1} pl={2} key={index}>
                      <Chip 
                        label={selectedValue.value["pair:label"]}
                        onClick={()=>handleValueClick(selectedValue.field, selectedValue.value)}
                        onDelete={()=>handleValueClick(selectedValue.field, selectedValue.value)}
                      />
                    </Box>
                ))
              }
            </Box>
          }
        </>
      }
      { searchStep !== getSearchStep('results') &&
        <>
          { searchStep !== getSearchStep('resource') &&
            <h2>Précisez votre recherche :</h2>
          }
          <Box pb={4} mt={-1} className={classes.criteriasContainer}>
            { selectedResource &&
              <Box className={classes.criteriaChevronContainer}>
                { searchStep !== getSearchStep('resource') &&
                  <ChevronLeftIcon
                    className={classes.criteriaChevron}
                    onClick={() => handleClickLeftCriteriaChevron()}
                  />
                }
              </Box>
            }
            { selectedField === null &&
              <Box className={classes.criteriaContainer}>              
                {
                  customSearchConfig.map((resource, index) => (
                    <Box pt={2} key={index}>
                      <Button 
                        variant="contained" 
                        color={selectedResource === resource ? "primary" : "secondary"}
                        onClick={()=>handleResourceClick(resource)}
                      >
                        {resource.label}
                      </Button>
                    </Box>
                  ))
                }
              </Box>
            }
            { 
              searchFields.filter(field => selectedField === field).map((field, index) => (
                <Box key={index} className={classes.criteriaContainer}>
                  <Box className={ (fieldValues.length > 4) ? classes.manyCriterias : null }>
                    {
                      fieldValues?.map((value, index) => (
                        <Box pt={2} key={index}>
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
                  <Box pt={3}>
                    <Button 
                      variant="contained" 
                      color="default"
                      className={classes.noChoiceButton}
                      onClick={()=>handleValueClick(field, null)}
                    >
                      Ignorer ce critère
                    </Button>
                  </Box>
                </Box>
              ))
            }
            { selectedResource &&
              <Box className={classes.criteriaChevronContainer}>
                <ChevronRightIcon
                  className={classes.criteriaChevron} 
                  onClick={() => handleClickRightCriteriaChevron()}
                />
              </Box>
            }
          </Box>
        </>
      }
      <Box ref={resultsRef}>
        { searchStep === getSearchStep('results') &&
          <Box> 
            { results && 
              <Box>
                <hr />
                { results.total === 0 &&
                  <Box p={3}>
                    <p>Aucun résultat : Veuillez modifier vos critères de recherche.</p>
                  </Box>
                }
                { results.total > 0 &&
                  <h2>Résultats ({results.total}) :</h2>
                }
                { results.data && 
                  <Box className={classes.resultsContainer}>
                    <ListContext.Provider
                      value={{
                          loaded: true,
                          loading: false,
                          ids: Object.keys(results.dataByResource),
                          data: results.dataByResource,
                          total: Object.keys(results.dataByResource).length,
                          resource: selectedResource["result-path"]["type"],
                          basePath: '/' + selectedResource["result-path"]["type"],
                      }}
                    >
                      <SimpleList
                        primaryText={record => record.resourceData["pair:label"]}
                        secondaryText={record => { return (
                          <ul>
                            {record.list.map((item, index) => <li key={index} className={classes.resultItem}>{item}</li>)}
                          </ul>
                        )}}
                        leftAvatar={record => (
                          <Avatar src={record.resourceData['petr:logo']} width="100%">
                            <HomeIcon />
                          </Avatar>
                        )}
                        linkType="show"
                      />
                    </ListContext.Provider>
                  </Box>
                }
              </Box>
            }
            <Box pt={4}>
              <hr />
              <Box pt={3}>
                <Button 
                  variant="contained" 
                  color="default"
                  className={classes.noChoiceButton}
                  onClick={()=>handleNewSearchClick()}
                >
                  Nouvelle recherche
                </Button>
              </Box>
            </Box>
          </Box>
        }
      </Box>
    </Container>
  );
};

export default SearchPage;