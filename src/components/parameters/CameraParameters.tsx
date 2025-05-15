import React from 'react';
import { CameraParameters as CameraParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface CameraParametersProps {
  parameters: CameraParametersType;
  onChange: (value: Partial<CameraParametersType>) => void;
  language?: 'en' | 'id';
}

export const CameraParameters: React.FC<CameraParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const handleChange = (key: keyof CameraParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const layoutOptions = [
    { value: 'portrait', label: translations.portraitLayout, icon: '📱' },
    { value: 'landscape', label: translations.landscape, icon: '🖼️' },
    { value: 'square', label: translations.squareLayout, icon: '⬛' }
  ];

  const compositionOptions = [
    { value: 'centered', label: translations.center, icon: '🎯' },
    { value: 'rule of thirds', label: translations.rule_of_thirds, icon: '📐' },
    { value: 'golden ratio', label: translations.golden_ratio, icon: '📏' }
  ];

  const effectOptions = [
    { value: 'blur', label: language === 'en' ? 'Blur' : 'Blur', icon: '🌫️' },
    { value: 'vignette', label: language === 'en' ? 'Vignette' : 'Vignette', icon: '⭕' },
    { value: 'grain', label: language === 'en' ? 'Grain' : 'Bintik', icon: '🎞️' },
    { value: 'sepia', label: language === 'en' ? 'Sepia' : 'Sepia', icon: '🟤' },
    { value: 'black and white', label: language === 'en' ? 'Black & White' : 'Hitam & Putih', icon: '⚫' }
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
      <h4>{translations.cameraEffects}</h4>
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
      

        {renderOptionSection(
          translations.layoutType,
          layoutOptions,
          { value: parameters.layout, label: parameters.layout, icon: '📷' },
          (value) => handleChange('layout', value.value)
        )}

        {renderOptionSection(
          translations.composition,
          compositionOptions,
          { value: parameters.composition, label: parameters.composition, icon: '🎨' },
          (value) => handleChange('composition', value.value)
        )}

        {renderEffectsSection()}
      </div>
    </div>
  );
}; 