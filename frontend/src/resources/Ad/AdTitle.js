import React from 'react';

const AdTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default AdTitle;
