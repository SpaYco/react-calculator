import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const styles = {
  width: 700,
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  return (
    <div className="App" style={styles}>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
