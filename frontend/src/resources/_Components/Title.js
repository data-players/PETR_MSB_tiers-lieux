import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BackButton from '../../components/BackButton';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.primary.main
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'capitalize'
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    padding: 4
  },
  icon: {
    width: 20
  },
  buttonLabel: {
    paddingLeft: 6
  }
}));

const Title = ({ record, hasBackButton }) => {
  const classes = useStyles();
  return (
    <h1 className={classes.container}>
      <span className={classes.title}>
        {record ? record['pair:label'] : ''}
      </span>
      { hasBackButton &&
        <BackButton className={classes.button} >
          <ArrowBackIcon className={classes.icon} />
          <span className={classes.buttonLabel}>Retour</span>
        </BackButton>
      }
    </h1>
  );
};

export default Title