
import React from 'react';
import { List, ShowButton, TextField } from 'react-admin';

import { MapList } from '@semapps/geo-components';

import Welcome from './Welcome/Welcome';

const HomePage = (props) => {
//  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
//  const { identity } = useCheckAuthenticated();
  
  return (
    <>
      <Welcome />
      <List 
        basePath='/Organization'
        resource='Organization'
        actions={null}
        pagination={false}
        perPage={1000}
        {...props}
      >
        <MapList
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          center= {[46.42816, 4.66527]}
          zoom= {11}
          boundToMarkers={false}
          label={record => record['pair:label']}
          description={record => record['pair:comment']}
          popupContent={({ record, basePath }) => (
            <>
              <TextField record={record} source="pair:label" variant="body2" color="secondary" />
              <br />
              <ShowButton record={record} basePath={basePath} />
            </>
          )}
        />
      </List>
    </>
  );
};

export default HomePage;