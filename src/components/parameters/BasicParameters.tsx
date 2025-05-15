import React from 'react';
import { BasicParameters as BasicParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface BasicParametersProps {
  parameters: BasicParametersType;
  onChange: (value: BasicParametersType) => void;
  language?: 'en' | 'id';
}

export const BasicParameters: React.FC<BasicParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  // Simplified component for deployment
  return (
    <div className="basic-parameters">
      <div className="form-section">
        <h3>{translations.basicInformation}</h3>
        <div className="form-group">
          <label className="form-label">{translations.characterName}</label>
          <input
            type="text"
            value={parameters.name}
            onChange={(e) => onChange({
              ...parameters,
              name: e.target.value
            })}
            className="form-control"
            placeholder={translations.enterCharacterName}
          />
        </div>
        <p>{language === 'en' ? 'Other parameters temporarily hidden for deployment.' : 'Parameter lainnya sementara disembunyikan untuk penerapan.'}</p>
      </div>
    </div>
  );
}; 