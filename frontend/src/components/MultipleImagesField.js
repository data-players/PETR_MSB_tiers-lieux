import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useRecordContext } from 'react-admin';

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

const MultipleImagesField = ({ source, label }) => {
  const classes = useStyles();
  const record = useRecordContext();
  if( !record || !record[source] ) return null;
  let imagesArray = [];
  if( Array.isArray(record[source]) ) {
    imagesArray = record[source];
  } else {
    imagesArray.push(record[source]);
  }
  return(
    <>
      {label
        ? <h6>{source}</h6>
        : null
      }
      <Grid container spacing={2}>
        {imagesArray.slice(0,imagesArray.length).map((url, i) => (
          <Grid item xs={6} key={i} className={classes.images}>
            <img src={url} alt={record['pair:label']}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
};

export default MultipleImagesField;