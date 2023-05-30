import React from 'react';

const PageTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default PageTitle;
