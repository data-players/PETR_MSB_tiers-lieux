import React from 'react';

import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import { ImageField, ListBase, ReferenceField, ShowButton, SimpleList, TextField } from 'react-admin';

import MapList from '../addons/MapList/MapList';

import Filter from '../commons/Filter';
import MultiViewsFilterList from '../commons/lists/MultiViewsFilterList';

const useStyles = makeStyles(theme => ({
  popupImageContainer: {
    textAlign: 'center'
  },
  popupImage: {
    '& img': {
      width: '100%',
      objectFit: 'contain'
    }
  },
  popupTitle: {
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  popupTextContainer: {
    marginBottom: theme.spacing(1)
  },
  listAvatarStyle: {
    // Cible l'Avatar à l'intérieur de SimpleList
    "& .MuiListItemAvatar-root .MuiAvatar-root": {
      width: theme.spacing(32),   // ou utilisez '100px' si vous préférez une mesure fixe
      height: theme.spacing(16),
      paddingRight: 10,
      borderRadius: 0,
      backgroundColor: 'transparent',
    },
  },
  avatarImg: {
    width: '100%',            // Prend toute la largeur du conteneur
    height: '100%',           // Prend toute la hauteur du conteneur
    objectFit: 'contain',     // Garantit que tout le contenu de l'image est visible
    objectPosition: 'center'  // Centre l'image dans le conteneur
  },
  svgIcon: {
    transform: 'scale(2)'
  }
}));

const MapPage = (props) => {
  const classes = useStyles();

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
              reference="Sector"
              source="petr:hasSector"
              filter={{ a: 'petr:Sector' }}
              label="Secteur"
            />,
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
            // <Filter
            //   reference="Network"
            //   source="petr:hasNetworks"
            //   filter={{ a: 'petr:Network' }}
            //   label="Réseau"
            // />,
            <Filter
              reference="Topic"
              source="pair:hasTopic"
              filter={{ a: 'pair:Topic' }}
              label="Thème"
            />,
            <Filter
              reference="Audience"
              source="petr:hasAudience"
              filter={{ a: 'pair:Audience' }}
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
                  center={[46.42816, 4.66527]}
                  zoom={11}
                  height="calc(100% - 48px)"
                  boundToMarkers={true}
                  scrollWheelZoom={true}
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
                      <ShowButton record={record} basePath={basePath} label={"+ d'infos"} />
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
                  className={classes.listAvatarStyle}
                  primaryText={record => record['pair:label']}
                  secondaryText={record => record['pair:description']}
                  leftAvatar={record => (
                    record['petr:logo'] ? <img src={record['petr:logo']} alt="Logo" className={classes.avatarImg} /> : <HomeIcon className={classes.svgIcon} />
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
