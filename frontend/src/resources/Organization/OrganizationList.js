import React from 'react';

import { SimpleList } from 'react-admin';

import { Avatar, makeStyles } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import { ListActionsWithPermissions } from '@semapps/auth-provider'

import { MultiViewsList} from '@semapps/list-components';
import MapList from '../../addons/MapList/MapList';
import MapIcon from '@material-ui/icons/Map';

import OrganizationFilterSidebar from './OrganizationFilterSidebar';

const useStyles = makeStyles((theme) => ({
  listAvatarStyle: {
    // Cible l'Avatar à l'intérieur de SimpleList
    "& .MuiListItemAvatar-root .MuiAvatar-root": {
      width: theme.spacing(32),   // ou utilisez '100px' si vous préférez une mesure fixe
      height: theme.spacing(16),
      paddingRight : 10,
      borderRadius : 0,
      backgroundColor : 'transparent',
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

const OrganizationList = props => {
  const classes = useStyles();
  return <MultiViewsList
    aside={<OrganizationFilterSidebar />}
    actions={<ListActionsWithPermissions exporter={false} />}
    views={{
      list: {
        
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        list: (
          <SimpleList
            className={classes.listAvatarStyle}
            primaryText={record => record['pair:label']}
            secondaryText={record => record['pair:description']}
            leftAvatar={record => (
              record['petr:logo'] ? <img src={record['petr:logo']} alt="Logo" className={classes.avatarImg} /> : <HomeIcon className={classes.svgIcon} />
            )}
            linkType="edit"
          />
        )
      },
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
            label={record => record['pair:label']}
            description={record => record['pair:comment']}
            scrollWheelZoom
          />
        )
      }
    }}
    {...props}
  />
};

export default OrganizationList;