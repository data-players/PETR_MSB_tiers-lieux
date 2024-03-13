import React, { useState, useEffect } from 'react';
import { useList, ListContextProvider, SimpleList,} from 'react-admin';
import { Container, Avatar,Link, Box, makeStyles } from '@material-ui/core';
import OrganizationIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    resultsContainer: {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'stretch',
      textAlign : 'initial',
      gap :'20px'
    },
    resultItem: {
      color: 'white !important',
      display : 'flex',
      flexDirection : 'row',
      gap :'20px',
      textDecoration: 'none',
      '&:visited': {
        color: '!important',
      },
      '&:hover': {
        textDecoration: 'none',
      },
      padding : '10px',
      backgroundColor: theme.palette.secondary.main,
      border: 'transparent',
      borderRadius : '8px'

    },
    resultItemSubList: {
      listStyleType: 'square',
    }
  }));

const List = ({ theme, results,selectedResource }) => {

  const classes = useStyles(theme);

  return (
    <Box className={classes.resultsContainer}>
        { results?.dataByResource?.map((record, index) => (
            <Link className={classes.resultItem} color="secondary" key={record.id} href={'/Organization/'+encodeURIComponent(record.id)+'/show'}>
                <Box>
                    <OrganizationIcon></OrganizationIcon>
                </Box>
                <Box>
                    <Box >{record?.resourceData?.['pair:label']}</Box>
                    <ul className={classes.resultItemSubList}>
                    { record?.list?.map((item) => (
                        <li key={record.id+item}>{item}</li>
                    ))}
                    </ul>
                </Box>
            </Link>
        ))}
    </Box>
  );
};

export default List;