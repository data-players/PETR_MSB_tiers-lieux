import React from 'react';

const EquipmentTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default EquipmentTitle