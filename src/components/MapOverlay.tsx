import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';

interface MapOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  isDraggable?: boolean;
  initialPosition?: { x: number; y: number };
  className?: string;
}

export const MapOverlay: React.FC<MapOverlayProps> = ({
  isOpen,
  onClose,
  title,
  children,
  isDraggable = true,
  initialPosition = { x: 20, y: 80 },
  className = '',
}) => {
  if (!isOpen) return null;

  const content = (
    <div className={`map-overlay absolute bg-white rounded-lg shadow-lg ${className}`}
         style={{ 
           left: !isDraggable ? initialPosition.x : undefined,
           top: !isDraggable ? initialPosition.y : undefined,
           width: '320px'
         }}>
      <div className={`p-4 bg-gray-100 rounded-t-lg flex justify-between items-center ${isDraggable ? 'cursor-move handle' : ''}`}>
        <h3 className="font-semibold select-none">{title}</h3>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }} 
          className="hover:bg-gray-200 p-1 rounded transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );

  return isDraggable ? (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultPosition={initialPosition}
    >
      {content}
    </Draggable>
  ) : content;
};