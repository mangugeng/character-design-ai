'use client';

import React, { useState } from 'react';
import { CharacterParameters } from '../types/parameters';
import { Tab } from './common/Tab';
import { PoseParameters } from './parameters/PoseParameters';

interface CharacterFormProps {
  parameters: CharacterParameters;
  onParameterChange: (key: keyof CharacterParameters, value: any) => void;
}

export const CharacterForm: React.FC<CharacterFormProps> = ({
  parameters,
  onParameterChange
}) => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: '👤' },
    { id: 'race', label: 'Race', icon: '🌍' },
    { id: 'body', label: 'Body', icon: '💪' },
    { id: 'head', label: 'Head', icon: '🧠' },
    { id: 'clothing', label: 'Clothing', icon: '👕' },
    { id: 'pose', label: 'Pose', icon: '🧍' },
    { id: 'style', label: 'Style', icon: '🎨' },
    { id: 'camera', label: 'Camera', icon: '📷' },
    { id: 'background', label: 'Background', icon: '🖼️' }
  ];

  const renderBasicInfo = () => (
    <div className="form-section">
      <h3>Basic Information</h3>
      <div className="form-group">
        <label htmlFor="characterName">Character Name</label>
        <input
          type="text"
          id="characterName"
          value={parameters.characterName || ''}
          onChange={(e) => onParameterChange('characterName', e.target.value)}
          placeholder="Enter character name"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={parameters.gender || ''}
          onChange={(e) => onParameterChange('gender', e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="ageGroup">Age Group</label>
        <select
          id="ageGroup"
          value={parameters.ageGroup || ''}
          onChange={(e) => onParameterChange('ageGroup', e.target.value)}
        >
          <option value="child">Child</option>
          <option value="teen">Teen</option>
          <option value="young adult">Young Adult</option>
          <option value="adult">Adult</option>
          <option value="elderly">Elderly</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="bodyType">Body Type</label>
        <select
          id="bodyType"
          value={parameters.bodyType || ''}
          onChange={(e) => onParameterChange('bodyType', e.target.value)}
        >
          <option value="slim">Slim</option>
          <option value="athletic">Athletic</option>
          <option value="average">Average</option>
          <option value="curvy">Curvy</option>
          <option value="muscular">Muscular</option>
        </select>
      </div>
    </div>
  );

  const renderRaceInfo = () => (
    <div className="form-section">
      <h3>Race Information</h3>
      <div className="form-group">
        <label htmlFor="raceCategory">Race Category</label>
        <select
          id="raceCategory"
          value={parameters.race?.race?.category || 'real'}
          onChange={(e) => {
            const category = e.target.value as 'real' | 'fantasy' | 'scifi';
            onParameterChange('race', {
              ...parameters.race,
              race: {
                ...parameters.race.race,
                category
              }
            });
          }}
        >
          <option value="real">Human/Real World</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Sci-Fi</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="raceValue">Race</label>
        <select
          id="raceValue"
          value={parameters.race?.race?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            onParameterChange('race', {
              ...parameters.race,
              race: {
                ...parameters.race.race,
                value,
                label: e.target.options[e.target.selectedIndex].text
              },
              // Reset sub-race when main race changes
              subRace: undefined
            });
          }}
        >
          {parameters.race?.race?.category === 'real' ? (
            <>
              <option value="caucasian">Caucasian</option>
              <option value="african">African</option>
              <option value="asian">Asian</option>
              <option value="hispanic">Hispanic</option>
              <option value="middle-eastern">Middle Eastern</option>
              <option value="indigenous">Indigenous</option>
              <option value="mixed">Mixed</option>
            </>
          ) : parameters.race?.race?.category === 'fantasy' ? (
            <>
              <option value="elf">Elf</option>
              <option value="dwarf">Dwarf</option>
              <option value="orc">Orc</option>
              <option value="goblin">Goblin</option>
              <option value="fairy">Fairy</option>
              <option value="vampire">Vampire</option>
              <option value="werewolf">Werewolf</option>
            </>
          ) : (
            <>
              <option value="alien">Alien</option>
              <option value="android">Android</option>
              <option value="cyborg">Cyborg</option>
              <option value="mutant">Mutant</option>
              <option value="synthetic">Synthetic</option>
            </>
          )}
        </select>
      </div>
      
      {parameters.race?.race?.category === 'real' && parameters.race?.race?.value && (
        <div className="form-group">
          <label htmlFor="subRaceValue">Sub-Region/Ethnicity</label>
          <select
            id="subRaceValue"
            value={parameters.race?.subRace?.value || ''}
            onChange={(e) => {
              const value = e.target.value;
              onParameterChange('race', {
                ...parameters.race,
                subRace: {
                  value,
                  label: e.target.options[e.target.selectedIndex].text
                }
              });
            }}
          >
            <option value="">Select Sub-Region</option>
            {parameters.race?.race?.value === 'caucasian' && (
              <>
                <option value="western-european">Western European</option>
                <option value="eastern-european">Eastern European</option>
                <option value="northern-european">Northern European/Scandinavian</option>
                <option value="southern-european">Southern European/Mediterranean</option>
                <option value="slavic">Slavic</option>
                <option value="celtic">Celtic</option>
                <option value="germanic">Germanic</option>
              </>
            )}
            {parameters.race?.race?.value === 'african' && (
              <>
                <option value="west-african">West African</option>
                <option value="east-african">East African</option>
                <option value="north-african">North African</option>
                <option value="central-african">Central African</option>
                <option value="southern-african">Southern African</option>
                <option value="horn-of-africa">Horn of Africa</option>
                <option value="african-american">African American</option>
                <option value="afro-caribbean">Afro-Caribbean</option>
              </>
            )}
            {parameters.race?.race?.value === 'asian' && (
              <>
                <option value="east-asian">East Asian (Chinese/Japanese/Korean)</option>
                <option value="southeast-asian">Southeast Asian</option>
                <option value="indonesian">Indonesian</option>
                <option value="filipino">Filipino</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="thai">Thai</option>
                <option value="malaysian">Malaysian</option>
                <option value="burmese">Burmese</option>
                <option value="south-asian">South Asian (Indian/Pakistani/Bangladeshi)</option>
                <option value="central-asian">Central Asian</option>
                <option value="mongolian">Mongolian</option>
                <option value="tibetan">Tibetan</option>
                <option value="pacific-islander">Pacific Islander</option>
              </>
            )}
            {parameters.race?.race?.value === 'hispanic' && (
              <>
                <option value="mexican">Mexican</option>
                <option value="central-american">Central American</option>
                <option value="south-american">South American</option>
                <option value="caribbean">Caribbean</option>
                <option value="spanish">Spanish</option>
                <option value="portuguese">Portuguese</option>
                <option value="brazilian">Brazilian</option>
                <option value="andean">Andean</option>
                <option value="argentinian">Argentinian</option>
                <option value="colombian">Colombian</option>
              </>
            )}
            {parameters.race?.race?.value === 'middle-eastern' && (
              <>
                <option value="arab">Arab</option>
                <option value="persian">Persian</option>
                <option value="turkish">Turkish</option>
                <option value="levantine">Levantine</option>
                <option value="north-african">North African</option>
                <option value="jewish">Jewish</option>
                <option value="kurdish">Kurdish</option>
                <option value="azerbaijani">Azerbaijani</option>
              </>
            )}
            {parameters.race?.race?.value === 'indigenous' && (
              <>
                <option value="native-american">Native American</option>
                <option value="inuit">Inuit/Alaskan</option>
                <option value="amazonian">Amazonian</option>
                <option value="andean">Andean</option>
                <option value="aboriginal-australian">Aboriginal Australian</option>
                <option value="maori">Maori/Polynesian</option>
                <option value="sami">Sami</option>
                <option value="siberian">Siberian</option>
              </>
            )}
            {parameters.race?.race?.value === 'mixed' && (
              <>
                <option value="eurasian">Eurasian</option>
                <option value="afro-asian">Afro-Asian</option>
                <option value="afro-latino">Afro-Latino</option>
                <option value="mestizo">Mestizo</option>
                <option value="mulatto">Mulatto</option>
                <option value="hapa">Hapa/Mixed Asian</option>
                <option value="creole">Creole</option>
                <option value="custom-mix">Custom Mix</option>
              </>
            )}
          </select>
        </div>
      )}
      
      <div className="form-group">
        <label>Race Features</label>
        <input
          type="text"
          value={parameters.race?.features?.join(', ') || ''}
          onChange={(e) => {
            const features = e.target.value.split(',').map(f => f.trim()).filter(Boolean);
            onParameterChange('race', {
              ...parameters.race,
              features
            });
          }}
          placeholder="e.g., pointed ears, blue skin (comma separated)"
        />
      </div>
    </div>
  );

  const renderBodyInfo = () => (
    <div className="form-section">
      <h3>Body Information</h3>
      
      <h4>Proportions</h4>
      <div className="form-group">
        <label htmlFor="bodyHeight">Height</label>
        <select
          id="bodyHeight"
          value={parameters.body?.proportions?.height?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('body', {
              ...parameters.body,
              proportions: {
                ...parameters.body.proportions,
                height: {
                  value,
                  label,
                  icon: '🧍'
                }
              }
            });
          }}
        >
          <option value="short">Short</option>
          <option value="below-average">Below Average</option>
          <option value="average">Average</option>
          <option value="above-average">Above Average</option>
          <option value="tall">Tall</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="bodyBuild">Build</label>
        <select
          id="bodyBuild"
          value={parameters.body?.proportions?.build?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('body', {
              ...parameters.body,
              proportions: {
                ...parameters.body.proportions,
                build: {
                  value,
                  label,
                  icon: '🧍'
                }
              }
            });
          }}
        >
          <option value="skinny">Skinny</option>
          <option value="slim">Slim</option>
          <option value="average">Average</option>
          <option value="athletic">Athletic</option>
          <option value="muscular">Muscular</option>
          <option value="heavy">Heavy</option>
        </select>
      </div>
      
      <h4>Features</h4>
      <div className="form-group">
        <label htmlFor="skinTone">Skin Tone</label>
        <select
          id="skinTone"
          value={parameters.body?.features?.skinTone?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('body', {
              ...parameters.body,
              features: {
                ...parameters.body.features,
                skinTone: {
                  value,
                  label,
                  icon: '👋'
                }
              }
            });
          }}
        >
          <option value="very-fair">Very Fair</option>
          <option value="fair">Fair</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="olive">Olive</option>
          <option value="tan">Tan</option>
          <option value="brown">Brown</option>
          <option value="dark-brown">Dark Brown</option>
          <option value="black">Black</option>
          <option value="fantasy">Fantasy Color</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Scars (comma separated)</label>
        <input
          type="text"
          value={parameters.body?.features?.scars?.join(', ') || ''}
          onChange={(e) => {
            const scars = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
            onParameterChange('body', {
              ...parameters.body,
              features: {
                ...parameters.body.features,
                scars
              }
            });
          }}
          placeholder="e.g., face scar, arm scar"
        />
      </div>
      
      <div className="form-group">
        <label>Tattoos (comma separated)</label>
        <input
          type="text"
          value={parameters.body?.features?.tattoos?.join(', ') || ''}
          onChange={(e) => {
            const tattoos = e.target.value.split(',').map(t => t.trim()).filter(Boolean);
            onParameterChange('body', {
              ...parameters.body,
              features: {
                ...parameters.body.features,
                tattoos
              }
            });
          }}
          placeholder="e.g., arm tattoo, back tattoo"
        />
      </div>
    </div>
  );

  const renderHeadInfo = () => (
    <div className="form-section">
      <h3>Head Information</h3>
      
      <div className="form-group">
        <label htmlFor="headShape">Head Shape</label>
        <select
          id="headShape"
          value={parameters.head?.shape || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              shape: e.target.value
            });
          }}
        >
          <option value="round">Round</option>
          <option value="oval">Oval</option>
          <option value="square">Square</option>
          <option value="heart">Heart</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>
      
      <h4>Hair</h4>
      <div className="form-group">
        <label htmlFor="hairStyle">Hair Style</label>
        <select
          id="hairStyle"
          value={parameters.head?.hair?.style || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              hair: {
                ...parameters.head.hair,
                style: e.target.value
              }
            });
          }}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="curly">Curly</option>
          <option value="wavy">Wavy</option>
          <option value="straight">Straight</option>
          <option value="bald">Bald</option>
          <option value="buzz-cut">Buzz Cut</option>
          <option value="mohawk">Mohawk</option>
          <option value="ponytail">Ponytail</option>
          <option value="braided">Braided</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="hairColor">Hair Color</label>
        <select
          id="hairColor"
          value={parameters.head?.hair?.color || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              hair: {
                ...parameters.head.hair,
                color: e.target.value
              }
            });
          }}
        >
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
          <option value="auburn">Auburn</option>
          <option value="gray">Gray</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="rainbow">Rainbow</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="hairLength">Hair Length</label>
        <select
          id="hairLength"
          value={parameters.head?.hair?.length || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              hair: {
                ...parameters.head.hair,
                length: e.target.value
              }
            });
          }}
        >
          <option value="bald">Bald</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="very-long">Very Long</option>
        </select>
      </div>
      
      <h4>Face</h4>
      <div className="form-group">
        <label htmlFor="eyeShape">Eye Shape</label>
        <select
          id="eyeShape"
          value={parameters.head?.face?.eyes || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              face: {
                ...parameters.head.face,
                eyes: e.target.value
              }
            });
          }}
        >
          <option value="round">Round</option>
          <option value="almond">Almond</option>
          <option value="wide">Wide</option>
          <option value="narrow">Narrow</option>
          <option value="hooded">Hooded</option>
          <option value="cat-like">Cat-like</option>
          <option value="deep-set">Deep-set</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="noseShape">Nose Shape</label>
        <select
          id="noseShape"
          value={parameters.head?.face?.nose || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              face: {
                ...parameters.head.face,
                nose: e.target.value
              }
            });
          }}
        >
          <option value="straight">Straight</option>
          <option value="roman">Roman</option>
          <option value="button">Button</option>
          <option value="wide">Wide</option>
          <option value="narrow">Narrow</option>
          <option value="upturned">Upturned</option>
          <option value="aquiline">Aquiline</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="mouthShape">Mouth Shape</label>
        <select
          id="mouthShape"
          value={parameters.head?.face?.mouth || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              face: {
                ...parameters.head.face,
                mouth: e.target.value
              }
            });
          }}
        >
          <option value="full">Full</option>
          <option value="thin">Thin</option>
          <option value="wide">Wide</option>
          <option value="small">Small</option>
          <option value="heart">Heart</option>
          <option value="neutral">Neutral</option>
          <option value="smiling">Smiling</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="earShape">Ear Shape</label>
        <select
          id="earShape"
          value={parameters.head?.face?.ears || ''}
          onChange={(e) => {
            onParameterChange('head', {
              ...parameters.head,
              face: {
                ...parameters.head.face,
                ears: e.target.value
              }
            });
          }}
        >
          <option value="normal">Normal</option>
          <option value="small">Small</option>
          <option value="large">Large</option>
          <option value="pointed">Pointed</option>
          <option value="round">Round</option>
          <option value="elfin">Elfin</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Head Accessories (comma separated)</label>
        <input
          type="text"
          value={parameters.head?.accessories?.join(', ') || ''}
          onChange={(e) => {
            const accessories = e.target.value.split(',').map(a => a.trim()).filter(Boolean);
            onParameterChange('head', {
              ...parameters.head,
              accessories
            });
          }}
          placeholder="e.g., glasses, earrings, scars"
        />
      </div>
    </div>
  );

  const renderStyleInfo = () => (
    <div className="form-section">
      <h3>Style Information</h3>
      
      <div className="form-group">
        <label htmlFor="artStyle">Art Style</label>
        <select
          id="artStyle"
          value={parameters.style?.artStyle?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('style', {
              ...parameters.style,
              artStyle: {
                value,
                label,
                icon: '🖼️'
              }
            });
          }}
        >
          <option value="realistic">Realistic</option>
          <option value="anime">Anime</option>
          <option value="cartoon">Cartoon</option>
          <option value="digital-art">Digital Art</option>
          <option value="oil-painting">Oil Painting</option>
          <option value="watercolor">Watercolor</option>
          <option value="pixel-art">Pixel Art</option>
          <option value="vector">Vector</option>
          <option value="concept-art">Concept Art</option>
          <option value="comic">Comic</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="rendering">Rendering Style</label>
        <select
          id="rendering"
          value={parameters.style?.rendering?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('style', {
              ...parameters.style,
              rendering: {
                value,
                label,
                icon: '✨'
              }
            });
          }}
        >
          <option value="detailed">Detailed</option>
          <option value="sketch">Sketch</option>
          <option value="line-art">Line Art</option>
          <option value="flat">Flat</option>
          <option value="3d">3D</option>
          <option value="cel-shaded">Cel Shaded</option>
          <option value="hyperdetailed">Hyper-detailed</option>
          <option value="minimalist">Minimalist</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="lighting">Lighting Style</label>
        <select
          id="lighting"
          value={parameters.style?.lighting?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('style', {
              ...parameters.style,
              lighting: {
                value,
                label,
                icon: '💡'
              }
            });
          }}
        >
          <option value="soft">Soft</option>
          <option value="hard">Hard</option>
          <option value="natural">Natural</option>
          <option value="dramatic">Dramatic</option>
          <option value="cinematic">Cinematic</option>
          <option value="studio">Studio</option>
          <option value="backlit">Backlit</option>
          <option value="ambient">Ambient</option>
          <option value="neon">Neon</option>
          <option value="night">Night</option>
          <option value="day">Day</option>
        </select>
      </div>
    </div>
  );

  const renderClothingInfo = () => (
    <div className="form-section">
      <h3>Clothing Information</h3>
      
      <div className="form-group">
        <label htmlFor="clothingStyle">Clothing Style</label>
        <select
          id="clothingStyle"
          value={parameters.clothing?.style?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              style: {
                value,
                label,
                icon: '👕'
              }
            });
          }}
        >
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="business">Business</option>
          <option value="sporty">Sporty</option>
          <option value="streetwear">Streetwear</option>
          <option value="vintage">Vintage</option>
          <option value="bohemian">Bohemian</option>
          <option value="gothic">Gothic</option>
          <option value="punk">Punk</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Sci-Fi</option>
          <option value="military">Military</option>
          <option value="medieval">Medieval</option>
        </select>
      </div>
      
      <h4>Upper Body</h4>
      <div className="form-group">
        <label htmlFor="upperBodyType">Type</label>
        <select
          id="upperBodyType"
          value={parameters.clothing?.upperBody?.type?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              upperBody: {
                ...parameters.clothing.upperBody,
                type: {
                  value,
                  label,
                  icon: '👕'
                }
              }
            });
          }}
        >
          <option value="t-shirt">T-Shirt</option>
          <option value="shirt">Shirt</option>
          <option value="blouse">Blouse</option>
          <option value="sweater">Sweater</option>
          <option value="hoodie">Hoodie</option>
          <option value="jacket">Jacket</option>
          <option value="coat">Coat</option>
          <option value="suit">Suit</option>
          <option value="tank-top">Tank Top</option>
          <option value="dress">Dress</option>
          <option value="none">None</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="upperBodyColor">Color</label>
        <select
          id="upperBodyColor"
          value={parameters.clothing?.upperBody?.color?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              upperBody: {
                ...parameters.clothing.upperBody,
                color: {
                  value,
                  label,
                  icon: '🎨'
                }
              }
            });
          }}
        >
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="brown">Brown</option>
          <option value="gray">Gray</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="upperBodyMaterial">Material</label>
        <select
          id="upperBodyMaterial"
          value={parameters.clothing?.upperBody?.material?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              upperBody: {
                ...parameters.clothing.upperBody,
                material: {
                  value,
                  label,
                  icon: '🧵'
                }
              }
            });
          }}
        >
          <option value="cotton">Cotton</option>
          <option value="wool">Wool</option>
          <option value="silk">Silk</option>
          <option value="linen">Linen</option>
          <option value="leather">Leather</option>
          <option value="denim">Denim</option>
          <option value="polyester">Polyester</option>
          <option value="metal">Metal</option>
          <option value="fur">Fur</option>
          <option value="velvet">Velvet</option>
        </select>
      </div>
      
      <h4>Lower Body</h4>
      <div className="form-group">
        <label htmlFor="lowerBodyType">Type</label>
        <select
          id="lowerBodyType"
          value={parameters.clothing?.lowerBody?.type?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              lowerBody: {
                ...parameters.clothing.lowerBody,
                type: {
                  value,
                  label,
                  icon: '👖'
                }
              }
            });
          }}
        >
          <option value="jeans">Jeans</option>
          <option value="pants">Pants</option>
          <option value="shorts">Shorts</option>
          <option value="skirt">Skirt</option>
          <option value="leggings">Leggings</option>
          <option value="sweatpants">Sweatpants</option>
          <option value="none">None</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="lowerBodyColor">Color</label>
        <select
          id="lowerBodyColor"
          value={parameters.clothing?.lowerBody?.color?.value || ''}
          onChange={(e) => {
            const value = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            onParameterChange('clothing', {
              ...parameters.clothing,
              lowerBody: {
                ...parameters.clothing.lowerBody,
                color: {
                  value,
                  label,
                  icon: '🎨'
                }
              }
            });
          }}
        >
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="gray">Gray</option>
          <option value="brown">Brown</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Accessories (comma separated)</label>
        <input
          type="text"
          value={parameters.clothing?.accessories?.join(', ') || ''}
          onChange={(e) => {
            const accessories = e.target.value.split(',').map(a => a.trim()).filter(Boolean);
            onParameterChange('clothing', {
              ...parameters.clothing,
              accessories
            });
          }}
          placeholder="e.g., necklace, bracelet, watch"
        />
      </div>
    </div>
  );

  const renderPoseInfo = () => (
    <div className="form-section">
      <h3>Pose Information</h3>
      <PoseParameters 
        parameters={parameters.pose} 
        onChange={(value) => onParameterChange('pose', value)} 
      />
    </div>
  );

  const renderCameraInfo = () => (
    <div className="form-section">
      <h3>Camera Information</h3>
      
      <div className="form-group">
        <label htmlFor="cameraLayout">Layout</label>
        <select
          id="cameraLayout"
          value={parameters.camera?.layout || ''}
          onChange={(e) => {
            onParameterChange('camera', {
              ...parameters.camera,
              layout: e.target.value
            });
          }}
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
          <option value="square">Square</option>
          <option value="panorama">Panorama</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="cameraComposition">Composition</label>
        <select
          id="cameraComposition"
          value={parameters.camera?.composition || ''}
          onChange={(e) => {
            onParameterChange('camera', {
              ...parameters.camera,
              composition: e.target.value
            });
          }}
        >
          <option value="center">Center</option>
          <option value="rule-of-thirds">Rule of Thirds</option>
          <option value="golden-ratio">Golden Ratio</option>
          <option value="diagonal">Diagonal</option>
          <option value="symmetrical">Symmetrical</option>
          <option value="frame-within-frame">Frame within Frame</option>
          <option value="leading-lines">Leading Lines</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Effects (comma separated)</label>
        <input
          type="text"
          value={parameters.camera?.effects?.join(', ') || ''}
          onChange={(e) => {
            const effects = e.target.value.split(',').map(ef => ef.trim()).filter(Boolean);
            onParameterChange('camera', {
              ...parameters.camera,
              effects
            });
          }}
          placeholder="e.g., blur, bokeh, vignette"
        />
      </div>
    </div>
  );

  const renderBackgroundInfo = () => (
    <div className="form-section">
      <h3>Background Information</h3>
      
      <div className="form-group">
        <label htmlFor="backgroundType">Background Type</label>
        <select
          id="backgroundType"
          value={parameters.background?.type || ''}
          onChange={(e) => {
            onParameterChange('background', {
              ...parameters.background,
              type: e.target.value
            });
          }}
        >
          <option value="plain">Plain</option>
          <option value="gradient">Gradient</option>
          <option value="pattern">Pattern</option>
          <option value="environment">Environment</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="nature">Nature</option>
          <option value="urban">Urban</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Sci-Fi</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="backgroundColor">Background Color</label>
        <select
          id="backgroundColor"
          value={parameters.background?.color || ''}
          onChange={(e) => {
            onParameterChange('background', {
              ...parameters.background,
              color: e.target.value
            });
          }}
        >
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="brown">Brown</option>
          <option value="transparent">Transparent</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="backgroundEnvironment">Environment</label>
        <select
          id="backgroundEnvironment"
          value={parameters.background?.environment || ''}
          onChange={(e) => {
            onParameterChange('background', {
              ...parameters.background,
              environment: e.target.value
            });
          }}
        >
          <option value="neutral">Neutral</option>
          <option value="forest">Forest</option>
          <option value="beach">Beach</option>
          <option value="mountains">Mountains</option>
          <option value="desert">Desert</option>
          <option value="city">City</option>
          <option value="village">Village</option>
          <option value="space">Space</option>
          <option value="underwater">Underwater</option>
          <option value="cave">Cave</option>
          <option value="ruins">Ruins</option>
          <option value="castle">Castle</option>
          <option value="futuristic">Futuristic</option>
        </select>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicInfo();
      case 'race':
        return renderRaceInfo();
      case 'body':
        return renderBodyInfo();
      case 'head':
        return renderHeadInfo();
      case 'clothing':
        return renderClothingInfo();
      case 'pose':
        return renderPoseInfo();
      case 'style':
        return renderStyleInfo();
      case 'camera':
        return renderCameraInfo();
      case 'background':
        return renderBackgroundInfo();
      default:
        return (
          <div className="form-section">
            <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Information</h3>
            <p>This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="character-form">
      <h2>Character Parameters</h2>
      
      <div className="tab-container">
        <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}; 