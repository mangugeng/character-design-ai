import React, { useState } from 'react';

interface PresetFormProps {
  onSave: (presetName: string) => void;
}

export const PresetForm: React.FC<PresetFormProps> = ({ onSave }) => {
  const [presetName, setPresetName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!presetName.trim()) {
      setError('Nama preset tidak boleh kosong');
      return;
    }
    try {
      onSave(presetName);
      setPresetName('');
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menyimpan preset');
    }
  };

  return (
    <form className="preset-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="presetName">Save as Preset</label>
        <input
          type="text"
          id="presetName"
          value={presetName}
          onChange={(e) => setPresetName(e.target.value)}
          placeholder="Enter preset name"
          className={error ? 'error' : ''}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <button type="submit" className="save-button">
        Save Preset
      </button>
    </form>
  );
}; 