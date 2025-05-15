import React from 'react';
import { BasicParameters as BasicParametersType } from '../../types/parameters';

interface BasicParametersProps {
  parameters: BasicParametersType;
  onChange: (value: BasicParametersType) => void;
}

export const BasicParameters: React.FC<BasicParametersProps> = ({
  parameters,
  onChange
}) => {
  // Simplified component for deployment
  return (
    <div className="basic-parameters">
      <div className="form-section">
        <h3>Basic Information</h3>
        <div className="form-group">
          <label className="form-label">Character Name</label>
          <input
            type="text"
            value={parameters.name}
            onChange={(e) => onChange({
              ...parameters,
              name: e.target.value
            })}
            className="form-control"
            placeholder="Enter character name"
          />
        </div>
        <p>Other parameters temporarily hidden for deployment.</p>
      </div>
    </div>
  );
}; 