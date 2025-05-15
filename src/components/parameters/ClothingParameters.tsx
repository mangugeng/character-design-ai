import React from 'react';
import { ClothingParameters as ClothingParametersType } from '../../types/parameters';

interface ClothingParametersProps {
  parameters: ClothingParametersType;
  onChange: (value: ClothingParametersType) => void;
}

export const ClothingParameters: React.FC<ClothingParametersProps> = ({
  parameters,
  onChange
}) => {
  // Simplified component for deployment
  return (
    <div className="clothing-parameters">
      <div className="form-section">
        <h3>Clothing Details</h3>
        <p>Clothing customization is temporarily hidden for deployment.</p>
      </div>
    </div>
  );
}; 