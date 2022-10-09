import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'coral',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    <Wrapper>
      <Hello color="cornflowerblue" name="KingChan" />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;
