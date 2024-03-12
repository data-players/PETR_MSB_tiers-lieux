import React, { useState, useEffect } from 'react';
import { useList, ListContextProvider, Datagrid, TextField } from 'react-admin';
import { Container } from '@material-ui/core';

// Assuming the rest of your component remains the same and focusing on the results display part:

const List = ({ theme, results,selectedResource }) => {
  // Existing state and functions

  // Simulate search results for demonstration purposes
  const [searchResults, setSearchResults] = useState([]);
  
  const data = [
    { id: 1, name: 'Arnold' },
    { id: 2, name: 'Sylvester' },
    { id: 3, name: 'Jean-Claude' },
]
    const ids = [1, 2, 3];
  // UseList hook to prepare the data for ListContextProvider
  const listContext = useList({
    data: results?results.data:[],
    ids: results?Object.keys(results.dataByResource):[],
    basePath: '/search', // Adjust this as needed
    resource: 'searchResults',
    loaded: true,
    loading: false,
    total: results?Object.keys(results.dataByResource).length:0,
    resource: selectedResource?selectedResource["result-path"]["type"]:undefined,
    basePath: selectedResource?'/' + selectedResource["result-path"]["type"]:undefined,
  });
  console.log(listContext)

  return (
    <Container>
      <ListContextProvider value={listContext}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </ListContextProvider>
    </Container>
  );
};

export default List;