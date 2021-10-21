import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import useStyles from './PageUseStyles';

const SearchPage = () => {
  const classes = useStyles();
  return (
    <>
      <BreadcrumbsItem to='/Search'>Rechercher</BreadcrumbsItem>
      <Box className={classes.mainContainer}>
        <Typography variant="h1" component="h1" className={classes.textAlignCenter}>
          Page de recherche
        </Typography>
      </Box>
    </>
  )
}

export default SearchPage;