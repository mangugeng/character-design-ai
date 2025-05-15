import React, { useState } from 'react';
import { BodyParameters as BodyParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface BodyParametersProps {
  parameters: BodyParametersType;
  onChange: (value: BodyParametersType) => void;
  language?: 'en' | 'id';
}

export const BodyParameters: React.FC<BodyParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
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
    { value: 'short', label: translations.short, icon: '📏' },
    { value: 'average', label: translations.average, icon: '📐' },
    { value: 'tall', label: translations.tall || 'Tall', icon: '📏' }
  ];

  const buildOptions = [
    { value: 'slim', label: translations.slim, icon: '🧍' },
    { value: 'athletic', label: translations.athletic, icon: '🏃' },
    { value: 'average', label: translations.average, icon: '🚶' },
    { value: 'curvy', label: translations.curvy, icon: '🧍‍♀️' },
    { value: 'muscular', label: translations.muscular, icon: '💪' }
  ];

  const skinToneOptions = [
    { value: 'light', label: translations.light, icon: '👋' },
    { value: 'medium', label: translations.mediumTone, icon: '✋' },
    { value: 'dark', label: translations.dark, icon: '🤚' },
    { value: 'very dark', label: translations.veryDark || 'Very Dark', icon: '🖐️' }
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
    <div className="body-parameters parameters-scrollable">
     
      <div className="form-section">
        <div className="parameter-section">
          {renderOptionSection(
            translations.heightProp,
            heightOptions,
            parameters.proportions.height,
            (value) => handleChange('proportions', { ...parameters.proportions, height: value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.build,
            buildOptions,
            parameters.proportions.build,
            (value) => handleChange('proportions', { ...parameters.proportions, build: value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.skinTone,
            skinToneOptions,
            parameters.features.skinTone,
            (value) => handleChange('features', { ...parameters.features, skinTone: value })
          )}
        </div>

        <div className="parameter-section">
          <div className="form-group">
            <label className="form-label">{translations.scars}</label>
            <input
              type="text"
              value={parameters.features.scars.join(', ')}
              onChange={(e) => handleChange('features', { ...parameters.features, scars: e.target.value.split(',').map(item => item.trim()) })}
              className="form-control"
              placeholder={language === 'en' ? "Enter scars separated by commas" : "Masukkan bekas luka dipisahkan dengan koma"}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{translations.tattoos}</label>
            <input
              type="text"
              value={parameters.features.tattoos.join(', ')}
              onChange={(e) => handleChange('features', { ...parameters.features, tattoos: e.target.value.split(',').map(item => item.trim()) })}
              className="form-control"
              placeholder={language === 'en' ? "Enter tattoos separated by commas" : "Masukkan tato dipisahkan dengan koma"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 