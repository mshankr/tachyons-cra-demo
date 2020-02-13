import React from 'react';
import Main from './components/Main';
import AppDrawer from './components/AppDrawer/AppDrawer';

function App() {
  return (
    <div className="App sans-serif">
      <div className='flex'>
        <AppDrawer />
        <Main />
        </div>
    </div>
  );
}

export default App;
