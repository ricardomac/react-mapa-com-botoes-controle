import React from 'react';
import Sidebar from './components/Sidebar';
import 'leaflet/dist/leaflet.css';
import { MapComponent } from './components/MapComponent';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
