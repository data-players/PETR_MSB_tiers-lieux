import React from 'react';

import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import { ImageField,  ListBase, ReferenceField, ShowButton, SimpleList, TextField } from 'react-admin';

import { MapList } from '@semapps/geo-components';

import Filter from '../commons/Filter';
import MultiViewsFilterList from '../commons/lists/MultiViewsFilterList';

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

const useStyles = makeStyles(theme => ({
  popupImageContainer: { 
    textAlign: 'center'
  },
  popupTitle: {
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  popupTextContainer: {
    marginBottom: theme.spacing(1)
  },
}));

const MapPage = (props) => {
  const classes = useStyles();
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
              label="Type de lieu"
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
            /*
            <Filter
              reference="EquipmentType"
              source="petr:hasEquipmentType"
              filter={{ a: 'petr:EquipmentType' }}
              label="Equipement"
            />,
            */
          ]}
          views={{
            map: {
              label: 'Vue carte',
              icon: MapIcon,
              list: (
                <MapList
                  latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
                  longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
                  center= {[46.31407, 4.79341]}
                  zoom= {8}
                  boundToMarkers={false}
                  label={record => record['pair:label']}
                  description={record => record['pair:description']}
                  popupContent={({ record, basePath }) => (
                    <>
                      <Box className={classes.popupImageContainer}>
                        <ImageField record={record} source="petr:logo" className={classes.popupImage} />
                      </Box>
                      <Box className={classes.popupTextContainer}>
                        <Typography component="h3">
                          <TextField record={record} source="pair:label" className={classes.popupTitle} />
                        </Typography>
                        <TextField record={record['pair:hasLocation']} source="pair:label" />
                      </Box>
                      <Box className={classes.popupTextContainer}>
                        <Typography component="h3" className={classes.popupTitle}>
                          Type :
                        </Typography>
                        <ReferenceField record={record} source="pair:hasType" reference="OrganizationType" link={false}>
                          <TextField source="pair:label" />
                        </ReferenceField>
                      </Box>
                      <ShowButton record={record} basePath={basePath} label ={"+ d'infos"}/>
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
                  secondaryText={record => record['pair:description']}
                  leftAvatar={record => (
                    <Avatar src={record['petr:logo']} width="100%">
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