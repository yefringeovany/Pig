import React from 'react';

const ClickInfo = ({ count, timestamp }) => (
  <div>
    <p>Cantidad de clics: <b>{count}</b></p>
    <p>Último clic: <b>{timestamp ? new Date(timestamp).toLocaleString() : '-'}</b></p>
  </div>
);

export default ClickInfo;
