import React from 'react';
import { useSelector } from 'react-redux';

import EquipmentListInAdmin from "./EquipmentListInAdmin";
import EquipmentListInWebSite from "./EquipmentListInWebSite";

const EquipmentList = ({...props}) => {
  
  const state = useSelector(state => state);
  const isAdminContext = state.customState.isAdminContext;
  
  return (
    isAdminContext 
      ? <EquipmentListInAdmin {...props} />
      : <EquipmentListInWebSite {...props}/>
  );
};

export default EquipmentList;