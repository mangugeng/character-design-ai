import React from 'react';
import { ClothingParameters as ClothingParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface ClothingParametersProps {
  parameters: ClothingParametersType;
  onChange: (value: ClothingParametersType) => void;
  language?: 'en' | 'id';
}

export const ClothingParameters: React.FC<ClothingParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const handleChangeStyle = (value: string, label: string) => {
    onChange({
      ...parameters,
      style: {
        value,
        label,
        icon: '👕'
      }
    });
  };

  const handleChangeUpperBody = (field: 'type' | 'color' | 'material', value: string, label: string) => {
    onChange({
      ...parameters,
      upperBody: {
        ...parameters.upperBody,
        [field]: {
          value,
          label,
          icon: field === 'type' ? '👚' : field === 'color' ? '🎨' : '🧵'
        }
      }
    });
  };

  const handleChangeLowerBody = (field: 'type' | 'color' | 'material', value: string, label: string) => {
    onChange({
      ...parameters,
      lowerBody: {
        ...parameters.lowerBody,
        [field]: {
          value,
          label,
          icon: field === 'type' ? '👖' : field === 'color' ? '🎨' : '🧵'
        }
      }
    });
  };

  const handleChangeFootwear = (field: 'type' | 'color' | 'material', value: string, label: string) => {
    onChange({
      ...parameters,
      footwear: {
        ...parameters.footwear,
        [field]: {
          value,
          label,
          icon: field === 'type' ? '👞' : field === 'color' ? '🎨' : '🧵'
        }
      }
    });
  };

  const handleChangeHeadwear = (field: 'type' | 'color' | 'material', value: string, label: string) => {
    onChange({
      ...parameters,
      headwear: {
        ...parameters.headwear,
        [field]: {
          value,
          label,
          icon: field === 'type' ? '🧢' : field === 'color' ? '🎨' : '🧵'
        }
      }
    });
  };

  const handleAccessories = (value: string) => {
    const accessories = value.split(',').map(a => a.trim()).filter(Boolean);
    onChange({
      ...parameters,
      accessories
    });
  };

  return (
    <div className="clothing-parameters parameters-scrollable">
     
      <div className="form-section">
        <div className="parameter-section">
          <div className="form-group">
            <label className="form-label">{translations.styleType}</label>
            <select 
              value={parameters.style?.value || 'casual'} 
              onChange={(e) => handleChangeStyle(e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="casual">{translations.casual}</option>
              <option value="formal">{translations.formal}</option>
              <option value="sporty">{translations.sporty}</option>
              <option value="fancy">{translations.fancy}</option>
            </select>
          </div>
        </div>

        <div className="parameter-section">
          <h4>{translations.upperBody}</h4>
          <div className="form-group">
            <label className="form-label">{translations.clothingType}</label>
            <select 
              value={parameters.upperBody?.type?.value || 'shirt'} 
              onChange={(e) => handleChangeUpperBody('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="shirt">{translations.shirt}</option>
              <option value="t-shirt">{translations.tShirt}</option>
              <option value="blouse">{translations.blouse}</option>
              <option value="sweater">{translations.sweater}</option>
              <option value="jacket">{translations.jacket}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingColor}</label>
            <select 
              value={parameters.upperBody?.color?.value || 'blue'} 
              onChange={(e) => handleChangeUpperBody('color', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="blue">{translations.blueColor}</option>
              <option value="red">{translations.redColor}</option>
              <option value="green">{translations.greenColor}</option>
              <option value="yellow">{translations.yellowColor}</option>
              <option value="purple">{translations.purpleColor}</option>
              <option value="pink">{translations.pinkColor}</option>
              <option value="white">{translations.whiteColor}</option>
              <option value="black">{translations.blackColor}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingMaterial}</label>
            <select 
              value={parameters.upperBody?.material?.value || 'cotton'} 
              onChange={(e) => handleChangeUpperBody('material', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="cotton">{translations.cotton}</option>
              <option value="denim">{translations.denim}</option>
              <option value="silk">{translations.silk}</option>
              <option value="wool">{translations.wool}</option>
              <option value="leather">{translations.leather}</option>
            </select>
          </div>
        </div>

        <div className="parameter-section">
          <h4>{translations.lowerBody}</h4>
          <div className="form-group">
            <label className="form-label">{translations.clothingType}</label>
            <select 
              value={parameters.lowerBody?.type?.value || 'pants'} 
              onChange={(e) => handleChangeLowerBody('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="pants">{translations.pants}</option>
              <option value="jeans">{translations.jeans}</option>
              <option value="shorts">{translations.shorts}</option>
              <option value="skirt">{translations.skirt}</option>
              <option value="dress">{translations.dress}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingColor}</label>
            <select 
              value={parameters.lowerBody?.color?.value || 'blue'} 
              onChange={(e) => handleChangeLowerBody('color', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="blue">{translations.blueColor}</option>
              <option value="black">{translations.blackColor}</option>
              <option value="white">{translations.whiteColor}</option>
              <option value="gray">{translations.gray}</option>
              <option value="brown">{translations.brownColor}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingMaterial}</label>
            <select 
              value={parameters.lowerBody?.material?.value || 'denim'} 
              onChange={(e) => handleChangeLowerBody('material', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="denim">{translations.denim}</option>
              <option value="cotton">{translations.cotton}</option>
              <option value="leather">{translations.leather}</option>
              <option value="silk">{translations.silk}</option>
              <option value="wool">{translations.wool}</option>
            </select>
          </div>
        </div>

        <div className="parameter-section">
          <h4>{translations.footwear}</h4>
          <div className="form-group">
            <label className="form-label">{translations.clothingType}</label>
            <select 
              value={parameters.footwear?.type?.value || 'sneakers'} 
              onChange={(e) => handleChangeFootwear('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="sneakers">{translations.sneakers}</option>
              <option value="boots">{translations.boots}</option>
              <option value="sandals">{translations.sandals}</option>
              <option value="dress-shoes">{translations.dress_shoes}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingColor}</label>
            <select 
              value={parameters.footwear?.color?.value || 'black'} 
              onChange={(e) => handleChangeFootwear('color', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{language === 'en' ? 'None' : 'Tidak Ada'}</option>
              <option value="black">{translations.blackColor}</option>
              <option value="white">{translations.whiteColor}</option>
              <option value="brown">{translations.brownColor}</option>
              <option value="blue">{translations.blueColor}</option>
              <option value="red">{translations.redColor}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">{translations.clothingMaterial}</label>
            <select 
              value={parameters.footwear?.material?.value || 'leather'} 
              onChange={(e) => handleChangeFootwear('material', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="leather">{translations.leather}</option>
              <option value="canvas">{translations.canvas}</option>
              <option value="rubber">{translations.rubber}</option>
            </select>
          </div>
        </div>

        <div className="parameter-section">
          <h4>{translations.headwear}</h4>
          <div className="form-group">
            <label className="form-label">{translations.clothingType}</label>
            <select 
              value={parameters.headwear?.type?.value || 'none'} 
              onChange={(e) => handleChangeHeadwear('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
            >
              <option value="none">{translations.none}</option>
              <option value="hat">{translations.hat}</option>
              <option value="cap">{translations.cap}</option>
              <option value="beanie">{translations.beanie}</option>
            </select>
          </div>
          
          {parameters.headwear?.type?.value !== 'none' && (
            <>
              <div className="form-group">
                <label className="form-label">{translations.clothingColor}</label>
                <select 
                  value={parameters.headwear?.color?.value || 'black'} 
                  onChange={(e) => handleChangeHeadwear('color', e.target.value, e.target.options[e.target.selectedIndex].text)}
                >
                  <option value="black">{translations.blackColor}</option>
                  <option value="white">{translations.whiteColor}</option>
                  <option value="blue">{translations.blueColor}</option>
                  <option value="red">{translations.redColor}</option>
                  <option value="green">{translations.greenColor}</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">{translations.clothingMaterial}</label>
                <select 
                  value={parameters.headwear?.material?.value || 'cotton'} 
                  onChange={(e) => handleChangeHeadwear('material', e.target.value, e.target.options[e.target.selectedIndex].text)}
                >
                  <option value="cotton">{translations.cotton}</option>
                  <option value="wool">{translations.wool}</option>
                  <option value="leather">{translations.leather}</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="parameter-section">
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Accessories (comma separated)' : 'Aksesoris (dipisahkan koma)'}</label>
            <input
              type="text"
              value={parameters.accessories?.join(', ') || ''}
              onChange={(e) => handleAccessories(e.target.value)}
              placeholder={language === 'en' ? 'e.g., necklace, watch, bracelet' : 'mis., kalung, jam tangan, gelang'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 