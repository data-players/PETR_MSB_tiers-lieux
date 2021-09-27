import React from 'react';

import { Avatar, Box, useMediaQuery } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import { List, ListBase, ShowButton, SimpleList, TextField } from 'react-admin';

import { MapList } from '@semapps/geo-components';

import Filter from '../commons/Filter';
import CardsList from '../commons/lists/CardsList';
import MultiViewsFilterList from '../commons/lists/MultiViewsFilterList';

const MapPage = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  
  return (
    <>
      <ListBase 
        basePath="/Organization" 
        resource="Organization"
        perPage={1000} 
        {...props}
      >
        <MultiViewsFilterList
          filters={[
            <Filter
              reference="OrganizationType"
              source="pair:hasType"
              filter={{ a: 'pair:OrganizationType' }}
              label="Type d'organisation"
            />,
          ]}
          views={{
            map: {
              label: 'Vue carte',
              icon: MapIcon,
              list: (
                <MapList
                  latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
                  longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
                  label={record => record['pair:label']}
                  description={record => record['pair:description']}
                  popupContent={({ record, basePath }) => (
                    <>
                      <TextField record={record} source="pair:label" variant="body2" color="secondary" />
                      <br />
                      <ShowButton record={record} basePath={basePath} />
                    </>
                  )}
                />
              ),
            },
            list: {
              label: 'Vue liste',
              icon: ListIcon,
              list: (
                <SimpleList
                  primaryText={record => record['pair:label']}
                  secondaryText={record => record['pair:comment']}
                  leftAvatar={record => (
                    <Avatar src={record['image']} width="100%">
                      <HomeIcon />
                    </Avatar>
                  )}
                  linkType="show"
                />
              ),
            },
          }}
        />
      </ListBase>
    </>
  );
};


export default MapPage;