import React from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';
import { ImageField, ReferenceField, TextField, useRecordContext, useShowContext } from 'react-admin';

import { Hero, MainList, SeparatedListField, Show } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';

import OrganizationTitle from "./OrganizationTitle";

const useStyles = makeStyles((theme) => ({
  images: {
    marginBottom: 15,
    '& img': {
      width: '100%',
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      height: '100%',
      maxHeight: '15rem',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '8rem',
      }
    },
  },
}));

const MultipleImagesField = ({ source, max = 2 }) => {
  const classes = useStyles();
  const record = useRecordContext();
  if( !record ) return null;
  if( Array.isArray(record[source]) ) {
    return(
      <>
        <h6>{source}</h6>
        <Grid container spacing={2}>
          {record[source].slice(0,max).map((url, i) => (
            <Grid item xs={6} key={i} className={classes.images}>
              <img src={url} alt={record['pair:label']}/>
            </Grid>
          ))}
        </Grid>
      </>
    )
  } else {
    return(
      <img src={record[source]} alt={record['pair:label']} />
    )
  }
};

/*<UrlField source="pair:homePage" />*/

const OrganizationShow = ({...props}) => {
  
  const { basePath, hasEdit, record } = useShowContext();

  return (
    <Show title={<OrganizationTitle />} {...props}>
      <Grid item xs={12} sm={9}>
        <MainList>
          <MarkdownField source="pair:label" />
          <MarkdownField source="pair:description" />
          <ReferenceField reference="Type" source="pair:hasType">
            <TextField source="pair:label" />
          </ReferenceField>
          <MapField
            source="pair:hasLocation"
            address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
          <MarkdownField source="pair:e-mail" />
          <MarkdownField source="pair:phone" />
          <MultipleImagesField source="pair:depictedBy" max={10} />
          <MarkdownField source="pair:webPage" />
        </MainList>
      </Grid>
    </Show>
  );
};

export default OrganizationShow;