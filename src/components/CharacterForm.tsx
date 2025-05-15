'use client';

import React, { useState } from 'react';
import { CharacterParameters } from '../types/parameters';
import { Tab } from './common/Tab';
import { PoseParameters } from './parameters/PoseParameters';
import { BodyParameters } from './parameters/BodyParameters';
import { HeadParameters } from './parameters/HeadParameters';
import { StyleParameters } from './parameters/StyleParameters';
import { ClothingParameters } from './parameters/ClothingParameters';
import { CameraParameters } from './parameters/CameraParameters';
import { BackgroundParameters } from './parameters/BackgroundParameters';

interface CharacterFormProps {
  parameters: CharacterParameters;
  onParameterChange: (key: keyof CharacterParameters, value: any) => void;
  language: 'en' | 'id';
}

// English translations
const enTranslations = {
  basicInfoTab: 'Basic Info',
  raceTab: 'Race',
  bodyTab: 'Body',
  headTab: 'Head',
  clothingTab: 'Clothing',
  poseTab: 'Pose',
  styleTab: 'Style',
  cameraTab: 'Camera',
  backgroundTab: 'Background',
  basicInformation: 'Basic Information',
  characterName: 'Character Name',
  enterCharacterName: 'Enter character name',
  gender: 'Gender',
  male: 'Male',
  female: 'Female',
  other: 'Other',
  ageGroup: 'Age Group',
  child: 'Child',
  teen: 'Teen',
  youngAdult: 'Young Adult',
  adult: 'Adult',
  elderly: 'Elderly',
  bodyType: 'Body Type',
  slim: 'Slim',
  athletic: 'Athletic',
  average: 'Average',
  curvy: 'Curvy',
  muscular: 'Muscular',
  raceInformation: 'Race Information',
  raceCategory: 'Race Category',
  humanRealWorld: 'Human/Real World',
  fantasy: 'Fantasy',
  sciFi: 'Sci-Fi',
  race: 'Race',
  subRaceEthnicity: 'Sub-Region/Ethnicity',
  selectSubRegion: 'Select Sub-Region',
  bodyDetails: 'Body Details',
  headDetails: 'Head Details',
  styleDetails: 'Style Details',
  artStyle: 'Art Style',
  cameraDetails: 'Camera Details',
  backgroundDetails: 'Background Details',
  clothingDetails: 'Clothing Details',
  poseDetails: 'Pose Details'
};

// Indonesian translations
const idTranslations = {
  basicInfoTab: 'Info Dasar',
  raceTab: 'Ras',
  bodyTab: 'Tubuh',
  headTab: 'Kepala',
  clothingTab: 'Pakaian',
  poseTab: 'Pose',
  styleTab: 'Gaya',
  cameraTab: 'Kamera',
  backgroundTab: 'Latar Belakang',
  basicInformation: 'Informasi Dasar',
  characterName: 'Nama Karakter',
  enterCharacterName: 'Masukkan nama karakter',
  gender: 'Jenis Kelamin',
  male: 'Laki-laki',
  female: 'Perempuan',
  other: 'Lainnya',
  ageGroup: 'Kelompok Usia',
  child: 'Anak-anak',
  teen: 'Remaja',
  youngAdult: 'Dewasa Muda',
  adult: 'Dewasa',
  elderly: 'Lanjut Usia',
  bodyType: 'Tipe Tubuh',
  slim: 'Kurus',
  athletic: 'Atletis',
  average: 'Rata-rata',
  curvy: 'Berisi',
  muscular: 'Berotot',
  raceInformation: 'Informasi Ras',
  raceCategory: 'Kategori Ras',
  humanRealWorld: 'Manusia/Dunia Nyata',
  fantasy: 'Fantasi',
  sciFi: 'Fiksi Ilmiah',
  race: 'Ras',
  subRaceEthnicity: 'Sub-Wilayah/Etnis',
  selectSubRegion: 'Pilih Sub-Wilayah',
  bodyDetails: 'Detail Tubuh',
  headDetails: 'Detail Kepala',
  styleDetails: 'Detail Gaya',
  artStyle: 'Gaya Seni',
  cameraDetails: 'Detail Kamera',
  backgroundDetails: 'Detail Latar Belakang',
  clothingDetails: 'Detail Pakaian',
  poseDetails: 'Detail Pose'
};

export const CharacterForm: React.FC<CharacterFormProps> = ({
  parameters,
  onParameterChange,
  language
}) => {
  const [activeTab, setActiveTab] = useState('basic');
  const translations = language === 'en' ? enTranslations : idTranslations;

  const tabs = [
    { id: 'basic', label: translations.basicInfoTab, icon: '👤' },
    { id: 'race', label: translations.raceTab, icon: '🌍' },
    { id: 'body', label: translations.bodyTab, icon: '💪' },
    { id: 'head', label: translations.headTab, icon: '🧠' },
    { id: 'clothing', label: translations.clothingTab, icon: '👕' },
    { id: 'pose', label: translations.poseTab, icon: '🧍' },
    { id: 'style', label: translations.styleTab, icon: '🎨' },
    { id: 'camera', label: translations.cameraTab, icon: '📷' },
    { id: 'background', label: translations.backgroundTab, icon: '🖼️' }
  ];

  const renderBasicInfo = () => (
    <div className="form-section">
      <h3>{translations.basicInformation}</h3>
      <div className="form-group">
        <label htmlFor="characterName">{translations.characterName}</label>
        <input
          type="text"
          id="characterName"
          value={parameters.characterName || ''}
          onChange={(e) => onParameterChange('characterName', e.target.value)}
          placeholder={translations.enterCharacterName}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="gender">{translations.gender}</label>
        <select
          id="gender"
          value={parameters.gender || ''}
          onChange={(e) => onParameterChange('gender', e.target.value)}
        >
          <option value="male">{translations.male}</option>
          <option value="female">{translations.female}</option>
          <option value="other">{translations.other}</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="ageGroup">{translations.ageGroup}</label>
        <select
          id="ageGroup"
          value={parameters.ageGroup || ''}
          onChange={(e) => onParameterChange('ageGroup', e.target.value)}
        >
          <option value="child">{translations.child}</option>
          <option value="teen">{translations.teen}</option>
          <option value="young adult">{translations.youngAdult}</option>
          <option value="adult">{translations.adult}</option>
          <option value="elderly">{translations.elderly}</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="bodyType">{translations.bodyType}</label>
        <select
          id="bodyType"
          value={parameters.bodyType || ''}
          onChange={(e) => onParameterChange('bodyType', e.target.value)}
        >
          <option value="slim">{translations.slim}</option>
          <option value="athletic">{translations.athletic}</option>
          <option value="average">{translations.average}</option>
          <option value="curvy">{translations.curvy}</option>
          <option value="muscular">{translations.muscular}</option>
        </select>
      </div>
    </div>
  );

  const renderRaceInfo = () => (
    <div className="form-section">
      <h3>{translations.raceInformation}</h3>
      <div className="form-group">
        <label htmlFor="raceCategory">{translations.raceCategory}</label>
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
          <option value="real">{translations.humanRealWorld}</option>
          <option value="fantasy">{translations.fantasy}</option>
          <option value="scifi">{translations.sciFi}</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="raceValue">{translations.race}</label>
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
              <option value="caucasian">{language === 'en' ? 'Caucasian' : 'Kaukasia'}</option>
              <option value="african">{language === 'en' ? 'African' : 'Afrika'}</option>
              <option value="asian">{language === 'en' ? 'Asian' : 'Asia'}</option>
              <option value="hispanic">{language === 'en' ? 'Hispanic' : 'Hispanik'}</option>
              <option value="middle-eastern">{language === 'en' ? 'Middle Eastern' : 'Timur Tengah'}</option>
              <option value="indigenous">{language === 'en' ? 'Indigenous' : 'Pribumi'}</option>
              <option value="mixed">{language === 'en' ? 'Mixed' : 'Campuran'}</option>
            </>
          ) : parameters.race?.race?.category === 'fantasy' ? (
            <>
              <option value="elf">{language === 'en' ? 'Elf' : 'Peri'}</option>
              <option value="dwarf">{language === 'en' ? 'Dwarf' : 'Kurcaci'}</option>
              <option value="orc">{language === 'en' ? 'Orc' : 'Orc'}</option>
              <option value="goblin">{language === 'en' ? 'Goblin' : 'Goblin'}</option>
              <option value="fairy">{language === 'en' ? 'Fairy' : 'Peri Kecil'}</option>
              <option value="vampire">{language === 'en' ? 'Vampire' : 'Vampir'}</option>
              <option value="werewolf">{language === 'en' ? 'Werewolf' : 'Manusia Serigala'}</option>
            </>
          ) : (
            <>
              <option value="alien">{language === 'en' ? 'Alien' : 'Alien'}</option>
              <option value="android">{language === 'en' ? 'Android' : 'Android'}</option>
              <option value="cyborg">{language === 'en' ? 'Cyborg' : 'Cyborg'}</option>
              <option value="mutant">{language === 'en' ? 'Mutant' : 'Mutan'}</option>
              <option value="synthetic">{language === 'en' ? 'Synthetic' : 'Sintetis'}</option>
            </>
          )}
        </select>
      </div>
      
      {parameters.race?.race?.category === 'real' && parameters.race?.race?.value && (
        <div className="form-group">
          <label htmlFor="subRaceValue">{translations.subRaceEthnicity}</label>
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
            <option value="">{translations.selectSubRegion}</option>
            {parameters.race?.race?.value === 'caucasian' && (
              <>
                <option value="western-european">{language === 'en' ? 'Western European' : 'Eropa Barat'}</option>
                <option value="eastern-european">{language === 'en' ? 'Eastern European' : 'Eropa Timur'}</option>
                <option value="northern-european">{language === 'en' ? 'Northern European/Scandinavian' : 'Eropa Utara/Skandinavia'}</option>
                <option value="southern-european">{language === 'en' ? 'Southern European/Mediterranean' : 'Eropa Selatan/Mediterania'}</option>
                <option value="slavic">{language === 'en' ? 'Slavic' : 'Slavia'}</option>
                <option value="celtic">{language === 'en' ? 'Celtic' : 'Keltik'}</option>
                <option value="germanic">{language === 'en' ? 'Germanic' : 'Jermanik'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'african' && (
              <>
                <option value="west-african">{language === 'en' ? 'West African' : 'Afrika Barat'}</option>
                <option value="east-african">{language === 'en' ? 'East African' : 'Afrika Timur'}</option>
                <option value="north-african">{language === 'en' ? 'North African' : 'Afrika Utara'}</option>
                <option value="central-african">{language === 'en' ? 'Central African' : 'Afrika Tengah'}</option>
                <option value="southern-african">{language === 'en' ? 'Southern African' : 'Afrika Selatan'}</option>
                <option value="horn-of-africa">{language === 'en' ? 'Horn of Africa' : 'Tanduk Afrika'}</option>
                <option value="african-american">{language === 'en' ? 'African American' : 'Afrika Amerika'}</option>
                <option value="afro-caribbean">{language === 'en' ? 'Afro-Caribbean' : 'Afrika Karibia'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'asian' && (
              <>
                <option value="east-asian">{language === 'en' ? 'East Asian (Chinese/Japanese/Korean)' : 'Asia Timur (Tiongkok/Jepang/Korea)'}</option>
                <option value="southeast-asian">{language === 'en' ? 'Southeast Asian' : 'Asia Tenggara'}</option>
                <option value="indonesian">{language === 'en' ? 'Indonesian' : 'Indonesia'}</option>
                <option value="filipino">{language === 'en' ? 'Filipino' : 'Filipina'}</option>
                <option value="vietnamese">{language === 'en' ? 'Vietnamese' : 'Vietnam'}</option>
                <option value="thai">{language === 'en' ? 'Thai' : 'Thailand'}</option>
                <option value="malaysian">{language === 'en' ? 'Malaysian' : 'Malaysia'}</option>
                <option value="burmese">{language === 'en' ? 'Burmese' : 'Burma'}</option>
                <option value="south-asian">{language === 'en' ? 'South Asian (Indian/Pakistani/Bangladeshi)' : 'Asia Selatan (India/Pakistan/Bangladesh)'}</option>
                <option value="central-asian">{language === 'en' ? 'Central Asian' : 'Asia Tengah'}</option>
                <option value="mongolian">{language === 'en' ? 'Mongolian' : 'Mongolia'}</option>
                <option value="tibetan">{language === 'en' ? 'Tibetan' : 'Tibet'}</option>
                <option value="pacific-islander">{language === 'en' ? 'Pacific Islander' : 'Kepulauan Pasifik'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'hispanic' && (
              <>
                <option value="mexican">{language === 'en' ? 'Mexican' : 'Meksiko'}</option>
                <option value="central-american">{language === 'en' ? 'Central American' : 'Amerika Tengah'}</option>
                <option value="south-american">{language === 'en' ? 'South American' : 'Amerika Selatan'}</option>
                <option value="caribbean">{language === 'en' ? 'Caribbean' : 'Karibia'}</option>
                <option value="spanish">{language === 'en' ? 'Spanish' : 'Spanyol'}</option>
                <option value="portuguese">{language === 'en' ? 'Portuguese' : 'Portugis'}</option>
                <option value="brazilian">{language === 'en' ? 'Brazilian' : 'Brasil'}</option>
                <option value="andean">{language === 'en' ? 'Andean' : 'Pegunungan Andes'}</option>
                <option value="argentinian">{language === 'en' ? 'Argentinian' : 'Argentina'}</option>
                <option value="colombian">{language === 'en' ? 'Colombian' : 'Kolombia'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'middle-eastern' && (
              <>
                <option value="arab">{language === 'en' ? 'Arab' : 'Arab'}</option>
                <option value="persian">{language === 'en' ? 'Persian' : 'Persia'}</option>
                <option value="turkish">{language === 'en' ? 'Turkish' : 'Turki'}</option>
                <option value="levantine">{language === 'en' ? 'Levantine' : 'Levant'}</option>
                <option value="north-african">{language === 'en' ? 'North African' : 'Afrika Utara'}</option>
                <option value="jewish">{language === 'en' ? 'Jewish' : 'Yahudi'}</option>
                <option value="kurdish">{language === 'en' ? 'Kurdish' : 'Kurdi'}</option>
                <option value="azerbaijani">{language === 'en' ? 'Azerbaijani' : 'Azerbaijan'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'indigenous' && (
              <>
                <option value="native-american">{language === 'en' ? 'Native American' : 'Penduduk Asli Amerika'}</option>
                <option value="inuit">{language === 'en' ? 'Inuit/Alaskan' : 'Inuit/Alaska'}</option>
                <option value="amazonian">{language === 'en' ? 'Amazonian' : 'Amazon'}</option>
                <option value="andean">{language === 'en' ? 'Andean' : 'Pegunungan Andes'}</option>
                <option value="aboriginal-australian">{language === 'en' ? 'Aboriginal Australian' : 'Aborigin Australia'}</option>
                <option value="maori">{language === 'en' ? 'Maori/Polynesian' : 'Maori/Polinesia'}</option>
                <option value="sami">{language === 'en' ? 'Sami' : 'Sami'}</option>
                <option value="siberian">{language === 'en' ? 'Siberian' : 'Siberia'}</option>
              </>
            )}
            {parameters.race?.race?.value === 'mixed' && (
              <>
                <option value="eurasian">{language === 'en' ? 'Eurasian' : 'Eurasia'}</option>
                <option value="afro-asian">{language === 'en' ? 'Afro-Asian' : 'Afrika-Asia'}</option>
                <option value="afro-latino">{language === 'en' ? 'Afro-Latino' : 'Afrika-Latin'}</option>
                <option value="mestizo">{language === 'en' ? 'Mestizo' : 'Mestizo'}</option>
                <option value="mulatto">{language === 'en' ? 'Mulatto' : 'Mulato'}</option>
                <option value="hapa">{language === 'en' ? 'Hapa/Mixed Asian' : 'Hapa/Asia Campuran'}</option>
                <option value="creole">{language === 'en' ? 'Creole' : 'Kreol'}</option>
                <option value="custom-mix">{language === 'en' ? 'Custom Mix' : 'Campuran Khusus'}</option>
              </>
            )}
          </select>
        </div>
      )}
      
      <div className="form-group">
        <label>{language === 'en' ? 'Race Features' : 'Fitur Ras'}</label>
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
          placeholder={language === 'en' ? "e.g., pointed ears, blue skin (comma separated)" : "mis., telinga runcing, kulit biru (dipisahkan koma)"}
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
      <h3>{translations.styleDetails}</h3>
      <StyleParameters 
        parameters={parameters.style} 
        onChange={(value) => onParameterChange('style', value)}
        language={language} 
      />
    </div>
  );

  const renderClothingInfo = () => (
    <div className="form-section">
      <h3>{translations.clothingDetails}</h3>
      <ClothingParameters 
        parameters={parameters.clothing} 
        onChange={(value) => onParameterChange('clothing', value)}
        language={language} 
      />
    </div>
  );

  const renderPoseInfo = () => (
    <div className="form-section">
      <h3>{translations.poseDetails}</h3>
      <PoseParameters 
        parameters={parameters.pose} 
        onChange={(value) => onParameterChange('pose', value)} 
        language={language}
      />
    </div>
  );

  const renderCameraInfo = () => (
    <div className="form-section">
      <h3>{translations.cameraDetails}</h3>
      <CameraParameters 
        parameters={parameters.camera} 
        onChange={(value) => onParameterChange('camera', value)}
        language={language} 
      />
    </div>
  );

  const renderBackgroundInfo = () => (
    <div className="form-section">
      <h3>{translations.backgroundDetails}</h3>
      <BackgroundParameters 
        parameters={parameters.background} 
        onChange={(value) => onParameterChange('background', value)}
        language={language} 
      />
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicInfo();
      case 'race':
        return renderRaceInfo();
      case 'body':
        return (
          <div className="form-section">
            <h3>{translations.bodyDetails}</h3>
            <BodyParameters 
              parameters={parameters.body} 
              onChange={(value) => onParameterChange('body', value)}
              language={language} 
            />
          </div>
        );
      case 'head':
        return (
          <div className="form-section">
            <h3>{translations.headDetails}</h3>
            <HeadParameters 
              parameters={parameters.head} 
              onChange={(value) => onParameterChange('head', value)} 
              language={language}
            />
          </div>
        );
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