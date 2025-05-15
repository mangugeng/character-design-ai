import React from 'react';
import { HeadParameters as HeadParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface HeadParametersProps {
  parameters: HeadParametersType;
  onChange: (value: HeadParametersType) => void;
  language?: 'en' | 'id';
}

export const HeadParameters: React.FC<HeadParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const handleChange = (key: keyof HeadParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const shapeOptions = [
    { value: 'round', label: translations.round, icon: '⭕' },
    { value: 'oval', label: translations.oval, icon: '🔵' },
    { value: 'square', label: translations.squareShape, icon: '⬛' },
    { value: 'heart', label: translations.heart, icon: '❤️' },
    { value: 'diamond', label: translations.diamond, icon: '💎' }
  ];

  const hairStyleOptions = [
    { value: 'short', label: translations.short, icon: '✂️' },
    { value: 'medium', label: translations.medium, icon: '💇' },
    { value: 'long', label: translations.long, icon: '💇‍♀️' },
    { value: 'curly', label: translations.curly, icon: '🔄' },
    { value: 'wavy', label: translations.wavy, icon: '🌊' }
  ];

  const hairColorOptions = [
    { value: 'black', label: translations.blackColor, icon: '⚫' },
    { value: 'brown', label: translations.brownColor, icon: '🟤' },
    { value: 'blonde', label: translations.blonde, icon: '🟡' },
    { value: 'red', label: translations.redColor, icon: '🔴' },
    { value: 'gray', label: translations.gray, icon: '⚪' }
  ];

  const eyesOptions = [
    { value: 'almond', label: translations.almond, icon: '👁️' },
    { value: 'round', label: translations.round, icon: '👀' },
    { value: 'narrow', label: translations.narrow, icon: '😑' },
    { value: 'wide', label: translations.wide, icon: '😳' }
  ];

  const noseOptions = [
    { value: 'straight', label: translations.straight, icon: '👃' },
    { value: 'button', label: translations.button, icon: '🔘' },
    { value: 'roman', label: translations.roman, icon: '🏛️' },
    { value: 'nubian', label: translations.nubian, icon: '🏺' }
  ];

  const mouthOptions = [
    { value: 'full', label: translations.full, icon: '👄' },
    { value: 'thin', label: translations.thin, icon: '😐' },
    { value: 'wide', label: translations.wide, icon: '😃' },
    { value: 'small', label: translations.small, icon: '😊' }
  ];

  const earsOptions = [
    { value: 'normal', label: translations.normal, icon: '👂' },
    { value: 'pointed', label: translations.pointed, icon: '🧝' },
    { value: 'small', label: translations.small, icon: '👂' },
    { value: 'large', label: translations.large, icon: '👂' }
  ];

  const renderOptionSection = (
    title: string,
    options: typeof shapeOptions,
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

  // Get current values with defaults
  const currentShape = { value: parameters?.shape || 'oval', label: parameters?.shape || translations.oval, icon: '👤' };
  const currentHairStyle = { value: parameters?.hair?.style || 'short', label: parameters?.hair?.style || translations.short, icon: '💇' };
  const currentHairColor = { value: parameters?.hair?.color || 'black', label: parameters?.hair?.color || translations.blackColor, icon: '🎨' };
  const currentEyes = { value: parameters?.face?.eyes || 'almond', label: parameters?.face?.eyes || translations.almond, icon: '👁️' };
  const currentNose = { value: parameters?.face?.nose || 'straight', label: parameters?.face?.nose || translations.straight, icon: '👃' };
  const currentMouth = { value: parameters?.face?.mouth || 'full', label: parameters?.face?.mouth || translations.full, icon: '👄' };
  const currentEars = { value: parameters?.face?.ears || 'normal', label: parameters?.face?.ears || translations.normal, icon: '👂' };

  return (
    <div className="head-parameters parameters-scrollable">
      
      <div className="form-section">
        <div className="parameter-section">
          {renderOptionSection(
            translations.headShape,
            shapeOptions,
            currentShape,
            (value) => handleChange('shape', value.value)
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.hairStyle,
            hairStyleOptions,
            currentHairStyle,
            (value) => handleChange('hair', { ...(parameters?.hair || {}), style: value.value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.hairColor,
            hairColorOptions,
            currentHairColor,
            (value) => handleChange('hair', { ...(parameters?.hair || {}), color: value.value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.eyes,
            eyesOptions,
            currentEyes,
            (value) => handleChange('face', { ...(parameters?.face || {}), eyes: value.value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.nose,
            noseOptions,
            currentNose,
            (value) => handleChange('face', { ...(parameters?.face || {}), nose: value.value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.mouth,
            mouthOptions,
            currentMouth,
            (value) => handleChange('face', { ...(parameters?.face || {}), mouth: value.value })
          )}
        </div>

        <div className="parameter-section">
          {renderOptionSection(
            translations.ears,
            earsOptions,
            currentEars,
            (value) => handleChange('face', { ...(parameters?.face || {}), ears: value.value })
          )}
        </div>
      </div>
    </div>
  );
}; 