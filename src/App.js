import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import AppDrawer from './components/AppDrawer/AppDrawer';
import VinylGallery from './components/VinylGallery';

function App() {
  return (
    <div className="App sans-serif">
      <div className='flex'>
        <AppDrawer />
        <div>
          <Header />
          <Main />
        </div>
      </div>
      <VinylGallery />
    </div>
  );
}

export default App;
