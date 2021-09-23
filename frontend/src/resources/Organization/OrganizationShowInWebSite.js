import React from 'react';

import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { ImageField, Show, ReferenceField, TextField, UrlField, useRecordContext, useShowContext } from 'react-admin';

import { MainList } from "@semapps/archipelago-layout";
import { MapField } from '@semapps/geo-components';

import FullWidthBox from '../../commons/FullWidthBox';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    boxSizing: 'border-box',
    '& *' : {
      boxSizing: 'border-box'
    }
  },
  innerContainer: {
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    '& > *': {
      width: '100%',
      textAlign: 'center'
    },
  },
  title: {
    display: 'block',
    padding: theme.spacing(2),
    border: '1px solid lightgrey',
  },
  subtitle: {
    display: 'block',
    padding: theme.spacing(1),
    border: '1px solid lightgrey',
  },
  description: {
    display: 'block',
    padding: theme.spacing(2),
  },
  identityContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& img': {
      margin: 0,
      marginRight: theme.spacing(1),
      width: '64px',
    },
  },
  contactContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  addressContainer: {
    '& > *': {
      width: '100%',
      textAlign: 'left'
    }
  },
  map: {
    marginBottom: theme.spacing(2)
  },
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
    <Grid container spacing={2}>
      {imagesArray.slice(0,max).map((url, i) => (
        <Grid item xs={6} key={i} className={classes.images}>
          <img src={url} alt={record['pair:label']}/>
        </Grid>
      ))}
    </Grid>
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


const OrganizationShowInWebSite = ({...props}) => {
  
  const { basePath, hasEdit, record } = useShowContext();
  const classes = useStyles();
  
  console.log('props', props);
  console.log('record', record);
  
  return (
    <Show
      actions={null}
      {...props}
    >
      <Grid container spacing={2} className={classes.mainContainer}>
        <Grid item xs={12} md={3}>
          <FullWidthBox className={classes.innerContainer}>
            <MainList>
              <MapField
                source="pair:hasLocation"
                address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
                latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
                longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
                address={null}
                addLabel={false}
                className={classes.map}
              />
            </MainList>
            <Typography component="div" className={classes.subtitle}>
              Equipement
            </Typography>
          </FullWidthBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <FullWidthBox className={classes.innerContainer}>
            <Typography component="h2" className={classes.title}>
              <span>InWebSite : </span>
              <TextField source="pair:label" />
            </Typography>
            <Typography component="div" className={classes.description}>
              <TextField source="pair:description" />
            </Typography>
            <MultipleImagesField source="pair:depictedBy" max={2} />
          </FullWidthBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <FullWidthBox className={classes.innerContainer}>
            <Typography component="h3" className={classes.subtitle}>
              <span>Informations pratiques</span>
            </Typography>
            <FullWidthBox className={classes.identityContainer}>
              <ImageField source="petr:logo" />
              <FullWidthBox className={classes.addressContainer}>
                <Typography component="p" variant="body3">
                  Todo : Adresse
                </Typography>
              </FullWidthBox>
            </FullWidthBox>
            <Typography component="h3" className={classes.subtitle}>
              <span>Contact</span>
            </Typography>
            <FullWidthBox className={classes.contactContainer}>
              <UrlField source="pair:webPage" />
              </FullWidthBox>
          </FullWidthBox>
        </Grid>
      </Grid>
    </Show>
  );
};

export default OrganizationShowInWebSite;