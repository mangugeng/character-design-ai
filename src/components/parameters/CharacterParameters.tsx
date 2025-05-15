import React, { useState } from 'react';
import { CharacterParameters as CharacterParametersType } from '../../types/parameters';
import { BasicParameters } from './BasicParameters';
import { HeadParameters } from './HeadParameters';
import { BodyParameters } from './BodyParameters';
import { ClothingParameters } from './ClothingParameters';
import { PoseParameters } from './PoseParameters';
import { StyleParameters } from './StyleParameters';
import { CameraParameters } from './CameraParameters';
import { BackgroundParameters } from './BackgroundParameters';
import { RaceParameters } from './RaceParameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface CharacterParametersProps {
  parameters: CharacterParametersType;
  onChange: (parameters: CharacterParametersType) => void;
  language?: 'en' | 'id';
}

type TabType = 'basic' | 'race' | 'head' | 'body' | 'pose' | 'clothing' | 'style' | 'camera' | 'background';

export const CharacterParameters: React.FC<CharacterParametersProps> = ({ 
  parameters, 
  onChange,
  language = 'en'
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const translations = language === 'en' ? enTranslations : idTranslations;

  const handleChange = (key: keyof CharacterParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <BasicParameters
            parameters={{
              name: parameters.characterName,
              gender: parameters.gender as 'male' | 'female' | 'other',
              ageGroup: parameters.ageGroup as 'child' | 'teen' | 'young adult' | 'adult' | 'elderly',
              bodyType: parameters.bodyType as 'slim' | 'athletic' | 'average' | 'curvy' | 'muscular'
            }}
            onChange={(value) => {
              handleChange('characterName', value.name);
              handleChange('gender', value.gender);
              handleChange('ageGroup', value.ageGroup);
              handleChange('bodyType', value.bodyType);
            }}
            language={language}
          />
        );
      case 'race':
        return (
          <RaceParameters
            parameters={parameters.race}
            onChange={(value) => handleChange('race', value)}
            language={language}
          />
        );
      case 'head':
        return (
          <HeadParameters
            parameters={parameters.head}
            onChange={(value) => handleChange('head', value)}
            language={language}
          />
        );
      case 'body':
        return (
          <BodyParameters
            parameters={parameters.body}
            onChange={(value) => handleChange('body', value)}
            language={language}
          />
        );
      case 'clothing':
        return (
          <ClothingParameters
            parameters={parameters.clothing}
            onChange={(value) => handleChange('clothing', value)}
            language={language}
          />
        );
      case 'pose':
        return (
          <PoseParameters
            parameters={parameters.pose}
            onChange={(value) => handleChange('pose', value)}
            language={language}
          />
        );
      case 'style':
        return (
          <StyleParameters
            parameters={parameters.style}
            onChange={(value) => handleChange('style', value)}
            language={language}
          />
        );
      case 'camera':
        return (
          <CameraParameters
            parameters={parameters.camera}
            onChange={(value) => handleChange('camera', value)}
            language={language}
          />
        );
      case 'background':
        return (
          <BackgroundParameters
            parameters={parameters.background}
            onChange={(value) => handleChange('background', value)}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="character-parameters">
      <div className="parameter-tabs">
        <button
          className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => setActiveTab('basic')}
        >
          {translations.basicInfoTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'race' ? 'active' : ''}`}
          onClick={() => setActiveTab('race')}
        >
          {translations.raceTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'head' ? 'active' : ''}`}
          onClick={() => setActiveTab('head')}
        >
          {translations.headTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'body' ? 'active' : ''}`}
          onClick={() => setActiveTab('body')}
        >
          {translations.bodyTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'clothing' ? 'active' : ''}`}
          onClick={() => setActiveTab('clothing')}
        >
          {translations.clothingTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'pose' ? 'active' : ''}`}
          onClick={() => setActiveTab('pose')}
        >
          {translations.poseTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'style' ? 'active' : ''}`}
          onClick={() => setActiveTab('style')}
        >
          {translations.styleTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'camera' ? 'active' : ''}`}
          onClick={() => setActiveTab('camera')}
        >
          {translations.cameraTab}
        </button>
        <button
          className={`tab-button ${activeTab === 'background' ? 'active' : ''}`}
          onClick={() => setActiveTab('background')}
        >
          {translations.backgroundTab}
        </button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}; 