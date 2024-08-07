import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { ReferenceFilter } from '@semapps/list-components';
import { FilterLiveSearch} from 'react-admin';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0,
    order:-1,
    marginRight:10,
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

const PersonSidebar = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <FilterLiveSearch label="Rechercher" source="q" />
      <CardContent className={classes.cardContent}>
        <ReferenceFilter
          reference="Topic"
          source="pair:hasTopic"
          // inverseSource="pair:TopicOf"
          sort={{ field: 'pair:label', order: 'ASC' }}
          limit={100}
        />
      </CardContent>
    </Card>
  );
};

export default PersonSidebar;
