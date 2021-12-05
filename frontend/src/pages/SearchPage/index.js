import React, { useState } from 'react';
import { 
  Link,
  Loading,
  Error,
  linkToRecord,
  useGetResourceLabel,
  useQuery
} from 'react-admin';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import customSearchConfig from './config';


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

const ResourceLabel = ( {resource, id} ) => {
  
  const classes = useStyles();
  
  const { data, loading, error } = useQuery({ 
    type: 'getOne',
    resource: resource.label,
    payload: { id: id }
  });

  if (loading) return <Loading className={classes.loading}/>;
  if (error) return <Error />;
  if (!data) return null;
  
  return (
    <span>{data["pair:label"]}</span>
  )
};

const FieldValues = ( {resource, field, selectedValues, changeSelectedValue} ) => {
  
  const classes = useStyles();

  const handleValueClick = (field, value) => {
    if (value !== selectedValues[field]) {
      changeSelectedValue(field, value);
    } else {
      changeSelectedValue(field, undefined);
    }
  };
  
  const { data, loading, error } = useQuery({ 
    type: 'getList',
    resource: resource.label,
    payload: {}
  });

  if (loading) return <Loading className={classes.loading}/>;
  if (error) return <Error />;
  if (!data) return null;
  
  const dataWithField = data.filter(data => data[field]);
  const fieldData = dataWithField.map(data => data[field]);
  const uniqueFieldValue = fieldData.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  
  return (
    <Box>
      { 
        uniqueFieldValue.map(value => (
          <Box pl={3} pt={2}>
            <Button 
              variant="contained" 
              color={selectedValues[field] === value ? "primary" : "secondary"}
              onClick={()=>handleValueClick(field, value)}
            >
              <ResourceLabel resource={resource} id={value} />
            </Button>
          </Box>
        ))
      }
    </Box>
  )
};

const allKeysFound = ( from, to ) => {
  let allKeysFound = true;
  Object.keys(from).forEach( key => {
    if ( ! to[key] ) {
      allKeysFound = false;
    }
  }); 
  return allKeysFound;
}

const allKeysMatchIfFilled = ( from, to ) => {
  let allKeysMatch = true;
  Object.keys(from).forEach( key => {
    if ( to[key] && from[key] !== to[key] ) {
      allKeysMatch = false;
    }
  }); 
  return allKeysMatch;
}

const SearchResults = ( {resource, selectedValues} ) => {
  
  const classes = useStyles();
  
  const { data, loading, error } = useQuery({ 
    type: 'getList',
    resource: resource.label,
    payload: {}
  });
  
  console.log('data:', data);

  if (loading) return <Loading className={classes.loading}/>;
  if (error) return <Error />;
  if (!data) return null;
  
  const filteredData = data.filter( item => (
    allKeysFound(selectedValues, item) && allKeysMatchIfFilled(item, selectedValues)
  ));
  
  return (
    <Box p={3}>
      <h3>Résultats :</h3>
      { 
        filteredData.map(item => (
          <Box>
            <Link to={linkToRecord(resource.label, item.id, 'show')} onClick={(e) => e.stopPropagation()}>
              <strong>{item["pair:label"]}</strong>
            </Link>
          </Box>
        ))
      }
    </Box>
  )
};




const CustomSearch = ({ theme }) => {

  const classes = useStyles();
  const getResourceLabel = useGetResourceLabel();
  
  const [selectedResource, setSelectedResource] = useState();
  const [selectedField, setSelectedField] = useState();
  const [selectedValues, setSelectedValues] = useState({});
  
  const changeSelectedValue = (name, value) => {
    setSelectedValues({
      ...selectedValues,
      [name]: value,
    });
  };
  
  const removeSelection = () => {
    setSelectedValues({});
    setSelectedField();
  };

  const handleResourceClick = (resource) => {
    if (resource !== selectedResource) {
      setSelectedResource(resource);
    } else {
      setSelectedResource(null);
    }
    removeSelection();
  };
  
  const handleFieldClick = (field) => {
    if (field !== selectedField) {
      setSelectedField(field);
    } else {
      setSelectedField(null);
    }
  };
   
  let customSearchFields = [];
  if (selectedResource) {
    customSearchFields = customSearchConfig.find( resource => resource === selectedResource ).fields;
  }
  
  return (
    <Container maxWidth="lg">
      <BreadcrumbsItem to='/Search'>Rechercher</BreadcrumbsItem>
      <h1>Custom Search</h1>
      <h2>Que recherchez-vous ?</h2>
      <hr />
      <Box p={3} className={classes.boxFlexRow}>
        { 
          customSearchConfig.map(resource => (
            <Box p={1}>
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
      <hr />
      <Box p={3} className={classes.boxFlexRow}>
        { 
          customSearchFields.map(field => (
            <Box p={1}>
              <Button 
                variant="contained" 
                color={selectedField === field ? "primary" : "secondary"}
                onClick={()=>handleFieldClick(field)}
              >
                {field}
              </Button>
              <Box className={selectedField === field ? classes.test : classes.dNone} >
                <FieldValues 
                  resource={selectedResource} 
                  field={field} 
                  selectedValues={selectedValues} 
                  changeSelectedValue={changeSelectedValue}
                />
              </Box>
            </Box>
          ))
        }
      </Box>
      {Object.keys(selectedValues).length > 0 && <><hr /><h3>Critères :</h3></>}
      {
        Object.keys(selectedValues).map((key) => (
            selectedValues[key] &&
            <Box p={1}>{key} : {selectedValues[key]}</Box>
        ))
      }
      {selectedResource && <hr />}
      {
        selectedResource &&
        <SearchResults resource={selectedResource} selectedValues={selectedValues}/>
      }
    </Container>
  );
};

export default CustomSearch;
