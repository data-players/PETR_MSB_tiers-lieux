import React from 'react';

import { SimpleList } from 'react-admin';

import { Avatar } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import { ListActionsWithPermissions } from '@semapps/auth-provider'

import { MultiViewsList} from '@semapps/list-components';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';

import OrganizationFilterSidebar from './OrganizationFilterSidebar';

const OrganizationList = props => {
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
            primaryText={record => record['pair:label']}
            secondaryText={record => record['pair:description']}
            leftAvatar={record => (
              <Avatar src={record['petr:logo']} width="100%">
                <HomeIcon />
              </Avatar>
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