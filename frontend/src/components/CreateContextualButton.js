import React from 'react';
import {
  CreateButton,
} from 'react-admin';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const CreateContextualButton = ({ record, parent, resource,reverseReference, children, ...otherProps }) => {
  const location = useLocation();
  let filter = {};
  filter[reverseReference]=encodeURIComponent(parent?.id);
  const search =  `source=${JSON.stringify(filter)}&redirectUri=${encodeURIComponent(location.pathname)}`
  const url=`../../${resource}/create`

  return (
    <CreateButton component={Link}
      label="créer"
      to={{
        pathname: url,
        search: search ,
      }}>
    </CreateButton>
  );

};


export default CreateContextualButton;
