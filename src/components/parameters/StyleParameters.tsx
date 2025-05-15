import React from 'react';
import { StyleParameters as StyleParametersType } from '../../types/parameters';

interface StyleParametersProps {
  parameters: StyleParametersType;
  onChange: (value: StyleParametersType) => void;
}

export const StyleParameters: React.FC<StyleParametersProps> = ({
  parameters,
  onChange
}) => {
  // Simplified component for deployment
  return (
    <div className="style-parameters">
      <div className="form-section">
        <h3>Style Details</h3>
        <p>Style customization is temporarily hidden for deployment.</p>
      </div>
    </div>
  );
}; 