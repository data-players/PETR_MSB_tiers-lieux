import React from 'react';

const SpaceTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default SpaceTitle
