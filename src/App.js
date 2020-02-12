import React from 'react';
import VinylGallery from './components/VinylGallery';
import AppDrawer from './components/AppDrawer/AppDrawer';

function App() {
  return (
    <div className="App">
        <AppDrawer />
        <VinylGallery />
    </div>
  );
}

export default App;
