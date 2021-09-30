import React from 'react';
import { useSelector } from 'react-redux';

import EquipmentShowInAdmin from "./EquipmentShowInAdmin";
import EquipmentShowInWebSite from "./EquipmentShowInWebSite";

const EquipmentShow = ({...props}) => {
  
  const state = useSelector(state => state);
  const isAdminContext = state.customState.isAdminContext;
  
  return (
    isAdminContext 
      ? <EquipmentShowInAdmin {...props} />
      : <EquipmentShowInWebSite {...props}/>
  );
};

export default EquipmentShow;