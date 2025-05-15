import React from 'react';
import { Preset } from '@/types/parameters';

interface PresetDisplayProps {
  preset: Preset;
  onLoad: () => void;
  onDelete: () => void;
}

export const PresetDisplay: React.FC<PresetDisplayProps> = ({
  preset,
  onLoad,
  onDelete
}) => {
  return (
    <div className="preset-display">
      <div className="preset-header">
        <h4>{preset.basic.name || 'Unnamed Preset'}</h4>
        <div className="preset-actions">
          <button className="load-button" onClick={onLoad}>
            Load
          </button>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="preset-section">
        <p>Simplified preset display for deployment.</p>
      </div>
    </div>
  );
}; 