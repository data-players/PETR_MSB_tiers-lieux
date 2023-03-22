import React from 'react';
import { useRecordContext } from 'react-admin';

const UrlArrayField = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null
  let links = typeof record[source] === 'string' ? [record[source]] : record[source];
  let index = 0;
  for (let link of links) {
    if (link.startsWith('https://')) {
      links[index] = link.split('https://')[1];
    }
    index++;
  }

  return record
    ? links.map(item => (
        <div>
          <a href={'https://' + item} target="_blank" rel="noopener noreferrer">
            {item}
          </a>
        </div>
      ))
    : null;
};
UrlArrayField.defaultProps = { addLabel: true };


export default UrlArrayField;