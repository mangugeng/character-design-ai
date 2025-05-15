import React from 'react';
import { StyleParameters as StyleParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface StyleParametersProps {
  parameters: StyleParametersType;
  onChange: (value: StyleParametersType) => void;
  language?: 'en' | 'id';
}

export const StyleParameters: React.FC<StyleParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const handleChangeArtStyle = (value: string, label: string) => {
    onChange({
      ...parameters,
      artStyle: {
        value,
        label,
        icon: '🎨'
      }
    });
  };

  const handleChangeRendering = (value: string, label: string) => {
    onChange({
      ...parameters,
      rendering: {
        value,
        label,
        icon: '✨'
      }
    });
  };

  const handleChangeLighting = (value: string, label: string) => {
    onChange({
      ...parameters,
      lighting: {
        value,
        label,
        icon: '💡'
      }
    });
  };

  const artStyleOptions = [
    { value: 'realistic', label: translations.realistic },
    { value: 'cartoon', label: translations.cartoon },
    { value: 'anime', label: translations.anime },
    { value: 'sketch', label: translations.sketch }
  ];

  const renderingOptions = [
    { value: 'detailed', label: translations.detailedRender },
    { value: 'simple', label: translations.simple }
  ];

  const lightingOptions = [
    { value: 'soft', label: translations.soft },
    { value: 'hard', label: translations.hard },
    { value: 'dramatic', label: translations.dramatic },
    { value: 'natural', label: translations.natural }
  ];

  const renderOptionSection = (
    title: string,
    options: { value: string, label: string }[],
    currentValue: string,
    onChange: (value: string, label: string) => void
  ) => (
    <div className="option-section">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value, option.label)}
          >
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="style-parameters parameters-scrollable">
    
      <div className="form-section">
        <div className="parameter-section">
          {renderOptionSection(
            translations.artStyle,
            artStyleOptions,
            parameters.artStyle?.value || 'realistic',
            handleChangeArtStyle
          )}
        </div>
        
        <div className="parameter-section">
          {renderOptionSection(
            translations.rendering,
            renderingOptions,
            parameters.rendering?.value || 'detailed',
            handleChangeRendering
          )}
        </div>
        
        <div className="parameter-section">
          {renderOptionSection(
            translations.lighting,
            lightingOptions,
            parameters.lighting?.value || 'soft',
            handleChangeLighting
          )}
        </div>
        
        <div className="parameter-section">
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Additional Style Details' : 'Detail Gaya Tambahan'}</label>
            <select
              value={parameters.mood?.value || 'none'}
              onChange={(e) => {
                const value = e.target.value;
                const label = e.target.options[e.target.selectedIndex].text;
                onChange({
                  ...parameters,
                  mood: { value, label, icon: '🌈' }
                });
              }}
            >
              <option value="none">{language === 'en' ? 'No specific mood' : 'Tidak ada mood khusus'}</option>
              <option value="happy">{language === 'en' ? 'Happy' : 'Bahagia'}</option>
              <option value="sad">{language === 'en' ? 'Sad' : 'Sedih'}</option>
              <option value="nostalgic">{language === 'en' ? 'Nostalgic' : 'Nostalgia'}</option>
              <option value="mysterious">{language === 'en' ? 'Mysterious' : 'Misterius'}</option>
              <option value="dreamy">{language === 'en' ? 'Dreamy' : 'Mimpi'}</option>
              <option value="vibrant">{language === 'en' ? 'Vibrant' : 'Cerah'}</option>
              <option value="gloomy">{language === 'en' ? 'Gloomy' : 'Suram'}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Color Palette' : 'Palet Warna'}</label>
            <select
              value={parameters.colorPalette?.value || 'vibrant'}
              onChange={(e) => {
                const value = e.target.value;
                const label = e.target.options[e.target.selectedIndex].text;
                onChange({
                  ...parameters,
                  colorPalette: { value, label, icon: '🎨' }
                });
              }}
            >
              <option value="vibrant">{language === 'en' ? 'Vibrant' : 'Cerah'}</option>
              <option value="pastel">{language === 'en' ? 'Pastel' : 'Pastel'}</option>
              <option value="monochrome">{language === 'en' ? 'Monochrome' : 'Monokrom'}</option>
              <option value="muted">{language === 'en' ? 'Muted' : 'Redup'}</option>
              <option value="dark">{language === 'en' ? 'Dark' : 'Gelap'}</option>
              <option value="neon">{language === 'en' ? 'Neon' : 'Neon'}</option>
              <option value="warm">{language === 'en' ? 'Warm' : 'Hangat'}</option>
              <option value="cool">{language === 'en' ? 'Cool' : 'Sejuk'}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}; 