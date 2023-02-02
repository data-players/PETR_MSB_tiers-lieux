import React from 'react';
import useStyles from '../resources/Organization/OrganizationShow/OrganizationShowUseStyles';

const CustomLabel = ({label}) => {
    const classes = useStyles();
    return (
      <span className={classes.label}>{label}</span>
    )
  }

  export default CustomLabel;