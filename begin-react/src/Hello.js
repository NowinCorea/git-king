import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color, fontWeight: 'bold' }}>안녕하세요 {name} </div>;
}

Hello.defaultProps = {
  name: 'nameless',
};

export default Hello;
