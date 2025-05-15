import React from 'react';
import { HeadParameters as HeadParametersType } from '../../types/parameters';

interface HeadParametersProps {
  parameters: HeadParametersType;
  onChange: (value: HeadParametersType) => void;
}

export const HeadParameters: React.FC<HeadParametersProps> = ({
  parameters,
  onChange
}) => {
  const handleChange = (key: keyof HeadParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const shapeOptions = [
    { value: 'round', label: 'Round', icon: '⭕' },
    { value: 'oval', label: 'Oval', icon: '🔵' },
    { value: 'square', label: 'Square', icon: '⬛' },
    { value: 'heart', label: 'Heart', icon: '❤️' },
    { value: 'diamond', label: 'Diamond', icon: '💎' }
  ];

  const hairStyleOptions = [
    { value: 'short', label: 'Short', icon: '✂️' },
    { value: 'medium', label: 'Medium', icon: '💇' },
    { value: 'long', label: 'Long', icon: '💇‍♀️' },
    { value: 'curly', label: 'Curly', icon: '🔄' },
    { value: 'wavy', label: 'Wavy', icon: '🌊' }
  ];

  const hairColorOptions = [
    { value: 'black', label: 'Black', icon: '⚫' },
    { value: 'brown', label: 'Brown', icon: '🟤' },
    { value: 'blonde', label: 'Blonde', icon: '🟡' },
    { value: 'red', label: 'Red', icon: '🔴' },
    { value: 'gray', label: 'Gray', icon: '⚪' }
  ];

  const eyesOptions = [
    { value: 'almond', label: 'Almond', icon: '👁️' },
    { value: 'round', label: 'Round', icon: '👀' },
    { value: 'narrow', label: 'Narrow', icon: '😑' },
    { value: 'wide', label: 'Wide', icon: '😳' }
  ];

  const noseOptions = [
    { value: 'straight', label: 'Straight', icon: '👃' },
    { value: 'button', label: 'Button', icon: '🔘' },
    { value: 'roman', label: 'Roman', icon: '🏛️' },
    { value: 'nubian', label: 'Nubian', icon: '🏺' }
  ];

  const mouthOptions = [
    { value: 'full', label: 'Full', icon: '👄' },
    { value: 'thin', label: 'Thin', icon: '😐' },
    { value: 'wide', label: 'Wide', icon: '😃' },
    { value: 'small', label: 'Small', icon: '😊' }
  ];

  const earsOptions = [
    { value: 'normal', label: 'Normal', icon: '👂' },
    { value: 'pointed', label: 'Pointed', icon: '🧝' },
    { value: 'small', label: 'Small', icon: '👂' },
    { value: 'large', label: 'Large', icon: '👂' }
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
  const currentShape = { value: parameters?.shape || 'oval', label: parameters?.shape || 'Oval', icon: '👤' };
  const currentHairStyle = { value: parameters?.hair?.style || 'short', label: parameters?.hair?.style || 'Short', icon: '💇' };
  const currentHairColor = { value: parameters?.hair?.color || 'black', label: parameters?.hair?.color || 'Black', icon: '🎨' };
  const currentEyes = { value: parameters?.face?.eyes || 'almond', label: parameters?.face?.eyes || 'Almond', icon: '👁️' };
  const currentNose = { value: parameters?.face?.nose || 'straight', label: parameters?.face?.nose || 'Straight', icon: '👃' };
  const currentMouth = { value: parameters?.face?.mouth || 'full', label: parameters?.face?.mouth || 'Full', icon: '👄' };
  const currentEars = { value: parameters?.face?.ears || 'normal', label: parameters?.face?.ears || 'Normal', icon: '👂' };

  return (
    <div className="head-parameters">
      <div className="form-section">
        <h3>Head Details</h3>

        {renderOptionSection(
          'Face Shape',
          shapeOptions,
          currentShape,
          (value) => handleChange('shape', value.value)
        )}

        {renderOptionSection(
          'Hair Style',
          hairStyleOptions,
          currentHairStyle,
          (value) => handleChange('hair', { ...(parameters?.hair || {}), style: value.value })
        )}

        {renderOptionSection(
          'Hair Color',
          hairColorOptions,
          currentHairColor,
          (value) => handleChange('hair', { ...(parameters?.hair || {}), color: value.value })
        )}

        {renderOptionSection(
          'Eyes',
          eyesOptions,
          currentEyes,
          (value) => handleChange('face', { ...(parameters?.face || {}), eyes: value.value })
        )}

        {renderOptionSection(
          'Nose',
          noseOptions,
          currentNose,
          (value) => handleChange('face', { ...(parameters?.face || {}), nose: value.value })
        )}

        {renderOptionSection(
          'Mouth',
          mouthOptions,
          currentMouth,
          (value) => handleChange('face', { ...(parameters?.face || {}), mouth: value.value })
        )}

        {renderOptionSection(
          'Ears',
          earsOptions,
          currentEars,
          (value) => handleChange('face', { ...(parameters?.face || {}), ears: value.value })
        )}
      </div>
    </div>
  );
}; 