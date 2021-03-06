import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';
import ChevronRightIcon from '../../../svg/ChevronRightIcon';
import {ListBase, useShowContext} from 'react-admin';
import { Link } from 'react-router-dom';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: 40,
    borderTop: '1px lightgrey solid',
  },
  container: {
    marginTop: 40,
    marginBottom: 0
  },
  header: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  link: {
    alignSelf: 'flex-end',
    flexShrink: '0',
    textDecoration: 'none',
    display: 'flex',
    flewWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: '10',
    marginLeft: '20px',
    marginTop: '10px',
    '& .MuiTypography-root': {
      color: theme.palette.secondary.main,
    },
    '& svg [fill]': {
      fill: theme.palette.secondary.main,
    },
    '& svg': {
      height: '12px',
    },
  },
  listBase: {
    overflowY: 'hidden',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      overflowX: 'scroll',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      overflowX: 'scroll',
      flexShrink: '0',
    },
  },
}));

const SimilarList = ({ resource, basePath, title, subtitle, headComment, linkText, CardSubHeaderComponent }) => {
  const classes = useStyles();
  const { record } = useShowContext();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container}>
        <Box width={1} className={classes.header}>
          <Box>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3" component="div">
              {subtitle}
            </Typography>
            <Typography variant="body2" component="div">
              {headComment}
            </Typography>
          </Box>
          <Link to={basePath} className={classes.link}>
            <Typography variant="button" className="button2">
              {linkText}
            </Typography>
            <ChevronRightIcon />
          </Link>
        </Box>
        <Box className={classes.listBase}>
          <ListBase resource={resource} basePath={basePath}>
            <ItemsGrid similarRecord={record} CardSubHeaderComponent={CardSubHeaderComponent} />
          </ListBase>
        </Box>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default SimilarList;
