import React from 'react';

const UrlArrayField = ({ record, source }) => {
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
          <a href={'https://' + item} target="_blank">
            {item}
          </a>
        </div>
      ))
    : null;
};
UrlArrayField.defaultProps = { addLabel: true };


export default UrlArrayField;