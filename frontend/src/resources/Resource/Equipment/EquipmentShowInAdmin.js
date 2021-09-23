import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Grid, makeStyles } from '@material-ui/core';
import { ImageField, ReferenceField, TextField, UrlField, useRecordContext, useShowContext } from 'react-admin';

import { Hero, MainList, SeparatedListField, Show } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';
import { MarkdownField } from '@semapps/markdown-components';

import EquipmentTitle from "./EquipmentTitle";

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
  let imagesArray = [];
  if( Array.isArray(record[source]) ) {
    imagesArray = record[source];
  } else {
    imagesArray.push(record[source]);
  }
  return(
    <>
      <h6>{source}</h6>
      <Grid container spacing={2}>
        {imagesArray.slice(0,max).map((url, i) => (
          <Grid item xs={6} key={i} className={classes.images}>
            <img src={url} alt={record['pair:label']}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
};

const UrlArrayField = ({ record, source }) => {
  let links = typeof record[source] === 'string' ? [record[source]] : record[source];
  let index = 0;
  for (let link of links) {
    if (link.startsWith('https://')) {
      links[index] = link.split('https://')[1];
    }
    index++;
  }

  return record
    ? links.map(item => (
        <div>
          <a href={'https://' + item} target="_blank">
            {item}
          </a>
        </div>
      ))
    : null;
};
UrlArrayField.defaultProps = { addLabel: true };


const EquipmentShowInAdmin = ({...props}) => {
  
  const state = useSelector(state => state);
  const isAdminOpen = state.customState.isAdminOpen;
  
  const { basePath, hasEdit, record } = useShowContext();
  
  console.log('props', props);
  console.log('record', record);
  
  return (
    <Show title={<EquipmentTitle />} {...props}>
      <Grid item xs={12} sm={9}>
        <div>InAdmin</div>
        <MainList>
          <MarkdownField source="pair:label" />
          <MarkdownField source="pair:description" />
          <ReferenceField source="pair:hasType" reference="Type">
            <TextField source="pair:label" />
          </ReferenceField>
          <MarkdownField source="pair:e-mail" />
          <MarkdownField source="pair:phone" />
          <MultipleImagesField source="pair:depictedBy" max={10} />
          <UrlField source="pair:webPage" />
          <UrlArrayField source="petr:socialMedias" />
        </MainList>
      </Grid>
    </Show>
  );
};

export default EquipmentShowInAdmin;