
import React from 'react';

import { SimpleList ,MultiViewsList} from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

import { List, ListBase, ShowButton } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';

import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import Button from '../../commons/Button';
import FeaturedList from '../../commons/lists/FeaturedList/FeaturedList';

import Welcome from './Welcome/Welcome';

import PlaceCard from '../../resources/Place/PlaceCard';

const actions = [<Button to="/Place/create">Ajouter</Button>];

const HomePage = (props) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
//  const { identity } = useCheckAuthenticated();
  
  return (
    <>
      <Welcome />
      <List 
        resource="Place"
        basePath="/Place"
        pagination={false}
        perPage={1000} 
        actions={null}
        {...props}
      >
        <MapList
          height={xs ? 'calc(100vh - 146px)' : 'calc(100vh - 196px)'}
          latitude={(record) => record?.['pair:hasPostalAddress']?.['pair:latitude']}
          longitude={(record) => record?.['pair:hasPostalAddress']?.['pair:longitude']}
          popupContent={({ record, basePath }) => (
            <>
              <PlaceCard record={record} variant="compact" />
              <br />
              <ShowButton record={record} basePath={basePath} variant="contained" />
            </>
          )}
        />
        </List>
    </>
  );
};

export default HomePage;