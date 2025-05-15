import React from 'react';
import { BackgroundParameters as BackgroundParametersType } from '../../types/parameters';

interface BackgroundParametersProps {
  parameters: BackgroundParametersType;
  onChange: (value: Partial<BackgroundParametersType>) => void;
}

export const BackgroundParameters: React.FC<BackgroundParametersProps> = ({ parameters, onChange }) => {
  const handleChange = (field: keyof BackgroundParametersType, value: string) => {
    onChange({ [field]: value });
  };

  const typeOptions = [
    { value: 'solid color', label: 'Solid Color', icon: '🎨' },
    { value: 'gradient', label: 'Gradient', icon: '🌈' },
    { value: 'pattern', label: 'Pattern', icon: '🔲' },
    { value: 'image', label: 'Image', icon: '🖼️' }
  ];

  const colorOptions = [
    { value: 'white', label: 'White', icon: '⚪' },
    { value: 'black', label: 'Black', icon: '⚫' },
    { value: 'gray', label: 'Gray', icon: '⚫' },
    { value: 'blue', label: 'Blue', icon: '🔵' },
    { value: 'green', label: 'Green', icon: '🟢' },
    { value: 'red', label: 'Red', icon: '🔴' },
    { value: 'yellow', label: 'Yellow', icon: '🟡' },
    { value: 'purple', label: 'Purple', icon: '🟣' }
  ];

  const environmentOptions = [
    { value: 'indoor', label: 'Indoor', icon: '🏠' },
    { value: 'outdoor', label: 'Outdoor', icon: '🌳' },
    { value: 'urban', label: 'Urban', icon: '🌆' },
    { value: 'nature', label: 'Nature', icon: '🌲' },
    { value: 'abstract', label: 'Abstract', icon: '🎨' }
  ];

  const renderOptionButtons = (
    options: typeof typeOptions,
    currentValue: string,
    onChange: (value: string) => void
  ) => (
    <div className="option-grid">
      {options.map((option) => (
        <button
          key={option.value}
          className={`option-button ${currentValue === option.value ? 'selected' : ''}`}
          onClick={() => onChange(option.value)}
        >
          <span className="option-icon">{option.icon}</span>
          <span className="option-label">{option.label}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="background-parameters">
      <div className="form-section">
        <h3>Background Details</h3>

        <div className="form-group">
          <label className="form-label">Type</label>
          {renderOptionButtons(
            typeOptions,
            parameters.type,
            (value) => handleChange('type', value)
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Color</label>
          {renderOptionButtons(
            colorOptions,
            parameters.color,
            (value) => handleChange('color', value)
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Environment</label>
          {renderOptionButtons(
            environmentOptions,
            parameters.environment,
            (value) => handleChange('environment', value)
          )}
        </div>
      </div>
    </div>
  );
}; 