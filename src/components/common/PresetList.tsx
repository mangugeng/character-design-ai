import React, { useState, useEffect } from 'react';
import { Preset } from '@/types/parameters';
import { PresetDisplay } from './PresetDisplay';

interface PresetListProps {
  onLoadPreset: (presetName: string) => void;
  onDeletePreset: (presetName: string) => void;
  onClearPresets: () => void;
}

export const PresetList: React.FC<PresetListProps> = ({
  onLoadPreset,
  onDeletePreset,
  onClearPresets
}) => {
  const [presets, setPresets] = useState<Record<string, Preset>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedPresets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    setPresets(storedPresets);
  }, []);

  const filteredPresets = Object.entries(presets).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="preset-list">
      <div className="preset-list-header">
        <h2>Saved Presets</h2>
        <div className="preset-list-actions">
          <input
            type="text"
            placeholder="Search presets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="preset-search"
          />
          <button onClick={onClearPresets} className="clear-button">
            <i className="fas fa-trash"></i> Clear All
          </button>
        </div>
      </div>
      <div className="preset-list-content">
        {filteredPresets.length === 0 ? (
          <p className="no-presets">No presets found</p>
        ) : (
          filteredPresets.map(([name, preset]) => (
            <PresetDisplay
              key={name}
              preset={preset}
              onLoad={() => onLoadPreset(name)}
              onDelete={() => onDeletePreset(name)}
            />
          ))
        )}
      </div>
    </div>
  );
}; 