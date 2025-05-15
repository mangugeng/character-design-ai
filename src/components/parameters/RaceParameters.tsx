import React, { useState } from 'react';
import { RaceParameters as RaceParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface RaceOption {
  value: string;
  label: string;
  icon: string;
  category: 'real' | 'fantasy' | 'scifi';
}

interface SubRaceOption {
  value: string;
  label: string;
}

interface RaceParametersProps {
  parameters: RaceParametersType;
  onChange: (value: RaceParametersType) => void;
  language?: 'en' | 'id';
}

const realWorldRaces: RaceOption[] = [
  { value: 'caucasian', label: 'Caucasian', icon: '👨‍🦱', category: 'real' },
  { value: 'asian', label: 'Asian', icon: '👨‍🦳', category: 'real' },
  { value: 'african', label: 'African', icon: '👨🏿', category: 'real' },
  { value: 'hispanic', label: 'Hispanic', icon: '👨🏽', category: 'real' },
  { value: 'middle_eastern', label: 'Middle Eastern', icon: '👳', category: 'real' },
  { value: 'indian', label: 'Indian', icon: '👳‍♂️', category: 'real' },
  { value: 'pacific_islander', label: 'Pacific Islander', icon: '👨🏾', category: 'real' },
  { value: 'native_american', label: 'Native American', icon: '👨🏽', category: 'real' }
];

const fantasyRaces: RaceOption[] = [
  { value: 'elf', label: 'Elf', icon: '🧝', category: 'fantasy' },
  { value: 'dwarf', label: 'Dwarf', icon: '🧙', category: 'fantasy' },
  { value: 'orc', label: 'Orc', icon: '👹', category: 'fantasy' },
  { value: 'halfling', label: 'Halfling', icon: '🧒', category: 'fantasy' },
  { value: 'tiefling', label: 'Tiefling', icon: '😈', category: 'fantasy' },
  { value: 'dragonborn', label: 'Dragonborn', icon: '🐲', category: 'fantasy' },
  { value: 'gnome', label: 'Gnome', icon: '🧑‍🔬', category: 'fantasy' },
  { value: 'half_elf', label: 'Half-Elf', icon: '🧝‍♂️', category: 'fantasy' }
];

const sciFiRaces: RaceOption[] = [
  { value: 'android', label: 'Android', icon: '🤖', category: 'scifi' },
  { value: 'alien', label: 'Alien', icon: '👽', category: 'scifi' },
  { value: 'cyborg', label: 'Cyborg', icon: '🦾', category: 'scifi' },
  { value: 'mutant', label: 'Mutant', icon: '🧬', category: 'scifi' },
  { value: 'robot', label: 'Robot', icon: '🤖', category: 'scifi' },
  { value: 'artificial', label: 'Artificial', icon: '💻', category: 'scifi' },
  { value: 'hybrid', label: 'Hybrid', icon: '🧬', category: 'scifi' },
  { value: 'synthetic', label: 'Synthetic', icon: '⚡', category: 'scifi' }
];

const subRaceMap: Record<string, SubRaceOption[]> = {
  // Real World
  caucasian: [
    { value: 'nordic', label: 'Nordic' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'slavic', label: 'Slavic' },
    { value: 'anglo_saxon', label: 'Anglo-Saxon' }
  ],
  asian: [
    { value: 'east_asian', label: 'East Asian' },
    { value: 'southeast_asian', label: 'Southeast Asian' },
    { value: 'south_asian', label: 'South Asian' },
    { value: 'central_asian', label: 'Central Asian' }
  ],
  african: [
    { value: 'west_african', label: 'West African' },
    { value: 'east_african', label: 'East African' },
    { value: 'north_african', label: 'North African' },
    { value: 'central_african', label: 'Central African' },
    { value: 'southern_african', label: 'Southern African' }
  ],
  hispanic: [
    { value: 'mestizo', label: 'Mestizo' },
    { value: 'mulatto', label: 'Mulatto' },
    { value: 'criollo', label: 'Criollo' },
    { value: 'castizo', label: 'Castizo' }
  ],
  middle_eastern: [
    { value: 'arab', label: 'Arab' },
    { value: 'persian', label: 'Persian' },
    { value: 'turkish', label: 'Turkish' },
    { value: 'kurdish', label: 'Kurdish' },
    { value: 'jewish', label: 'Jewish' }
  ],
  indian: [
    { value: 'north_indian', label: 'North Indian' },
    { value: 'south_indian', label: 'South Indian' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: 'gujarati', label: 'Gujarati' }
  ],
  pacific_islander: [
    { value: 'polynesian', label: 'Polynesian' },
    { value: 'micronesian', label: 'Micronesian' },
    { value: 'melanesian', label: 'Melanesian' }
  ],
  native_american: [
    { value: 'plains', label: 'Plains' },
    { value: 'woodland', label: 'Woodland' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'northwest_coast', label: 'Northwest Coast' },
    { value: 'arctic', label: 'Arctic' }
  ],
  // Fantasy
  elf: [
    { value: 'high_elf', label: 'High Elf' },
    { value: 'wood_elf', label: 'Wood Elf' },
    { value: 'dark_elf', label: 'Dark Elf' },
    { value: 'sea_elf', label: 'Sea Elf' },
    { value: 'sun_elf', label: 'Sun Elf' }
  ],
  dwarf: [
    { value: 'hill_dwarf', label: 'Hill Dwarf' },
    { value: 'mountain_dwarf', label: 'Mountain Dwarf' },
    { value: 'deep_dwarf', label: 'Deep Dwarf' },
    { value: 'duergar', label: 'Duergar' }
  ],
  orc: [
    { value: 'mountain_orc', label: 'Mountain Orc' },
    { value: 'forest_orc', label: 'Forest Orc' },
    { value: 'half_orc', label: 'Half-Orc' }
  ],
  halfling: [
    { value: 'lightfoot', label: 'Lightfoot' },
    { value: 'stout', label: 'Stout' },
    { value: 'ghostwise', label: 'Ghostwise' }
  ],
  tiefling: [
    { value: 'infernal', label: 'Infernal' },
    { value: 'abyssal', label: 'Abyssal' }
  ],
  dragonborn: [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'brass', label: 'Brass' },
    { value: 'bronze', label: 'Bronze' },
    { value: 'copper', label: 'Copper' },
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' }
  ],
  gnome: [
    { value: 'forest_gnome', label: 'Forest Gnome' },
    { value: 'rock_gnome', label: 'Rock Gnome' },
    { value: 'deep_gnome', label: 'Deep Gnome' }
  ],
  half_elf: [
    { value: 'urban', label: 'Urban' },
    { value: 'wild', label: 'Wild' }
  ],
  // Sci-Fi
  android: [
    { value: 'service', label: 'Service Android' },
    { value: 'combat', label: 'Combat Android' },
    { value: 'medical', label: 'Medical Android' }
  ],
  alien: [
    { value: 'grey', label: 'Grey' },
    { value: 'reptilian', label: 'Reptilian' },
    { value: 'insectoid', label: 'Insectoid' },
    { value: 'aquatic', label: 'Aquatic' }
  ],
  cyborg: [
    { value: 'human_cyborg', label: 'Human-Cyborg' },
    { value: 'animal_cyborg', label: 'Animal-Cyborg' }
  ],
  mutant: [
    { value: 'telepath', label: 'Telepath' },
    { value: 'shapeshifter', label: 'Shapeshifter' },
    { value: 'elemental', label: 'Elemental' }
  ],
  robot: [
    { value: 'worker', label: 'Worker' },
    { value: 'soldier', label: 'Soldier' },
    { value: 'companion', label: 'Companion' }
  ],
  artificial: [
    { value: 'ai_hologram', label: 'AI Hologram' },
    { value: 'virtual_assistant', label: 'Virtual Assistant' }
  ],
  hybrid: [
    { value: 'human_animal', label: 'Human-Animal' },
    { value: 'human_alien', label: 'Human-Alien' },
    { value: 'human_robot', label: 'Human-Robot' }
  ],
  synthetic: [
    { value: 'bio_synthetic', label: 'Bio-Synthetic' },
    { value: 'nano_synthetic', label: 'Nano-Synthetic' }
  ]
};

const featuresMap: Record<string, string[]> = {
  // Real World
  caucasian: ['Light Skin', 'Blonde/Brown Hair', 'Blue/Green Eyes'],
  asian: ['Straight Black Hair', 'Almond Eyes', 'Yellowish Skin'],
  african: ['Curly Hair', 'Dark Skin', 'Full Lips'],
  hispanic: ['Olive Skin', 'Dark Hair', 'Brown Eyes'],
  middle_eastern: ['Olive Skin', 'Dark Hair', 'Prominent Nose'],
  indian: ['Brown Skin', 'Black Hair', 'Dark Eyes'],
  pacific_islander: ['Tan Skin', 'Wavy Hair', 'Broad Nose'],
  native_american: ['High Cheekbones', 'Straight Black Hair', 'Copper Skin'],
  // Fantasy
  elf: ['Pointed Ears', 'Slender Build', 'Sharp Eyes'],
  dwarf: ['Thick Beard', 'Short Stature', 'Strong Hands'],
  orc: ['Tusks', 'Green Skin', 'Large Muscles'],
  halfling: ['Small Stature', 'Furry Feet', 'Cheerful Face'],
  tiefling: ['Horns', 'Tail', 'Red Skin'],
  dragonborn: ['Scales', 'Dragon Breath', 'Tail'],
  gnome: ['Small Size', 'Big Nose', 'Bright Eyes'],
  half_elf: ['Slightly Pointed Ears', 'Mixed Features', 'Graceful'],
  // Sci-Fi
  android: ['Synthetic Skin', 'Visible Circuits', 'Glowing Eyes'],
  alien: ['Unusual Skin Color', 'Large Eyes', 'Extra Limbs'],
  cyborg: ['Mechanical Limbs', 'Cybernetic Eye', 'Metal Plates'],
  mutant: ['Extra Limbs', 'Unusual Skin', 'Glowing Markings'],
  robot: ['Metal Body', 'LED Eyes', 'Modular Parts'],
  artificial: ['Holographic Body', 'Digital Voice', 'Glowing Aura'],
  hybrid: ['Mixed Features', 'Unusual Abilities', 'Unique Appearance'],
  synthetic: ['Artificial Organs', 'Nanotech Skin', 'Regenerative']
};

const traitsMap: Record<string, string[]> = {
  // Real World
  caucasian: ['Open', 'Independent', 'Creative'],
  asian: ['Disciplined', 'Respectful', 'Persevering'],
  african: ['Strong', 'Friendly', 'Brave'],
  hispanic: ['Warm', 'Expressive', 'Family-Oriented'],
  middle_eastern: ['Hospitable', 'Proud', 'Resilient'],
  indian: ['Spiritual', 'Hardworking', 'Family-Oriented'],
  pacific_islander: ['Community-Oriented', 'Cheerful', 'Resilient'],
  native_american: ['Spiritual', 'Brave', 'Connected to Nature'],
  // Fantasy
  elf: ['Wise', 'Agile', 'Mysterious'],
  dwarf: ['Tough', 'Loyal', 'Skilled'],
  orc: ['Fierce', 'Strong', 'Brave'],
  halfling: ['Lucky', 'Cheerful', 'Resourceful'],
  tiefling: ['Charismatic', 'Cunning', 'Resilient'],
  dragonborn: ['Proud', 'Honorable', 'Fierce'],
  gnome: ['Inventive', 'Curious', 'Cheerful'],
  half_elf: ['Adaptable', 'Diplomatic', 'Creative'],
  // Sci-Fi
  android: ['Logical', 'Efficient', 'Emotionless'],
  alien: ['Mysterious', 'Intelligent', 'Curious'],
  cyborg: ['Resilient', 'Adaptive', 'Strong'],
  mutant: ['Unpredictable', 'Powerful', 'Isolated'],
  robot: ['Obedient', 'Tireless', 'Analytical'],
  artificial: ['Intelligent', 'Fast', 'Unemotional'],
  hybrid: ['Versatile', 'Unique', 'Conflicted'],
  synthetic: ['Durable', 'Advanced', 'Mysterious']
};

export const RaceParameters: React.FC<RaceParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const [activeCategory, setActiveCategory] = useState<'real' | 'fantasy' | 'scifi'>(
    parameters.race?.category || 'real'
  );

  const handleSelectRace = (option: RaceOption) => {
    onChange({
      ...parameters,
      race: option,
      subRace: undefined,
      features: [],
      traits: []
    });
  };

  const handleSelectSubRace = (option: SubRaceOption) => {
    onChange({
      ...parameters,
      subRace: option
    });
  };

  const handleToggleFeature = (feature: string) => {
    const newFeatures = parameters.features?.includes(feature)
      ? parameters.features.filter(f => f !== feature)
      : [...(parameters.features || []), feature];
    
    onChange({
      ...parameters,
      features: newFeatures
    });
  };

  const handleToggleTrait = (trait: string) => {
    const newTraits = parameters.traits?.includes(trait)
      ? parameters.traits.filter(t => t !== trait)
      : [...(parameters.traits || []), trait];
    
    onChange({
      ...parameters,
      traits: newTraits
    });
  };

  // Get sub-race, features, traits for selected race
  const subRaces = parameters.race ? subRaceMap[parameters.race.value] || [] : [];
  const featuresList = parameters.race ? featuresMap[parameters.race.value] || [] : [];
  const traitsList = parameters.race ? traitsMap[parameters.race.value] || [] : [];

  let raceOptions: RaceOption[] = [];
  if (activeCategory === 'real') raceOptions = realWorldRaces;
  if (activeCategory === 'fantasy') raceOptions = fantasyRaces;
  if (activeCategory === 'scifi') raceOptions = sciFiRaces;

  return (
    <div className="race-parameters">
      <div className="form-section">
      
        <p>{language === 'en' ? 'Race customization is temporarily hidden for deployment.' : 'Kustomisasi ras sementara disembunyikan untuk penerapan.'}</p>
      </div>
    </div>
  );
}; 