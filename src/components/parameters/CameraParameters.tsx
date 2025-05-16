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
    { value: 'golden ratio', label: translations.golden_ratio, icon: '📏' },
    { value: 'diagonal', label: translations.diagonal, icon: '↗️' },
    { value: 'triangle', label: translations.triangle, icon: '🔺' },
    { value: 'symmetrical', label: translations.symmetrical, icon: '↔️' },
    { value: 'framing', label: translations.framing, icon: '🖼️' },
    { value: 'leading lines', label: translations.leadingLines, icon: '➡️' }
  ];

  const cameraAngleOptions = [
    { value: 'long shot', label: translations.longShot, icon: '🏞️' },
    { value: 'medium shot', label: translations.mediumShot, icon: '👤' },
    { value: 'close-up', label: translations.closeUp, icon: '👁️' },
    { value: 'extreme close-up', label: translations.extremeCloseUp, icon: '🔍' },
    { value: 'bird\'s eye view', label: translations.birdEyeView, icon: '🦅' },
    { value: 'low angle', label: translations.lowAngle, icon: '⬆️' },
    { value: 'dutch angle', label: translations.dutchAngle, icon: '↗️' },
    { value: 'over the shoulder', label: translations.overTheShoulder, icon: '👥' }
  ];

  const lensSizeOptions = [
    { value: 'wide angle', label: translations.wideAngle, icon: '📷' },
    { value: 'standard', label: translations.standard, icon: '📷' },
    { value: 'telephoto', label: translations.telephoto, icon: '📸' },
    { value: 'macro', label: translations.macro, icon: '🔎' },
    { value: 'fisheye', label: translations.fisheye, icon: '👁️' },
    { value: 'prime', label: translations.prime, icon: '📷' },
    { value: 'zoom', label: translations.zoom, icon: '🔭' }
  ];

  const cameraBrandOptions = [
    { value: 'canon', label: translations.canon, icon: '📷' },
    { value: 'nikon', label: translations.nikon, icon: '📷' },
    { value: 'sony', label: translations.sony, icon: '📷' },
    { value: 'fujifilm', label: translations.fujifilm, icon: '📷' },
    { value: 'leica', label: translations.leica, icon: '📷' },
    { value: 'hasselblad', label: translations.hasselblad, icon: '📷' }
  ];

  const cameraTypeOptions = [
    { value: 'dslr', label: translations.dslr, icon: '📷' },
    { value: 'mirrorless', label: translations.mirrorless, icon: '📸' },
    { value: 'point and shoot', label: translations.pointAndShoot, icon: '📸' },
    { value: 'analog', label: translations.analog, icon: '📷' },
    { value: 'smartphone', label: translations.smartphone, icon: '📱' },
    { value: 'medium format', label: translations.mediumFormat, icon: '📷' }
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

        {renderOptionSection(
          translations.cameraAngle,
          cameraAngleOptions,
          { value: parameters.cameraAngle || 'medium shot', label: parameters.cameraAngle || 'Medium Shot', icon: '📷' },
          (value) => handleChange('cameraAngle', value.value)
        )}

        {renderOptionSection(
          translations.lensSize,
          lensSizeOptions,
          { value: parameters.lensSize || 'standard', label: parameters.lensSize || 'Standard', icon: '📷' },
          (value) => handleChange('lensSize', value.value)
        )}

        {renderOptionSection(
          translations.cameraBrand,
          cameraBrandOptions,
          { value: parameters.cameraBrand || 'canon', label: parameters.cameraBrand || 'Canon', icon: '📷' },
          (value) => handleChange('cameraBrand', value.value)
        )}

        {renderOptionSection(
          translations.cameraType,
          cameraTypeOptions,
          { value: parameters.cameraType || 'dslr', label: parameters.cameraType || 'DSLR', icon: '📷' },
          (value) => handleChange('cameraType', value.value)
        )}

        {renderEffectsSection()}
      </div>
    </div>
  );
}; 