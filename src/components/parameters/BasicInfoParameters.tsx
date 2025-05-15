import React from 'react';
import { CharacterParameters as CharacterParametersType } from '../../types/parameters';

interface BasicInfoParametersProps {
  parameters: Pick<CharacterParametersType, 'characterName' | 'gender' | 'ageGroup' | 'bodyType'>;
  onChange: (value: Pick<CharacterParametersType, 'characterName' | 'gender' | 'ageGroup' | 'bodyType'>) => void;
}

export const BasicInfoParameters: React.FC<BasicInfoParametersProps> = ({
  parameters,
  onChange
}) => {
  const handleChange = (key: keyof Pick<CharacterParametersType, 'characterName' | 'gender' | 'ageGroup' | 'bodyType'>, value: string) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const genderOptions = [
    { value: 'male', label: 'Male', icon: '👨' },
    { value: 'female', label: 'Female', icon: '👩' },
    { value: 'non-binary', label: 'Non-binary', icon: '🧑' }
  ];

  const ageGroupOptions = [
    { value: 'child', label: 'Child', icon: '👶' },
    { value: 'teen', label: 'Teen', icon: '🧒' },
    { value: 'adult', label: 'Adult', icon: '🧑' },
    { value: 'elderly', label: 'Elderly', icon: '🧓' }
  ];

  const bodyTypeOptions = [
    { value: 'slim', label: 'Slim', icon: '🧍' },
    { value: 'average', label: 'Average', icon: '🚶' },
    { value: 'athletic', label: 'Athletic', icon: '🏃' },
    { value: 'curvy', label: 'Curvy', icon: '🧍‍♀️' },
    { value: 'muscular', label: 'Muscular', icon: '💪' }
  ];

  const renderOptionSection = (
    title: string,
    options: typeof genderOptions,
    currentValue: string,
    onChange: (value: string) => void
  ) => (
    <div className="option-section">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="basic-info-parameters">
      <div className="form-section">
        <h3>Basic Information</h3>

        <div className="form-group">
          <label className="form-label">Character Name</label>
          <input
            type="text"
            value={parameters.characterName}
            onChange={(e) => handleChange('characterName', e.target.value)}
            className="form-control"
            placeholder="Enter character name"
          />
        </div>

        {renderOptionSection(
          'Gender',
          genderOptions,
          parameters.gender,
          (value) => handleChange('gender', value)
        )}

        {renderOptionSection(
          'Age Group',
          ageGroupOptions,
          parameters.ageGroup,
          (value) => handleChange('ageGroup', value)
        )}

        {renderOptionSection(
          'Body Type',
          bodyTypeOptions,
          parameters.bodyType,
          (value) => handleChange('bodyType', value)
        )}
      </div>
    </div>
  );
}; 