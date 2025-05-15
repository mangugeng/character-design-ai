import React, { useState } from 'react';
import { BodyParameters as BodyParametersType } from '../../types/parameters';

interface BodyParametersProps {
  parameters: BodyParametersType;
  onChange: (value: BodyParametersType) => void;
}

export const BodyParameters: React.FC<BodyParametersProps> = ({
  parameters,
  onChange
}) => {
  const handleChange = (key: keyof BodyParametersType, value: any) => {
    if (key === 'proportions') {
      onChange({
        ...parameters,
        proportions: value
      });
    } else if (key === 'features') {
      onChange({
        ...parameters,
        features: value
      });
    }
  };

  const heightOptions = [
    { value: 'short', label: 'Short', icon: '📏' },
    { value: 'average', label: 'Average', icon: '📐' },
    { value: 'tall', label: 'Tall', icon: '📏' }
  ];

  const buildOptions = [
    { value: 'slim', label: 'Slim', icon: '🧍' },
    { value: 'athletic', label: 'Athletic', icon: '🏃' },
    { value: 'average', label: 'Average', icon: '🚶' },
    { value: 'curvy', label: 'Curvy', icon: '🧍‍♀️' },
    { value: 'muscular', label: 'Muscular', icon: '💪' }
  ];

  const skinToneOptions = [
    { value: 'light', label: 'Light', icon: '👋' },
    { value: 'medium', label: 'Medium', icon: '✋' },
    { value: 'dark', label: 'Dark', icon: '🤚' },
    { value: 'very dark', label: 'Very Dark', icon: '🖐️' }
  ];

  const renderOptionSection = (
    title: string,
    options: typeof heightOptions,
    currentValue: { value: string; label: string; icon: string },
    onChange: (value: { value: string; label: string; icon: string }) => void
  ) => (
    <div className="option-section">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue.value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="body-parameters">
      <div className="form-section">
        <h3>Body Details</h3>

        {renderOptionSection(
          'Height',
          heightOptions,
          parameters.proportions.height,
          (value) => handleChange('proportions', { ...parameters.proportions, height: value })
        )}

        {renderOptionSection(
          'Build',
          buildOptions,
          parameters.proportions.build,
          (value) => handleChange('proportions', { ...parameters.proportions, build: value })
        )}

        {renderOptionSection(
          'Skin Tone',
          skinToneOptions,
          parameters.features.skinTone,
          (value) => handleChange('features', { ...parameters.features, skinTone: value })
        )}

        <div className="form-group">
          <label className="form-label">Scars</label>
          <input
            type="text"
            value={parameters.features.scars.join(', ')}
            onChange={(e) => handleChange('features', { ...parameters.features, scars: e.target.value.split(',').map(item => item.trim()) })}
            className="form-control"
            placeholder="Enter scars separated by commas"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Tattoos</label>
          <input
            type="text"
            value={parameters.features.tattoos.join(', ')}
            onChange={(e) => handleChange('features', { ...parameters.features, tattoos: e.target.value.split(',').map(item => item.trim()) })}
            className="form-control"
            placeholder="Enter tattoos separated by commas"
          />
        </div>
      </div>
    </div>
  );
}; 