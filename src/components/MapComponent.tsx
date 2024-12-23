import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Plus, Info } from 'lucide-react';
import { MapOverlay } from './MapOverlay';

export const MapComponent: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={[-23.5505, -46.6333]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setIsPanelOpen(true)}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          title="Abrir painel arrastável"
        >
          <Plus size={24} />
        </button>
        <button
          onClick={() => setIsInfoOpen(true)}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          title="Mostrar informações"
        >
          <Info size={24} />
        </button>
      </div>

      {/* Exemplo de overlay arrastável */}
      <MapOverlay
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title="Painel Arrastável"
        isDraggable={true}
      >
        <p>Este é um painel que você pode arrastar pela área do mapa usando a barra superior.</p>
      </MapOverlay>

    </div>
  );
};