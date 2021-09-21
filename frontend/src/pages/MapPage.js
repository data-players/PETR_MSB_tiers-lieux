import React from 'react';

import { Box, useMediaQuery } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

import { ListBase, ShowButton } from 'react-admin';

import { MapList } from '@semapps/geo-components';

import Filter from '../commons/Filter';
import CardsList from '../commons/lists/CardsList';
import MultiViewsFilterList from '../commons/lists/MultiViewsFilterList';

import PlaceCard from '../resources/Place/PlaceCard';

const MapPage = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  
  return (
    <>
      <ListBase 
        resource="Place"
        basePath="/Map" 
        perPage={1000} 
        {...props}
      >
        <MultiViewsFilterList
          filters={[
            <Filter
              reference="Type"
              source="pair:hasType"
              filter={{ a: 'pair:OrganizationType' }}
              label="Type"
            />,
          ]}
          views={{
            map: {
              label: 'Vue carte',
              icon: MapIcon,
              list: (
                <MapList
                  height={xs ? 'calc(100vh - 146px)' : 'calc(100vh - 196px)'}
                  latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
                  longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
                  scrollWheelZoom
                  popupContent={({ record, basePath }) => (
                    <>
                      <PlaceCard record={record} variant="compact" />
                      <br />
                      <ShowButton record={record} basePath={basePath} variant="contained" />
                    </>
                  )}
                />
              ),
            },
            list: {
              label: 'Vue liste',
              icon: ListIcon,
              list: (
                <Box p={{ xs: 2, sm: 3 }}>
                  <CardsList CardComponent={PlaceCard} />
                </Box>
              ),
            },
          }}
        />
      </ListBase>
    </>
  );
};


export default MapPage;