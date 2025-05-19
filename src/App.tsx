'use client';

import React, { useState, useEffect } from 'react';
import { CharacterParameters } from './types/parameters';
import './styles/App.css';
import './styles/parameters.css';
import { CharacterForm } from './components/CharacterForm';
import { PromptGenerator } from './components/prompt/PromptGenerator';
import { enTranslations } from './translations/en';
import { idTranslations } from './translations/id';

function App() {
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const translations = language === 'en' ? enTranslations : idTranslations;

  // Fungsi untuk mendapatkan initial parameters berdasarkan bahasa yang dipilih
  const getInitialParameters = (lang: 'en' | 'id'): CharacterParameters => {
    const t = lang === 'en' ? enTranslations : idTranslations;
    
    return {
      characterName: '',
      gender: 'male',
      ageGroup: 'adult',
      bodyType: 'average',
      race: {
        race: {
          value: 'human',
          label: lang === 'en' ? 'Human' : 'Manusia',
          icon: '👤',
          category: 'real'
        },
        features: [],
        traits: []
      },
      head: {
        shape: 'oval',
        hair: {
          style: 'short',
          color: 'black',
          length: 'mediumLength'
        },
        face: {
          eyes: 'round',
          nose: 'straight',
          mouth: 'neutralLight',
          ears: 'normal'
        },
        accessories: []
      },
      body: {
        proportions: {
          height: { 
            value: 'average', 
            label: lang === 'en' ? t.average : t.average, 
            icon: '🧍' 
          },
          build: { 
            value: 'average', 
            label: lang === 'en' ? t.average : t.average, 
            icon: '🧍' 
          }
        },
        features: {
          skinTone: { 
            value: 'medium', 
            label: lang === 'en' ? t.mediumTone : t.mediumTone, 
            icon: '👋' 
          },
          scars: [],
          tattoos: []
        }
      },
      clothing: {
        style: { 
          value: 'casual', 
          label: lang === 'en' ? t.casual : t.casual, 
          icon: '👕' 
        },
        upperBody: {
          type: { 
            value: 'shirt', 
            label: lang === 'en' ? t.shirt : t.shirt, 
            icon: '👕' 
          },
          color: { 
            value: 'blue', 
            label: lang === 'en' ? t.blueColor : t.blueColor, 
            icon: '🔵' 
          },
          material: { 
            value: 'cotton', 
            label: lang === 'en' ? t.cotton : t.cotton, 
            icon: '🧵' 
          }
        },
        lowerBody: {
          type: { 
            value: 'jeans', 
            label: lang === 'en' ? t.jeans : t.jeans, 
            icon: '👖' 
          },
          color: { 
            value: 'blue', 
            label: lang === 'en' ? t.blueColor : t.blueColor, 
            icon: '🔵' 
          },
          material: { 
            value: 'denim', 
            label: lang === 'en' ? t.denim : t.denim, 
            icon: '🧵' 
          }
        },
        footwear: {
          type: { 
            value: 'sneakers', 
            label: lang === 'en' ? t.sneakers : t.sneakers, 
            icon: '👟' 
          },
          color: { 
            value: 'white', 
            label: lang === 'en' ? t.whiteColor : t.whiteColor, 
            icon: '⚪' 
          },
          material: { 
            value: 'canvas', 
            label: lang === 'en' ? t.canvas : t.canvas, 
            icon: '🧵' 
          }
        },
        headwear: {
          type: { 
            value: 'none', 
            label: lang === 'en' ? t.none : t.none, 
            icon: '❌' 
          },
          color: { 
            value: 'none', 
            label: lang === 'en' ? t.none : t.none, 
            icon: '❌' 
          },
          material: { 
            value: 'none', 
            label: lang === 'en' ? t.none : t.none, 
            icon: '❌' 
          }
        },
        underwear: {
          type: { 
            value: 'normal', 
            label: lang === 'en' ? 'Normal' : 'Normal', 
            icon: '👙' 
          },
          color: { 
            value: 'white', 
            label: lang === 'en' ? t.whiteColor : t.whiteColor, 
            icon: '⚪' 
          },
          material: { 
            value: 'cotton', 
            label: lang === 'en' ? t.cotton : t.cotton, 
            icon: '🧵' 
          }
        },
        accessories: []
      },
      pose: {
        stance: { 
          value: 'standing', 
          label: lang === 'en' ? t.standing : t.standing, 
          icon: '🧍' 
        },
        armPosition: { 
          value: 'relaxed', 
          label: lang === 'en' ? t.relaxed : t.relaxed, 
          icon: '💪' 
        },
        handPosition: { 
          value: 'open', 
          label: lang === 'en' ? t.open : t.open, 
          icon: '🖐️' 
        },
        legPosition: { 
          value: 'straight', 
          label: lang === 'en' ? t.straightPose : t.straightPose, 
          icon: '🦵' 
        },
        headPosition: { 
          value: 'forward', 
          label: lang === 'en' ? t.forward : t.forward, 
          icon: '👤' 
        },
        expression: { 
          value: 'neutral', 
          label: lang === 'en' ? 'Neutral' : 'Netral', 
          icon: '😐' 
        }
      },
      style: {
        artStyle: 'realistic',
        rendering: 'detailed',
        lighting: 'naturalLight'
      },
      camera: {
        layout: 'portrait',
        composition: 'center',
        effects: [],
        cameraAngle: 'mediumShot',
        lensSize: 'standard',
        cameraType: 'dslr',
        cameraBrand: 'canon'
      },
      background: {
        type: 'plain',
        color: 'white',
        environment: 'neutralLight'
      }
    };
  };
  
  const [parameters, setParameters] = useState<CharacterParameters>(getInitialParameters(language));

  // Update parameters when language changes
  useEffect(() => {
    // Update labels on language change
    const updatedParams = {...parameters};
    
    // Update race label
    if (updatedParams.race?.race) {
      updatedParams.race.race.label = language === 'en' ? 'Human' : 'Manusia';
    }
    
    // Update labels for other options
    if (updatedParams.body?.proportions?.height) {
      updatedParams.body.proportions.height.label = translations.average;
    }
    if (updatedParams.body?.proportions?.build) {
      updatedParams.body.proportions.build.label = translations.average;
    }
    if (updatedParams.body?.features?.skinTone) {
      updatedParams.body.features.skinTone.label = translations.mediumTone;
    }
    
    // Update clothing labels
    if (updatedParams.clothing?.style) {
      updatedParams.clothing.style.label = translations.casual;
    }
    if (updatedParams.clothing?.upperBody?.type) {
      updatedParams.clothing.upperBody.type.label = translations.shirt;
    }
    if (updatedParams.clothing?.upperBody?.color) {
      updatedParams.clothing.upperBody.color.label = translations.blueColor;
    }
    if (updatedParams.clothing?.upperBody?.material) {
      updatedParams.clothing.upperBody.material.label = translations.cotton;
    }
    
    // Update lower body
    if (updatedParams.clothing?.lowerBody?.type) {
      updatedParams.clothing.lowerBody.type.label = translations.jeans;
    }
    if (updatedParams.clothing?.lowerBody?.color) {
      updatedParams.clothing.lowerBody.color.label = translations.blueColor;
    }
    if (updatedParams.clothing?.lowerBody?.material) {
      updatedParams.clothing.lowerBody.material.label = translations.denim;
    }
    
    // Update pose labels
    if (updatedParams.pose?.stance) {
      updatedParams.pose.stance.label = translations.standing;
    }
    if (updatedParams.pose?.armPosition && 'label' in updatedParams.pose.armPosition) {
      updatedParams.pose.armPosition.label = translations.relaxed;
    }
    if (updatedParams.pose?.handPosition && 'label' in updatedParams.pose.handPosition) {
      updatedParams.pose.handPosition.label = translations.open;
    }
    if (updatedParams.pose?.legPosition && 'label' in updatedParams.pose.legPosition) {
      updatedParams.pose.legPosition.label = translations.straightPose;
    }
    if (updatedParams.pose?.headPosition) {
      updatedParams.pose.headPosition.label = translations.forward;
    }
    if (updatedParams.pose?.expression) {
      updatedParams.pose.expression.label = language === 'en' ? 'Neutral' : 'Netral';
    }
    
    // Update style labels
    if (updatedParams.style?.artStyle) {
      updatedParams.style.artStyle = language === 'en' ? 'Realistic' : 'Realistis';
    }
    if (updatedParams.style?.rendering) {
      updatedParams.style.rendering = language === 'en' ? 'Detailed' : 'Detail';
    }
    if (updatedParams.style?.lighting) {
      updatedParams.style.lighting = language === 'en' ? 'Soft' : 'Lembut';
    }
    
    setParameters(updatedParams);
  }, [language]);
  
  const handleParameterChange = (key: keyof CharacterParameters, value: any) => {
    setParameters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="app">
      <div className="language-switcher">
        <label htmlFor="languageSelect">{translations.language}: </label>
        <select 
          id="languageSelect" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
        >
          <option value="en">{translations.english}</option>
          <option value="id">{translations.indonesian}</option>
        </select>
      </div>
      
      <header className="app-header">
        <h1 className="main-title">{translations.appTitle}</h1>
        <div className="header-subtitle">{translations.subtitle}</div>
      </header>

      <main className="app-main">
        <div className="app-column parameter-column">
          <CharacterForm 
            parameters={parameters} 
            onParameterChange={handleParameterChange}
            language={language}
          />
        </div>
        
        <div className="app-column preview-column">
          <PromptGenerator parameters={parameters} language={language} />
        </div>
      </main>
    </div>
  );
}

export default App; 