import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useRecordContext } from 'react-admin';

import { 
  SHOW_ORGANIZATION_DETAIL
} from '../../customActions';

const OrganizationShowLoader = () => {
  const record = useRecordContext();
  const localStorageRecord = JSON.parse(localStorage.getItem('organization'));
  const payload = (record && record.type === 'pair:Organization') ? record : localStorageRecord;
  const dispatch = useDispatch();
  useEffect(() => {
    if( payload ) {
      dispatch({ 
        type: SHOW_ORGANIZATION_DETAIL,
        payload: payload
      })
      localStorage.setItem('organization', JSON.stringify(payload));
    }
  }, []);
  return null;
}

export default OrganizationShowLoader;