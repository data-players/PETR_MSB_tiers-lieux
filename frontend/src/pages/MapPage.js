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

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const MapPage = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  
  return (
    <>
      <BreadcrumbsItem to='/Map'>Cartographie</BreadcrumbsItem>
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
            <Filter
              reference="LegalStatus"
              source="petr:hasLegalStatus"
              filter={{ a: 'petr:LegalStatus' }}
              label="Nature juridique"
            />,
            <Filter
              reference="Label"
              source="petr:hasLabels"
              filter={{ a: 'petr:Label' }}
              label="Label"
            />,
            <Filter
              reference="Network"
              source="petr:hasNetworks"
              filter={{ a: 'petr:Network' }}
              label="Réseau"
            />,
            <Filter
              reference="Audience"
              source="petr:hasAudience"
              filter={{ a: 'petr:Audience' }}
              label="Public ciblé"
            />,
            <Filter
              reference="EquipmentType"
              source="petr:hasEquipmentType"
              filter={{ a: 'petr:EquipmentType' }}
              label="Equipement"
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