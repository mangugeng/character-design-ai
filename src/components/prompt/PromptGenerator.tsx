import React, { useState, useEffect } from 'react';
import { CharacterParameters } from '../../types/parameters';
import { PromptPreset, PresetCategory } from '../../types/preset';
import './PromptGenerator.css';

// Default character presets
const defaultPresets: PromptPreset[] = [
  {
    id: '1',
    name: 'Fantasy Warrior',
    prompt: 'A tall, muscular human warrior with long braided brown hair, strong square face, sharp blue eyes, with battle scars on left cheek. Wearing plate armor, leather boots, and a red cape. Standing in a battle stance, with one hand on sword hilt, determined expression. Fantasy art style, dramatic lighting.',
    style: 'detailed',
    category: 'character',
    tags: ['fantasy', 'warrior', 'armor', 'battle'],
    description: 'A classic fantasy warrior ready for battle',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '2',
    name: 'Sci-Fi Engineer',
    prompt: 'A female, young adult, slim build android with metallic silver skin and blue glowing circuits. Pointed face with large green glowing eyes, short pixelated blue hair. Wearing futuristic jumpsuit, utility belt with tools, and tech gauntlets. Working pose with hands manipulating holographic display. Sci-fi art style, neon lighting.',
    style: 'detailed',
    category: 'character',
    tags: ['sci-fi', 'android', 'futuristic', 'tech'],
    description: 'A futuristic android engineer in a high-tech environment',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '3',
    name: 'Magical Elf',
    prompt: 'An elf, female, young adult with slender build, fair skin. Oval face with almond emerald eyes, pointed ears, long flowing silver hair with flowers. Wearing elegant forest green robes with golden embroidery, holding a wooden staff with crystal. Serene expression, standing in a magical forest. Fantasy art style, soft magical lighting, mystical aura.',
    style: 'artistic',
    category: 'character',
    tags: ['fantasy', 'elf', 'magic', 'nature'],
    description: 'An elegant elven spellcaster in harmony with nature',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '4',
    name: 'Cyberpunk Hacker',
    prompt: 'A human, non-binary, young adult with athletic build. Edgy undercut hairstyle with purple and blue neon colors, cybernetic implants on temple. Wearing black leather jacket, ripped jeans, combat boots. Sitting position with neural interface jacked in, focused expression. Cyberpunk art style, neon city background, dramatic lighting with blues and purples.',
    style: 'detailed',
    category: 'character',
    tags: ['cyberpunk', 'hacker', 'urban', 'tech'],
    description: 'A streetwise cyberpunk hacker navigating the digital underground',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '5',
    name: 'Desert Nomad',
    prompt: 'A human, male, adult with weathered build. Sun-darkened skin, face partially covered by desert scarf, deep brown eyes. Wearing layered desert robes, head wrap, sturdy boots. Standing on sand dune, surveying horizon, hand shielding eyes. Realistic art style with warm lighting, desert environment at sunset.',
    style: 'concise',
    category: 'character',
    tags: ['desert', 'nomad', 'explorer', 'realistic'],
    description: 'A seasoned desert traveler surviving in harsh conditions',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '6',
    name: 'Steampunk Inventor',
    prompt: 'A human, female, adult with curvy build and olive skin. Round face with goggles on forehead, wild curly hair with copper highlights. Wearing leather apron, striped shirt with rolled sleeves, tool belt. Standing with arms crossed, confident smile, soot marks on cheek. Victorian steampunk art style, workshop background with brass and copper inventions, warm lighting with steam effects.',
    style: 'detailed',
    category: 'character',
    tags: ['steampunk', 'inventor', 'victorian', 'industrial'],
    description: 'An innovative steampunk inventor with revolutionary ideas',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '7',
    name: 'Modern Detective',
    prompt: 'A human, male, middle-aged with average build. Tired eyes, stubble, furrowed brow. Wearing rumpled trench coat, loose tie, shoulder holster. Standing examining evidence, thoughtful expression. Film noir style, high contrast lighting, rainy city background.',
    style: 'concise',
    category: 'portrait',
    tags: ['noir', 'detective', 'modern', 'mystery'],
    description: 'A hardboiled detective solving impossible cases',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '8',
    name: 'Anime Hero',
    prompt: 'A human, male, teen with athletic build. Spiky colorful hair, large expressive eyes, determined expression. Wearing distinctive school uniform with magical emblem, power gauntlet. Dynamic action pose, one arm extended with energy effect. Anime art style, cel shaded, vibrant colors, action lines background.',
    style: 'detailed',
    category: 'full-body',
    tags: ['anime', 'hero', 'action', 'magical'],
    description: 'A young anime protagonist ready to save the world',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '9',
    name: 'Forest Druid',
    prompt: 'An elderly human druid with white flowing beard and weathered skin. Wrinkled face with kind eyes, antler headdress, vines growing through hair and beard. Wearing natural robes made of leaves and bark, wooden staff with glowing crystal. Kneeling position communing with forest spirits, serene expression. Fantasy art style, dappled forest light, mystical forest background with ancient trees and magical flora.',
    style: 'artistic',
    category: 'character',
    tags: ['druid', 'nature', 'elder', 'magic'],
    description: 'An ancient druid keeper of forest wisdom',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: '10',
    name: 'Space Marine',
    prompt: 'A human, female, adult with muscular build. Strong jawline, short military haircut, cybernetic eye implant. Wearing powered exo-armor with heavy plating, helmet at side, massive rifle. Standing at attention, battle-hardened expression. Sci-fi art style, space station interior background, dramatic lighting with lens flares.',
    style: 'detailed',
    category: 'character',
    tags: ['sci-fi', 'military', 'space', 'warrior'],
    description: 'An elite space marine defender of humanity',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: false
  }
];

interface PromptGeneratorProps {
  parameters: CharacterParameters;
}

export const PromptGenerator: React.FC<PromptGeneratorProps> = ({ parameters }) => {
  const [promptStyle, setPromptStyle] = useState<'detailed' | 'concise' | 'artistic'>('detailed');
  const [autoGenerate, setAutoGenerate] = useState(false);
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

  // Auto-generate prompt when parameters change
  useEffect(() => {
    if (autoGenerate) {
      generatePrompt();
    }
  }, [parameters, promptStyle, autoGenerate]);

  const generatePrompt = () => {
    // Membuat prompt yang lebih lengkap berdasarkan parameter yang ada
    
    // Basic info
    let basicInfo = '';
    if (parameters.characterName) {
      basicInfo += `${parameters.characterName}, `;
    }
    basicInfo += `a ${parameters.gender}, ${parameters.ageGroup}, ${parameters.bodyType} build`;
    
    // Race info
    const race = parameters.race?.race?.label || 'human';
    const subRace = parameters.race?.subRace?.label || '';
    
    // Add sub-race/ethnicity to the race description
    let raceDescription = race;
    if (subRace && parameters.race?.race?.category === 'real') {
      raceDescription = `${subRace} ${race}`;
    }
    
    const raceFeatures = parameters.race?.features?.length > 0 
      ? `with ${parameters.race.features.join(', ')}` 
      : '';
    
    // Head features
    let headInfo = '';
    if (parameters.head) {
      headInfo += `with ${parameters.head.shape} face, `;
      if (parameters.head.hair) {
        headInfo += `${parameters.head.hair.length} ${parameters.head.hair.style} ${parameters.head.hair.color} hair, `;
      }
      if (parameters.head.face) {
        headInfo += `${parameters.head.face.eyes} eyes, ${parameters.head.face.nose} nose, ${parameters.head.face.mouth} mouth, `;
      }
      if (parameters.head.accessories && parameters.head.accessories.length > 0) {
        headInfo += `wearing ${parameters.head.accessories.join(', ')}, `;
      }
    }
    
    // Body features
    let bodyInfo = '';
    if (parameters.body) {
      if (parameters.body.proportions) {
        bodyInfo += `${parameters.body.proportions.height?.label || ''} height, ${parameters.body.proportions.build?.label || ''} build, `;
      }
      if (parameters.body.features) {
        bodyInfo += `${parameters.body.features.skinTone?.label || ''} skin tone, `;
        if (parameters.body.features.scars && parameters.body.features.scars.length > 0) {
          bodyInfo += `with scars: ${parameters.body.features.scars.join(', ')}, `;
        }
        if (parameters.body.features.tattoos && parameters.body.features.tattoos.length > 0) {
          bodyInfo += `with tattoos: ${parameters.body.features.tattoos.join(', ')}, `;
        }
      }
    }
    
    // Clothing info
    let clothingInfo = '';
    if (parameters.clothing) {
      clothingInfo += `wearing ${parameters.clothing.style?.label || 'casual'} clothing, `;
      
      if (parameters.clothing.upperBody && parameters.clothing.upperBody.type) {
        const upperType = parameters.clothing.upperBody.type.label || '';
        const upperColor = parameters.clothing.upperBody.color?.label || '';
        const upperMaterial = parameters.clothing.upperBody.material?.label || '';
        if (upperType !== 'None' && upperType !== 'none') {
          clothingInfo += `${upperColor} ${upperMaterial} ${upperType} on upper body, `;
        }
      }
      
      if (parameters.clothing.lowerBody && parameters.clothing.lowerBody.type) {
        const lowerType = parameters.clothing.lowerBody.type.label || '';
        const lowerColor = parameters.clothing.lowerBody.color?.label || '';
        const lowerMaterial = parameters.clothing.lowerBody.material?.label || '';
        if (lowerType !== 'None' && lowerType !== 'none') {
          clothingInfo += `${lowerColor} ${lowerMaterial} ${lowerType} on lower body, `;
        }
      }
      
      if (parameters.clothing.accessories && parameters.clothing.accessories.length > 0) {
        clothingInfo += `with accessories: ${parameters.clothing.accessories.join(', ')}, `;
      }
    }
    
    // Pose info
    let poseInfo = '';
    if (parameters.pose) {
      poseInfo += `in a ${parameters.pose.stance?.label || 'standing'} pose, `;
      
      // Check if armPosition is individual or regular
      if (typeof parameters.pose.armPosition === 'object' && 'mode' in parameters.pose.armPosition) {
        poseInfo += `with left arm ${parameters.pose.armPosition.left} and right arm ${parameters.pose.armPosition.right}, `;
      } else {
        poseInfo += `with ${parameters.pose.armPosition?.label || 'relaxed'} arms, `;
      }
      
      // Check if handPosition is individual or regular
      if (typeof parameters.pose.handPosition === 'object' && 'mode' in parameters.pose.handPosition) {
        poseInfo += `left hand ${parameters.pose.handPosition.left} and right hand ${parameters.pose.handPosition.right}, `;
      } else {
        poseInfo += `${parameters.pose.handPosition?.label || 'open'} hands, `;
      }
      
      // Check if legPosition is individual or regular
      if (typeof parameters.pose.legPosition === 'object' && 'mode' in parameters.pose.legPosition) {
        poseInfo += `left leg ${parameters.pose.legPosition.left} and right leg ${parameters.pose.legPosition.right}, `;
      } else {
        poseInfo += `${parameters.pose.legPosition?.label || 'straight'} legs, `;
      }
      
      poseInfo += `head ${parameters.pose.headPosition?.label || 'forward'}, `;
      poseInfo += `${parameters.pose.expression?.label || 'neutral'} expression, `;
    }
    
    // Camera and background
    let cameraInfo = '';
    if (parameters.camera) {
      cameraInfo += `${parameters.camera.layout || 'portrait'} layout, `;
      cameraInfo += `${parameters.camera.composition || 'center'} composition, `;
      if (parameters.camera.effects && parameters.camera.effects.length > 0) {
        cameraInfo += `with effects: ${parameters.camera.effects.join(', ')}, `;
      }
    }
    
    let backgroundInfo = '';
    if (parameters.background) {
      backgroundInfo += `${parameters.background.color || 'white'} ${parameters.background.type || 'plain'} background`;
      if (parameters.background.environment && parameters.background.environment !== 'neutral') {
        backgroundInfo += ` in a ${parameters.background.environment} environment`;
      }
    }
    
    // Art style
    let styleInfo = '';
    if (parameters.style) {
      styleInfo += `${parameters.style.artStyle?.label || 'realistic'} art style, `;
      styleInfo += `${parameters.style.rendering?.label || 'detailed'} rendering, `;
      styleInfo += `${parameters.style.lighting?.label || 'natural'} lighting, `;
    }
    
    // Combine all parts
    let generatedPrompt = `${basicInfo} ${raceDescription} ${raceFeatures}. `;
    generatedPrompt += `${headInfo}`;
    generatedPrompt += `${bodyInfo}`;
    generatedPrompt += `${clothingInfo}`;
    generatedPrompt += `${poseInfo}`;
    generatedPrompt += `${styleInfo}`;
    generatedPrompt += `${cameraInfo}`;
    generatedPrompt += `${backgroundInfo}.`;
    
    // Clean up double spaces, commas, and periods
    generatedPrompt = generatedPrompt
      .replace(/\s+/g, ' ')
      .replace(/,\s*,/g, ',')
      .replace(/\.\s*\./g, '.')
      .replace(/\,\s*\./g, '.');
    
    // Apply style formatting based on selected style
    switch (promptStyle) {
      case 'detailed':
        // Already detailed, just clean it up
        break;
      case 'concise':
        // Remove some details to make it more concise
        generatedPrompt = generatedPrompt
          .replace(/,\s+with/g, ' with')
          .replace(/\s+wearing/g, ', wearing')
          .replace(/\s+in a/g, ', in a');
        break;
      case 'artistic':
        // Make it more artistic with richer language
        generatedPrompt = `Stunning artistic portrayal of ${generatedPrompt}`;
        generatedPrompt = generatedPrompt.replace(/,\s+/g, '; ');
        generatedPrompt += ' Vibrant colors, dramatic composition, professional photography.';
        break;
    }
    
    setPromptText(generatedPrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    // In a real app, you'd show a toast notification here
  };

  const savePreset = () => {
    if (presetName.trim() === '') return;
    
    const newPreset: PromptPreset = {
      id: Date.now().toString(),
      name: presetName.trim(),
      prompt: promptText,
      style: promptStyle,
      category: presetCategory,
      tags: presetTags.split(',').map(tag => tag.trim()).filter(Boolean),
      description: presetDescription,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFavorite: false
    };
    
    setPresets([...presets, newPreset]);
    setShowSaveModal(false);
    setPresetName('');
    setPresetTags('');
    setPresetDescription('');
  };

  return (
    <div className="prompt-generator">
      <h3>Prompt Generator</h3>
      
      <div className="style-selector">
        <label htmlFor="promptStyle">Prompt Style:</label>
        <select
          id="promptStyle"
          value={promptStyle}
          onChange={(e) => setPromptStyle(e.target.value as 'detailed' | 'concise' | 'artistic')}
        >
          <option value="detailed">Detailed</option>
          <option value="concise">Concise</option>
          <option value="artistic">Artistic</option>
        </select>
      </div>
      
      <div className="auto-generate-option">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={autoGenerate}
            onChange={(e) => setAutoGenerate(e.target.checked)}
          />
          Auto-generate prompt as parameters change
        </label>
      </div>
      
      <div className="button-group">
        <button className="generate-button" onClick={generatePrompt}>
          Generate Prompt
        </button>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="save-button" onClick={() => setShowSaveModal(true)}>
          Save as Preset
        </button>
      </div>
      
      <div className="prompt-output">
        <h4>Generated Prompt</h4>
        <div className="prompt-text">
          {promptText || "Your generated prompt will appear here. Click 'Generate Prompt' to create one based on your character parameters."}
        </div>
      </div>
      
      <div className="presets-section">
        <div className="presets-header">
          <h4>Saved Presets</h4>
          <div className="presets-filters">
            <input
              type="text"
              className="search-input"
              placeholder="Search presets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="category-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="character">Character</option>
              <option value="portrait">Portrait</option>
              <option value="full-body">Full Body</option>
              <option value="scene">Scene</option>
              <option value="custom">Custom</option>
            </select>
            <button
              className={`favorite-toggle ${showFavorites ? 'active' : ''}`}
              onClick={() => setShowFavorites(!showFavorites)}
            >
              ★
            </button>
          </div>
        </div>
        
        <div className="presets-list">
          {presets.length === 0 ? (
            <div className="preset-empty">
              No presets saved yet. Create and save a prompt to add it here.
            </div>
          ) : (
            presets.map(preset => (
              <div key={preset.id} className="preset-item">
                <div className="preset-info">
                  <div className="preset-header">
                    <span className="preset-name">{preset.name}</span>
                    <button 
                      className={`favorite-button ${preset.isFavorite ? 'active' : ''}`}
                      onClick={() => {
                        // Toggle favorite status
                        const updatedPresets = presets.map(p => 
                          p.id === preset.id ? {...p, isFavorite: !p.isFavorite} : p
                        );
                        setPresets(updatedPresets);
                      }}
                    >
                      {preset.isFavorite ? '★' : '☆'}
                    </button>
                  </div>
                  <span className="preset-category">{preset.category}</span>
                  {preset.description && <p className="preset-description">{preset.description}</p>}
                  <div className="preset-tags">
                    {preset.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="preset-style">Style: {preset.style}</span>
                </div>
                <div className="preset-actions">
                  <button 
                    className="load-button"
                    onClick={() => {
                      setPromptText(preset.prompt);
                      setPromptStyle(preset.style);
                    }}
                  >
                    Load
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => {
                      const updatedPresets = presets.filter(p => p.id !== preset.id);
                      setPresets(updatedPresets);
                    }}
                  >
                    Delete
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
            <h4>Save Preset</h4>
            <div className="form-group">
              <label htmlFor="presetName">Name</label>
              <input
                id="presetName"
                type="text"
                className="preset-name-input"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                placeholder="Enter preset name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="presetCategory">Category</label>
              <select
                id="presetCategory"
                className="preset-category-select"
                value={presetCategory}
                onChange={(e) => setPresetCategory(e.target.value as PresetCategory)}
              >
                <option value="character">Character</option>
                <option value="portrait">Portrait</option>
                <option value="full-body">Full Body</option>
                <option value="scene">Scene</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="presetTags">Tags (comma separated)</label>
              <input
                id="presetTags"
                type="text"
                className="preset-tags-input"
                value={presetTags}
                onChange={(e) => setPresetTags(e.target.value)}
                placeholder="fantasy, warrior, etc."
              />
            </div>
            <div className="form-group">
              <label htmlFor="presetDescription">Description (optional)</label>
              <textarea
                id="presetDescription"
                className="preset-description-input"
                value={presetDescription}
                onChange={(e) => setPresetDescription(e.target.value)}
                placeholder="Describe this preset"
              />
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setShowSaveModal(false)}>
                Cancel
              </button>
              <button className="save-button" onClick={savePreset}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 