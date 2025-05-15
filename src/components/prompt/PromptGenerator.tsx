import React, { useState, useEffect } from 'react';
import { CharacterParameters } from '../../types/parameters';
import { PromptPreset, PresetCategory } from '../../types/preset';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';
import './PromptGenerator.css';

// Sample presets for display purposes
const defaultPresets: PromptPreset[] = [
  {
    id: '1',
    name: 'Fantasy Warrior',
    category: 'character',
    prompt: 'A tall, muscular warrior with long braided hair, wearing ornate plate armor adorned with dragon motifs. Wielding a massive two-handed sword with glowing runes etched into the blade. Standing in a heroic pose against a backdrop of a medieval battlefield at sunset.',
    style: 'detailed',
    tags: ['fantasy', 'warrior', 'armor'],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Epic fantasy warrior character suitable for book covers or game art.'
  },
  {
    id: '2',
    name: 'Cyberpunk Hacker',
    category: 'portrait',
    prompt: 'Close-up portrait of a young Asian woman with neon blue hair and cybernetic eye implants. Multiple holographic displays reflecting in her eyes. Wearing a high-tech jacket with circuitry patterns and a neural interface jack visible at the base of her skull. Backlit by the glow of a futuristic cityscape at night.',
    style: 'detailed',
    tags: ['cyberpunk', 'sci-fi', 'portrait'],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Futuristic cyberpunk hacker character with detailed tech elements.'
  },
  {
    id: '3',
    name: 'Elven Ranger',
    category: 'full-body',
    prompt: 'A lithe elven ranger with pointed ears and flowing silver hair, dressed in forest-green leather armor and a hooded cloak. Carrying an ornate longbow and a quiver of arrows. Standing alert in a misty ancient forest with shafts of golden sunlight breaking through the canopy.',
    style: 'artistic',
    tags: ['fantasy', 'elf', 'ranger'],
    isFavorite: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Mystical elven character in a detailed forest setting.'
  },
  {
    id: '4',
    name: 'Space Explorer',
    category: 'character',
    prompt: 'An astronaut in a sleek, futuristic spacesuit with glowing blue accent lights and a transparent helmet. The suit has numerous small thrusters and utility devices attached. Floating in zero gravity against the backdrop of a massive ringed gas giant planet and starfield.',
    style: 'detailed',
    tags: ['sci-fi', 'space', 'astronaut'],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Detailed sci-fi character design for a deep space explorer.'
  },
  {
    id: '5',
    name: 'Victorian Detective',
    category: 'full-body',
    prompt: 'A tall, slender detective in a Victorian-era outfit, wearing a deerstalker hat and smoking a pipe. Dressed in a tweed coat, waistcoat, and carrying a magnifying glass. Standing on a foggy London street with gas lamps casting an eerie glow through the mist.',
    style: 'concise',
    tags: ['victorian', 'detective', 'historical'],
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Classic detective character in atmospheric Victorian London setting.'
  }
];

// Helper function to generate prompt from parameters
function generatePromptFromParameters(parameters: CharacterParameters, style: string): string {
  const hasValue = (obj: any) => obj && obj.value && obj.value !== 'none';
  
  // Start with character basics
  let prompt = '';
  
  // Character name and basic info
  if (parameters.characterName) {
    prompt += `${parameters.characterName}, `;
  }
  
  // Race information
  if (parameters.race && parameters.race.race) {
    const race = parameters.race.race.label;
    prompt += `a ${parameters.race.race.label} `;
    
    // Add subrace if available
    if (parameters.race.subRace) {
      prompt += `(${parameters.race.subRace.label}) `;
    }
  }
  
  // Basic information
  prompt += `${parameters.ageGroup} ${parameters.gender} with ${parameters.bodyType} build. `;
  
  // Body details
  if (parameters.body && parameters.body.proportions) {
    const height = parameters.body.proportions.height?.label;
    const build = parameters.body.proportions.build?.label;
    
    if (height && build) {
      prompt += `${height} height with ${build} build. `;
    }
  }
  
  // Skin tone
  if (parameters.body && parameters.body.features && parameters.body.features.skinTone) {
    prompt += `${parameters.body.features.skinTone.label} skin tone. `;
  }
  
  // Head and facial details
  if (parameters.head) {
    // Face shape
    if (parameters.head.shape) {
      prompt += `${parameters.head.shape} face shape. `;
    }
    
    // Hair details
    if (parameters.head.hair) {
      const { style, color, length } = parameters.head.hair;
      if (style && color) {
        prompt += `Has ${length || ''} ${color} ${style} hair. `;
      }
    }
    
    // Face details
    if (parameters.head.face) {
      const { eyes, nose, mouth, ears } = parameters.head.face;
      let faceDetails = '';
      
      if (eyes) faceDetails += `${eyes} eyes, `;
      if (nose) faceDetails += `${nose} nose, `;
      if (mouth) faceDetails += `${mouth} lips, `;
      if (ears) faceDetails += `${ears} ears, `;
      
      if (faceDetails) {
        // Remove the trailing comma and space
        prompt += `Facial features: ${faceDetails.slice(0, -2)}. `;
      }
    }
    
    // Head accessories
    if (parameters.head.accessories && parameters.head.accessories.length > 0) {
      prompt += `Wearing ${parameters.head.accessories.join(', ')} on head. `;
    }
  }
  
  // Body features
  if (parameters.body && parameters.body.features) {
    // Scars
    if (parameters.body.features.scars && parameters.body.features.scars.length > 0) {
      prompt += `Has scars: ${parameters.body.features.scars.join(', ')}. `;
    }
    
    // Tattoos
    if (parameters.body.features.tattoos && parameters.body.features.tattoos.length > 0) {
      prompt += `Has tattoos: ${parameters.body.features.tattoos.join(', ')}. `;
    }
  }
  
  // Clothing details - more detailed for the "detailed" style
  if (parameters.clothing) {
    prompt += 'Wearing ';
    
    // Style
    if (hasValue(parameters.clothing.style)) {
      prompt += `${parameters.clothing.style.label} style clothes. `;
    }
    
    // Upper body
    if (hasValue(parameters.clothing.upperBody?.type)) {
      const upperType = parameters.clothing.upperBody.type.label;
      const upperColor = hasValue(parameters.clothing.upperBody.color) ? 
        parameters.clothing.upperBody.color.label : '';
      const upperMaterial = hasValue(parameters.clothing.upperBody.material) ? 
        parameters.clothing.upperBody.material.label : '';
      
      prompt += `${upperColor} ${upperMaterial} ${upperType} for upper body. `;
    }
    
    // Lower body
    if (hasValue(parameters.clothing.lowerBody?.type)) {
      const lowerType = parameters.clothing.lowerBody.type.label;
      const lowerColor = hasValue(parameters.clothing.lowerBody.color) ? 
        parameters.clothing.lowerBody.color.label : '';
      const lowerMaterial = hasValue(parameters.clothing.lowerBody.material) ? 
        parameters.clothing.lowerBody.material.label : '';
      
      prompt += `${lowerColor} ${lowerMaterial} ${lowerType} for lower body. `;
    }
    
    // Footwear
    if (hasValue(parameters.clothing.footwear?.type)) {
      const footwearType = parameters.clothing.footwear.type.label;
      const footwearColor = hasValue(parameters.clothing.footwear.color) ? 
        parameters.clothing.footwear.color.label : '';
      const footwearMaterial = hasValue(parameters.clothing.footwear.material) ? 
        parameters.clothing.footwear.material.label : '';
      
      prompt += `${footwearColor} ${footwearMaterial} ${footwearType} for footwear. `;
    }
    
    // Headwear
    if (hasValue(parameters.clothing.headwear?.type) && parameters.clothing.headwear.type.value !== 'none') {
      const headwearType = parameters.clothing.headwear.type.label;
      const headwearColor = hasValue(parameters.clothing.headwear.color) ? 
        parameters.clothing.headwear.color.label : '';
      const headwearMaterial = hasValue(parameters.clothing.headwear.material) ? 
        parameters.clothing.headwear.material.label : '';
      
      prompt += `${headwearColor} ${headwearMaterial} ${headwearType} on head. `;
    }
    
    // Accessories
    if (parameters.clothing.accessories && parameters.clothing.accessories.length > 0) {
      prompt += `Accessories: ${parameters.clothing.accessories.join(', ')}. `;
    }
  }
  
  // Pose information
  if (parameters.pose) {
    // Stance
    if (hasValue(parameters.pose.stance)) {
      prompt += `${parameters.pose.stance.label} stance. `;
    }
    
    // Expression
    if (hasValue(parameters.pose.expression)) {
      prompt += `${parameters.pose.expression.label} facial expression. `;
    }
    
    // Arm position
    if (parameters.pose.armPosition) {
      if ('value' in parameters.pose.armPosition && hasValue(parameters.pose.armPosition)) {
        prompt += `Arms: ${parameters.pose.armPosition.label}. `;
      } else if ('mode' in parameters.pose.armPosition && parameters.pose.armPosition.mode === 'individual') {
        prompt += `Arms: left arm ${parameters.pose.armPosition.left}, right arm ${parameters.pose.armPosition.right}. `;
      }
    }
    
    // Hand position
    if (parameters.pose.handPosition) {
      if ('value' in parameters.pose.handPosition && hasValue(parameters.pose.handPosition)) {
        prompt += `Hands: ${parameters.pose.handPosition.label}. `;
      } else if ('mode' in parameters.pose.handPosition && parameters.pose.handPosition.mode === 'individual') {
        prompt += `Hands: left hand ${parameters.pose.handPosition.left}, right hand ${parameters.pose.handPosition.right}. `;
      }
    }
    
    // Head position
    if (hasValue(parameters.pose.headPosition)) {
      prompt += `Head: ${parameters.pose.headPosition.label}. `;
    }
  }
  
  // Art style information - tailored based on prompt style selection
  if (parameters.style) {
    let styleInfo = '';
    
    // Art style
    if (hasValue(parameters.style.artStyle)) {
      styleInfo += `${parameters.style.artStyle.label} art style, `;
    }
    
    // Rendering
    if (hasValue(parameters.style.rendering)) {
      styleInfo += `${parameters.style.rendering.label} rendering, `;
    }
    
    // Lighting
    if (hasValue(parameters.style.lighting)) {
      styleInfo += `${parameters.style.lighting.label} lighting, `;
    }
    
    // Mood
    if (hasValue(parameters.style.mood)) {
      styleInfo += `${parameters.style.mood.label} mood, `;
    }
    
    // Color Palette
    if (hasValue(parameters.style.colorPalette)) {
      styleInfo += `${parameters.style.colorPalette.label} color palette, `;
    }
    
    if (styleInfo) {
      // Remove the trailing comma and space
      prompt += `Visual style: ${styleInfo.slice(0, -2)}. `;
    }
  }
  
  // Camera information
  if (parameters.camera) {
    if (parameters.camera.layout) {
      prompt += `${parameters.camera.layout} layout. `;
    }
    
    if (parameters.camera.composition) {
      prompt += `${parameters.camera.composition} composition. `;
    }
    
    if (parameters.camera.effects && parameters.camera.effects.length > 0) {
      prompt += `Camera effects: ${parameters.camera.effects.join(', ')}. `;
    }
  }
  
  // Background information
  if (parameters.background) {
    let bgInfo = '';
    
    if (parameters.background.type) {
      bgInfo += `${parameters.background.type} background type, `;
    }
    
    if (parameters.background.color) {
      bgInfo += `${parameters.background.color} background color, `;
    }
    
    if (parameters.background.environment) {
      bgInfo += `set in ${parameters.background.environment}, `;
    }
    
    if (bgInfo) {
      // Remove the trailing comma and space
      prompt += `Background: ${bgInfo.slice(0, -2)}. `;
    }
  }
  
  // For different prompt styles, modify the output
  if (style === 'concise') {
    // Create a shorter version by extracting key elements
    const parts = prompt.split('. ');
    const basicInfo = parts.slice(0, 2).join('. ');
    const styleInfo = parts.find(p => p.includes('Visual style'));
    
    prompt = `${basicInfo}. ${styleInfo || 'Realistic style.'} `;
  } else if (style === 'artistic') {
    // Add some artistic descriptions
    prompt += 'Artistically rendered with attention to details and mood. Creative interpretation encouraged. ';
  }
  
  return prompt.trim();
}

interface PromptGeneratorProps {
  parameters: CharacterParameters;
  language: 'en' | 'id';
}

export const PromptGenerator: React.FC<PromptGeneratorProps> = ({ parameters, language }) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  const [promptStyle, setPromptStyle] = useState<'detailed' | 'concise' | 'artistic'>('detailed');
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [promptText, setPromptText] = useState('');
  const [presets, setPresets] = useState<PromptPreset[]>(defaultPresets);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presetCategory, setPresetCategory] = useState<PresetCategory>('character');
  const [presetTags, setPresetTags] = useState('');
  const [presetDescription, setPresetDescription] = useState('');

  // Load presets from localStorage on client after hydration
  useEffect(() => {
    const stored = localStorage.getItem('promptPresets');
    if (stored) {
      try {
        setPresets(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored presets', e);
      }
    }
  }, []);

  // Auto-generate prompt when parameters change
  useEffect(() => {
    if (autoGenerate) {
      generatePrompt();
    }
  }, [parameters, promptStyle, autoGenerate]);

  // Sync presets to localStorage whenever presets change
  useEffect(() => {
    localStorage.setItem('promptPresets', JSON.stringify(presets));
  }, [presets]);

  // Generate prompt based on parameters and style
  const generatePrompt = () => {
    const prompt = generatePromptFromParameters(parameters, promptStyle);
    setPromptText(prompt);
  };

  // Copy prompt to clipboard
  const copyToClipboard = () => {
    if (promptText) {
      navigator.clipboard.writeText(promptText)
        .then(() => {
          // Could show a toast or other notification here
          console.log('Copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };

  // Save current prompt as a preset
  const savePreset = () => {
    if (!promptText || !presetName) return;
    
    const newPreset: PromptPreset = {
      id: Date.now().toString(), // Simple unique ID generation
      name: presetName,
      category: presetCategory,
      prompt: promptText,
      style: promptStyle,
      tags: presetTags.split(',').map(tag => tag.trim()),
      isFavorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: presetDescription
    };
    
    setPresets([...presets, newPreset]);
    
    // Reset form
    setPresetName('');
    setPresetCategory('character');
    setPresetTags('');
    setPresetDescription('');
    setShowSaveModal(false);
  };

  // Filter presets based on search query and category
  const filteredPresets = presets.filter(preset => {
    const matchesSearch = !searchQuery || 
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || preset.category === categoryFilter;
    const matchesFavorite = !showFavorites || preset.isFavorite;
    
    return matchesSearch && matchesCategory && matchesFavorite;
  });

  return (
    <div className="prompt-generator">
      <h3>{translations.promptGenerator}</h3>
      
      <div className="style-selector">
        <label htmlFor="promptStyle">{translations.promptStyle}</label>
        <select
          id="promptStyle"
          value={promptStyle}
          onChange={(e) => setPromptStyle(e.target.value as 'detailed' | 'concise' | 'artistic')}
        >
          <option value="detailed">{translations.detailedPrompt}</option>
          <option value="concise">{translations.concise}</option>
          <option value="artistic">{translations.artistic}</option>
        </select>
      </div>
      
      <div className="auto-generate-option">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={autoGenerate}
            onChange={(e) => setAutoGenerate(e.target.checked)}
          />
          {translations.autoGenerate}
        </label>
      </div>
      
      <div className="button-group">
        <button className="generate-button" onClick={generatePrompt}>
          {translations.generatePrompt}
        </button>
        <button className="copy-button" onClick={copyToClipboard}>
          {translations.copy}
        </button>
        <button className="save-button" onClick={() => setShowSaveModal(true)}>
          {translations.saveAsPreset}
        </button>
      </div>
      
      <div className="prompt-output">
        <h4>{translations.generatedPrompt}</h4>
        <div className="prompt-text">
          {promptText || translations.promptWillAppear}
        </div>
      </div>
      
      <div className="presets-section">
        <div className="presets-header">
          <h4>{translations.savedPresets}</h4>
          <div className="presets-search">
            <input
              type="text"
              placeholder={translations.searchPresets}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="filter-options">
          <div className="category-filter">
            <label>{translations.styleLabel}</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">{translations.allCategories}</option>
              <option value="character">{translations.character}</option>
              <option value="portrait">{translations.portraitCategory}</option>
              <option value="full-body">{translations.fullBody}</option>
              <option value="scene">{translations.scene}</option>
              <option value="custom">{translations.custom}</option>
            </select>
          </div>
          
          <div className="favorite-filter">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showFavorites}
                onChange={(e) => setShowFavorites(e.target.checked)}
              />
              {translations.onlyFavorites || 'Only favorites'}
            </label>
          </div>
        </div>
        
        <div className="presets-grid">
          {filteredPresets.length === 0 ? (
            <div className="no-presets-message">
              {translations.noPresetsSaved}
            </div>
          ) : (
            filteredPresets.map(preset => (
              <div key={preset.id} className="preset-item">
                <div className="preset-header">
                  <h5 className="preset-name">{preset.name}</h5>
                  <div className="preset-controls">
                    <button 
                      className={`favorite-button ${preset.isFavorite ? 'active' : ''}`}
                      onClick={() => {
                        const updatedPresets = presets.map(p => 
                          p.id === preset.id ? {...p, isFavorite: !p.isFavorite} : p
                        );
                        setPresets(updatedPresets);
                      }}
                    >
                      {preset.isFavorite ? '★' : '☆'}
                    </button>
                    <span className="preset-category">{preset.category}</span>
                  </div>
                </div>
                
                <div className="preset-content">
                  <p className="preset-prompt">{preset.prompt.substring(0, 150)}...</p>
                </div>
                
                <div className="preset-tags">
                  {preset.tags.map((tag, index) => (
                    <span key={index} className="preset-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="preset-actions">
                  <button 
                    className="load-button"
                    onClick={() => {
                      setPromptText(preset.prompt);
                      setPromptStyle(preset.style);
                    }}
                  >
                    {translations.load}
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => {
                      const updatedPresets = presets.filter(p => p.id !== preset.id);
                      setPresets(updatedPresets);
                    }}
                  >
                    {translations.delete}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showSaveModal && (
        <div className="modal-overlay" onClick={() => setShowSaveModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h4>{translations.savePreset}</h4>
            <div className="form-group">
              <label htmlFor="presetName">{translations.presetName}</label>
              <input
                id="presetName"
                type="text"
                className="preset-name-input"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                placeholder={translations.enterPresetName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="presetCategory">{translations.category}</label>
              <select
                id="presetCategory"
                className="preset-category-select"
                value={presetCategory}
                onChange={(e) => setPresetCategory(e.target.value as PresetCategory)}
              >
                <option value="character">{translations.character}</option>
                <option value="portrait">{translations.portraitCategory}</option>
                <option value="full-body">{translations.fullBody}</option>
                <option value="scene">{translations.scene}</option>
                <option value="custom">{translations.custom}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="presetTags">{translations.tags}</label>
              <input
                id="presetTags"
                type="text"
                className="preset-tags-input"
                value={presetTags}
                onChange={(e) => setPresetTags(e.target.value)}
                placeholder={translations.tagsPlaceholder}
              />
            </div>
            <div className="form-group">
              <label htmlFor="presetDescription">{translations.description}</label>
              <textarea
                id="presetDescription"
                className="preset-description-input"
                value={presetDescription}
                onChange={(e) => setPresetDescription(e.target.value)}
                placeholder={translations.describePreset}
              />
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setShowSaveModal(false)}>
                {translations.cancel}
              </button>
              <button className="save-button" onClick={savePreset}>
                {translations.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 