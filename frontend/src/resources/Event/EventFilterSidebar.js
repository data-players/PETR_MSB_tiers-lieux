import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { ReferenceFilter } from '@semapps/archipelago-layout';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: '15em',
      marginLeft: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  cardContent: {
    paddingTop: 0
  }
}));

const EventFilterSidebar = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <ReferenceFilter
          reference="Topic"
          source="pair:hasTopic"
          // inverseSource="pair:TopicOf"
          sort={{ field: 'pair:label', order: 'DESC' }}
          limit={100}
        />
      </CardContent>
    </Card>
  );
};

export default EventFilterSidebar;
