'use client';

import React, { useState } from 'react';
import { CharacterParameters } from './types/parameters';
import './styles/App.css';
import './styles/parameters.css';
import { CharacterForm } from './components/CharacterForm';
import { PromptGenerator } from './components/prompt/PromptGenerator';

// Initial parameters with complete required fields
const initialParameters: CharacterParameters = {
  characterName: '',
  gender: 'male',
  ageGroup: 'adult',
  bodyType: 'average',
  race: {
    race: {
      value: 'human',
      label: 'Human',
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
      length: 'medium'
    },
    face: {
      eyes: 'round',
      nose: 'straight',
      mouth: 'neutral',
      ears: 'normal'
    },
    accessories: []
  },
  body: {
    proportions: {
      height: { value: 'average', label: 'Average', icon: '🧍' },
      build: { value: 'average', label: 'Average', icon: '🧍' }
    },
    features: {
      skinTone: { value: 'medium', label: 'Medium', icon: '👋' },
      scars: [],
      tattoos: []
    }
  },
  clothing: {
    style: { value: 'casual', label: 'Casual', icon: '👕' },
    upperBody: {
      type: { value: 'shirt', label: 'Shirt', icon: '👕' },
      color: { value: 'blue', label: 'Blue', icon: '🔵' },
      material: { value: 'cotton', label: 'Cotton', icon: '🧵' }
    },
    lowerBody: {
      type: { value: 'jeans', label: 'Jeans', icon: '👖' },
      color: { value: 'blue', label: 'Blue', icon: '🔵' },
      material: { value: 'denim', label: 'Denim', icon: '🧵' }
    },
    footwear: {
      type: { value: 'sneakers', label: 'Sneakers', icon: '👟' },
      color: { value: 'white', label: 'White', icon: '⚪' },
      material: { value: 'canvas', label: 'Canvas', icon: '🧵' }
    },
    headwear: {
      type: { value: 'none', label: 'None', icon: '❌' },
      color: { value: 'none', label: 'None', icon: '❌' },
      material: { value: 'none', label: 'None', icon: '❌' }
    },
    underwear: {
      type: { value: 'normal', label: 'Normal', icon: '👙' },
      color: { value: 'white', label: 'White', icon: '⚪' },
      material: { value: 'cotton', label: 'Cotton', icon: '🧵' }
    },
    accessories: []
  },
  pose: {
    stance: { value: 'standing', label: 'Standing', icon: '🧍' },
    armPosition: { value: 'relaxed', label: 'Relaxed', icon: '💪' },
    handPosition: { value: 'open', label: 'Open', icon: '🖐️' },
    legPosition: { value: 'straight', label: 'Straight', icon: '🦵' },
    headPosition: { value: 'forward', label: 'Forward', icon: '👤' },
    expression: { value: 'neutral', label: 'Neutral', icon: '😐' }
  },
  style: {
    artStyle: { value: 'realistic', label: 'Realistic', icon: '🖼️' },
    rendering: { value: 'detailed', label: 'Detailed', icon: '✨' },
    lighting: { value: 'soft', label: 'Soft', icon: '💡' }
  },
  camera: {
    layout: 'portrait',
    composition: 'center',
    effects: []
  },
  background: {
    type: 'plain',
    color: 'white',
    environment: 'neutral'
  }
};

function App() {
  const [parameters, setParameters] = useState<CharacterParameters>(initialParameters);

  const handleParameterChange = (key: keyof CharacterParameters, value: any) => {
    setParameters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="main-title">CHARACTER DESIGNER AI</h1>
        <div className="header-subtitle">Create detailed character designs for AI image generation</div>
      </header>

      <main className="app-main">
        <div className="app-column parameter-column">
          <CharacterForm 
            parameters={parameters} 
            onParameterChange={handleParameterChange} 
          />
        </div>
        
        <div className="app-column preview-column">
          <PromptGenerator parameters={parameters} />
        </div>
      </main>
    </div>
  );
}

export default App; 