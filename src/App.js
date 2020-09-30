import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        {/*Component for Side Bar to the left*/}
        {/*Chat field*/}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
