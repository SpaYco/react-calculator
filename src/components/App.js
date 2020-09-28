import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

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
