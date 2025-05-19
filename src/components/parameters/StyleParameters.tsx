import React from 'react';
import { StyleParameters as StyleParametersType } from '../../types/parameters';
import './StyleParameters.css';

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
  const handleChange = (key: keyof StyleParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const artStyleOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'realistic', label: language === 'en' ? 'Realistic' : 'Realistis' },
    { value: 'cartoon', label: language === 'en' ? 'Cartoon' : 'Kartun' },
    { value: 'anime', label: 'Anime' },
    { value: 'sketch', label: language === 'en' ? 'Sketch' : 'Sketsa' },
    { value: 'digitalArt', label: language === 'en' ? 'Digital Art' : 'Seni Digital' },
    { value: 'conceptArt', label: language === 'en' ? 'Concept Art' : 'Seni Konsep' },
    { value: 'illustration', label: language === 'en' ? 'Illustration' : 'Ilustrasi' },
    { value: 'comicBook', label: language === 'en' ? 'Comic Book' : 'Komik' },
    { value: 'manga', label: 'Manga' },
    { value: 'chibi', label: 'Chibi' },
    { value: '3d', label: '3D' },
    { value: 'lowPoly', label: language === 'en' ? 'Low Poly' : 'Low Poly' },
    { value: 'voxel', label: 'Voxel' },
    { value: 'stylized3d', label: language === 'en' ? 'Stylized 3D' : '3D Stilistik' }
  ];

  const renderingOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'detailed', label: language === 'en' ? 'Detailed' : 'Detail' },
    { value: 'realistic', label: language === 'en' ? 'Realistic' : 'Realistis' },
    { value: 'cartoon', label: language === 'en' ? 'Cartoon' : 'Kartun' },
    { value: 'anime', label: 'Anime' },
    { value: 'sketch', label: language === 'en' ? 'Sketch' : 'Sketsa' },
    { value: '3dRender', label: language === 'en' ? '3D Render' : 'Render 3D' },
    { value: 'clayRender', label: language === 'en' ? 'Clay Render' : 'Render Clay' },
    { value: 'wireframe', label: 'Wireframe' },
    { value: 'toonShade', label: language === 'en' ? 'Toon Shade' : 'Shade Kartun' }
  ];

  const lightingOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'soft', label: language === 'en' ? 'Soft' : 'Lembut' },
    { value: 'natural', label: language === 'en' ? 'Natural Light' : 'Cahaya Alami' },
    { value: 'artificial', label: language === 'en' ? 'Artificial Light' : 'Cahaya Buatan' },
    { value: 'dramatic', label: language === 'en' ? 'Dramatic Light' : 'Cahaya Dramatis' },
    { value: 'bright', label: language === 'en' ? 'Bright' : 'Terang' },
    { value: 'dim', label: language === 'en' ? 'Dim' : 'Redup' },
    { value: 'warm', label: language === 'en' ? 'Warm' : 'Hangat' },
    { value: 'cool', label: language === 'en' ? 'Cool' : 'Sejuk' },
    { value: 'studio', label: language === 'en' ? 'Studio Lighting' : 'Pencahayaan Studio' },
    { value: 'threePoint', label: language === 'en' ? 'Three Point Lighting' : 'Pencahayaan Tiga Titik' }
  ];

  const moodOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'happy', label: language === 'en' ? 'Happy' : 'Bahagia' },
    { value: 'sad', label: language === 'en' ? 'Sad' : 'Sedih' },
    { value: 'nostalgic', label: language === 'en' ? 'Nostalgic' : 'Nostalgia' },
    { value: 'mysterious', label: language === 'en' ? 'Mysterious' : 'Misterius' },
    { value: 'dreamy', label: language === 'en' ? 'Dreamy' : 'Mimpi' },
    { value: 'vibrant', label: language === 'en' ? 'Vibrant' : 'Cerah' },
    { value: 'gloomy', label: language === 'en' ? 'Gloomy' : 'Suram' },
    { value: 'epic', label: language === 'en' ? 'Epic' : 'Epik' },
    { value: 'dramatic', label: language === 'en' ? 'Dramatic' : 'Dramatis' },
    { value: 'emotional', label: language === 'en' ? 'Emotional' : 'Emosional' }
  ];

  const colorPaletteOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'vibrant', label: language === 'en' ? 'Vibrant' : 'Cerah' },
    { value: 'pastel', label: language === 'en' ? 'Pastel' : 'Pastel' },
    { value: 'monochrome', label: language === 'en' ? 'Monochrome' : 'Monokrom' },
    { value: 'muted', label: language === 'en' ? 'Muted' : 'Redup' },
    { value: 'dark', label: language === 'en' ? 'Dark' : 'Gelap' },
    { value: 'neon', label: language === 'en' ? 'Neon' : 'Neon' },
    { value: 'warm', label: language === 'en' ? 'Warm' : 'Hangat' },
    { value: 'cool', label: language === 'en' ? 'Cool' : 'Sejuk' },
    { value: 'metallic', label: language === 'en' ? 'Metallic' : 'Metalik' },
    { value: 'gradient', label: language === 'en' ? 'Gradient' : 'Gradien' }
  ];

  const softwareOptions = [
    { value: 'none', label: language === 'en' ? 'None' : 'Tidak Ada' },
    { value: 'blender', label: 'Blender' },
    { value: 'maya', label: 'Maya' },
    { value: '3dsMax', label: '3ds Max' },
    { value: 'zbrush', label: 'ZBrush' },
    { value: 'cinema4d', label: 'Cinema 4D' },
    { value: 'houdini', label: 'Houdini' },
    { value: 'substance', label: 'Substance' },
    { value: 'unreal', label: 'Unreal Engine' },
    { value: 'unity', label: 'Unity' }
  ];

  const renderOptionSection = (
    options: { value: string, label: string }[],
    currentValue: string,
    onChange: (value: string) => void
  ) => (
    <div className="option-section">
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
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
          <h3>{language === 'en' ? 'Art Style' : 'Gaya Seni'}</h3>
          {renderOptionSection(
            artStyleOptions,
            parameters.artStyle || 'realistic',
            (value) => handleChange('artStyle', value)
          )}
        </div>
        
        <div className="parameter-section">
          <h3>{language === 'en' ? 'Rendering Style' : 'Gaya Rendering'}</h3>
          {renderOptionSection(
            renderingOptions,
            parameters.rendering || 'detailed',
            (value) => handleChange('rendering', value)
          )}
        </div>
        
        <div className="parameter-section">
          <h3>{language === 'en' ? 'Lighting Style' : 'Gaya Pencahayaan'}</h3>
          {renderOptionSection(
            lightingOptions,
            parameters.lighting || 'soft',
            (value) => handleChange('lighting', value)
          )}
        </div>

        <div className="parameter-section">
          <h3>{language === 'en' ? 'Mood Style' : 'Gaya Suasana'}</h3>
          {renderOptionSection(
            moodOptions,
            parameters.mood || 'neutral',
            (value) => handleChange('mood', value)
          )}
        </div>

        <div className="parameter-section">
          <h3>{language === 'en' ? 'Color Palette Style' : 'Gaya Palet Warna'}</h3>
          {renderOptionSection(
            colorPaletteOptions,
            parameters.colorPalette || 'vibrant',
            (value) => handleChange('colorPalette', value)
          )}
        </div>

        <div className="parameter-section">
          <h3>{language === 'en' ? '3D Software' : 'Software 3D'}</h3>
          {renderOptionSection(
            softwareOptions,
            parameters.software || 'blender',
            (value) => handleChange('software', value)
          )}
        </div>
      </div>
    </div>
  );
}; 