import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TopToolbar as RaTopToolbar } from 'react-admin';
import BackButton from './BackButton';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    color: theme.palette.primary.main
  }
}));

const TopToolbar = ({ record, hasBackButton }) => {
  const classes = useStyles();
  console.log(record, hasBackButton);
  return (
    <RaTopToolbar className={classes.container}>
      <Title record={record} />
      { hasBackButton && <BackButton /> }
    </RaTopToolbar>
  );
};

export default TopToolbar