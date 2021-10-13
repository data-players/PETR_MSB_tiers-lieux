import React from 'react';
import {
  EditButton,
} from 'react-admin';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const EditContextualButton = ({ record, parent, resource,reverseReference, children, ...otherProps }) => {
  const location = useLocation();
  let filter = {};
  filter[reverseReference]=encodeURIComponent(parent?.id);
  const search =  `redirectUri=${encodeURIComponent(location.pathname)}`
  const url=`../../${resource}/${encodeURIComponent(record?.id)}`

  return (
    <EditButton component={Link}
      label="éditer"
      to={{
        pathname: url,
        search: search ,
      }}>
    </EditButton>
  );

};


export default EditContextualButton;
