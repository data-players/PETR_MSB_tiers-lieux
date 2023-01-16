import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { TextField } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'block',
    padding: theme.spacing(2),
    border: '1px solid lightgrey',
  },
}));

const OrganizationShowMainTitle = ({label}) => {
  const classes = useStyles();
  return (
    <Typography component="h2" variant="h3" className={classes.title}>
      <span style={{color: "#e13384"}} >{label}</span><TextField source="pair:label" variant="h3" style={{color: "#e13384"}}/>
    </Typography>
  );
};

export default OrganizationShowMainTitle;