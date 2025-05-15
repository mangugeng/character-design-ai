import React from 'react';
import { BackgroundParameters as BackgroundParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface BackgroundParametersProps {
  parameters: BackgroundParametersType;
  onChange: (value: Partial<BackgroundParametersType>) => void;
  language?: 'en' | 'id';
}

export const BackgroundParameters: React.FC<BackgroundParametersProps> = ({ 
  parameters, 
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const handleChange = (field: keyof BackgroundParametersType, value: string) => {
    onChange({ [field]: value });
  };

  const typeOptions = [
    { value: 'solid color', label: language === 'en' ? 'Solid Color' : 'Warna Solid', icon: '🎨' },
    { value: 'gradient', label: translations.gradient, icon: '🌈' },
    { value: 'pattern', label: language === 'en' ? 'Pattern' : 'Pola', icon: '🔲' },
    { value: 'image', label: language === 'en' ? 'Image' : 'Gambar', icon: '🖼️' }
  ];

  const colorOptions = [
    { value: 'white', label: language === 'en' ? 'White' : 'Putih', icon: '⚪' },
    { value: 'black', label: language === 'en' ? 'Black' : 'Hitam', icon: '⚫' },
    { value: 'gray', label: language === 'en' ? 'Gray' : 'Abu-abu', icon: '⚫' },
    { value: 'blue', label: language === 'en' ? 'Blue' : 'Biru', icon: '🔵' },
    { value: 'green', label: language === 'en' ? 'Green' : 'Hijau', icon: '🟢' },
    { value: 'red', label: language === 'en' ? 'Red' : 'Merah', icon: '🔴' },
    { value: 'yellow', label: language === 'en' ? 'Yellow' : 'Kuning', icon: '🟡' },
    { value: 'purple', label: language === 'en' ? 'Purple' : 'Ungu', icon: '🟣' }
  ];

  const environmentOptions = [
    { value: 'indoor', label: translations.indoor, icon: '🏠' },
    { value: 'outdoor', label: translations.outdoor, icon: '🌳' },
    { value: 'urban', label: translations.urban, icon: '🌆' },
    { value: 'nature', label: translations.nature, icon: '🌲' },
    { value: 'abstract', label: language === 'en' ? 'Abstract' : 'Abstrak', icon: '🎨' }
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
       

        <div className="form-group">
          <label className="form-label">{translations.backgroundType}</label>
          {renderOptionButtons(
            typeOptions,
            parameters.type,
            (value) => handleChange('type', value)
          )}
        </div>

        <div className="form-group">
          <label className="form-label">{language === 'en' ? 'Color' : 'Warna'}</label>
          {renderOptionButtons(
            colorOptions,
            parameters.color,
            (value) => handleChange('color', value)
          )}
        </div>

        <div className="form-group">
          <label className="form-label">{translations.environmentType}</label>
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