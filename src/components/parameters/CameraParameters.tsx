import React from 'react';
import { CameraParameters as CameraParametersType } from '../../types/parameters';

interface CameraParametersProps {
  parameters: CameraParametersType;
  onChange: (value: Partial<CameraParametersType>) => void;
}

export const CameraParameters: React.FC<CameraParametersProps> = ({
  parameters,
  onChange
}) => {
  const handleChange = (key: keyof CameraParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const layoutOptions = [
    { value: 'portrait', label: 'Portrait', icon: '📱' },
    { value: 'landscape', label: 'Landscape', icon: '🖼️' },
    { value: 'square', label: 'Square', icon: '⬛' }
  ];

  const compositionOptions = [
    { value: 'centered', label: 'Centered', icon: '🎯' },
    { value: 'rule of thirds', label: 'Rule of Thirds', icon: '📐' },
    { value: 'golden ratio', label: 'Golden Ratio', icon: '📏' }
  ];

  const effectOptions = [
    { value: 'blur', label: 'Blur', icon: '🌫️' },
    { value: 'vignette', label: 'Vignette', icon: '⭕' },
    { value: 'grain', label: 'Grain', icon: '🎞️' },
    { value: 'sepia', label: 'Sepia', icon: '🟤' },
    { value: 'black and white', label: 'Black & White', icon: '⚫' }
  ];

  const renderOptionSection = (
    title: string,
    options: typeof layoutOptions,
    currentValue: { value: string; label: string; icon: string },
    onChange: (value: { value: string; label: string; icon: string }) => void
  ) => (
    <div className="option-section">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue?.value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderEffectsSection = () => (
    <div className="option-section">
      <h4>Effects</h4>
      <div className="option-grid">
        {effectOptions.map((option) => (
          <button
            key={option.value}
            className={`option-button ${parameters.effects?.includes(option.value) ? 'selected' : ''}`}
            onClick={() => {
              const newEffects = parameters.effects?.includes(option.value)
                ? parameters.effects.filter(e => e !== option.value)
                : [...(parameters.effects || []), option.value];
              handleChange('effects', newEffects);
            }}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="camera-parameters">
      <div className="form-section">
        <h3>Camera Settings</h3>

        {renderOptionSection(
          'Layout',
          layoutOptions,
          { value: parameters.layout, label: parameters.layout, icon: '📷' },
          (value) => handleChange('layout', value.value)
        )}

        {renderOptionSection(
          'Composition',
          compositionOptions,
          { value: parameters.composition, label: parameters.composition, icon: '🎨' },
          (value) => handleChange('composition', value.value)
        )}

        {renderEffectsSection()}
      </div>
    </div>
  );
}; 