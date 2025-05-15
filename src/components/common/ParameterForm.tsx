import React from 'react';
import { CharacterParameters } from '@/types/parameters';

interface ParameterFormProps {
  parameters: CharacterParameters;
  onParameterChange: (key: keyof CharacterParameters, value: any) => void;
}

// IMPORTANT: This is a simplified version of ParameterForm for deployment
// The original version with handleMultiSelect has type errors
export const ParameterForm: React.FC<ParameterFormProps> = ({
  parameters,
  onParameterChange
}) => {
  // Simplified parameter form for deployment
  // No handleMultiSelect function to avoid type errors
  return (
    <div className="parameter-form">
      <div className="tab-content">
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-group">
            <label htmlFor="characterName">Character Name</label>
            <input
              type="text"
              id="characterName"
              value={parameters.characterName}
              onChange={(e) => onParameterChange('characterName', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 