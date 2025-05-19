import React, { useState } from 'react';
import { PoseParameters as PoseParametersType } from '../../types/parameters';
import { enTranslations } from '../../translations/en';
import { idTranslations } from '../../translations/id';

interface PoseParametersProps {
  parameters: PoseParametersType;
  onChange: (value: PoseParametersType) => void;
  language?: 'en' | 'id';
}

export const PoseParameters: React.FC<PoseParametersProps> = ({
  parameters,
  onChange,
  language = 'en'
}) => {
  const translations = language === 'en' ? enTranslations : idTranslations;
  
  const [armMode, setArmMode] = useState<'both' | 'individual'>('both');
  const [handMode, setHandMode] = useState<'both' | 'individual'>('both');
  const [legMode, setLegMode] = useState<'both' | 'individual'>('both');

  // State untuk menyimpan pilihan individual
  const [leftArm, setLeftArm] = useState<string>('left_down');
  const [rightArm, setRightArm] = useState<string>('right_down');
  const [leftHand, setLeftHand] = useState<string>('left_open');
  const [rightHand, setRightHand] = useState<string>('right_open');
  const [leftLeg, setLeftLeg] = useState<string>('left_straight');
  const [rightLeg, setRightLeg] = useState<string>('right_straight');

  const handleChange = (key: keyof PoseParametersType, value: any) => {
    onChange({
      ...parameters,
      [key]: value
    });
  };

  const stanceOptions = [
    { value: 'standing', label: translations.standing, icon: '🧍' },
    { value: 'sitting', label: translations.sitting, icon: '🪑' },
    { value: 'walking', label: language === 'en' ? 'Walking' : 'Berjalan', icon: '🚶' },
    { value: 'running', label: language === 'en' ? 'Running' : 'Berlari', icon: '🏃' },
    { value: 'jumping', label: language === 'en' ? 'Jumping' : 'Melompat', icon: '🦘' },
    { value: 'crouching', label: language === 'en' ? 'Crouching' : 'Berjongkok', icon: '🧎' },
    { value: 'kneeling', label: translations.kneeling, icon: '🧎‍♂️' },
    { value: 'lying', label: translations.lying, icon: '🛏️' },
    { value: 'dancing', label: language === 'en' ? 'Dancing' : 'Menari', icon: '💃' },
    { value: 'fighting', label: language === 'en' ? 'Fighting Stance' : 'Posisi Bertarung', icon: '🥋' }
  ];

  const bothArmOptions = [
    { value: 'both_down', label: language === 'en' ? 'Down' : 'Turun', icon: '⬇️' },
    { value: 'both_up', label: language === 'en' ? 'Up' : 'Naik', icon: '⬆️' },
    { value: 'both_out', label: language === 'en' ? 'Out' : 'Keluar', icon: '↔️' },
    { value: 'both_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' },
    { value: 'both_behind', label: language === 'en' ? 'Behind Back' : 'Di Belakang', icon: '🤲' },
    { value: 'both_akimbo', label: language === 'en' ? 'Akimbo' : 'Berkacak Pinggang', icon: '👔' },
    { value: 'both_praying', label: language === 'en' ? 'Praying' : 'Berdoa', icon: '🙏' },
    { value: 'both_cheering', label: language === 'en' ? 'Cheering' : 'Bersorak', icon: '🎉' }
  ];

  const leftArmOptions = [
    { value: 'left_down', label: language === 'en' ? 'Down' : 'Turun', icon: '⬇️' },
    { value: 'left_up', label: language === 'en' ? 'Up' : 'Naik', icon: '⬆️' },
    { value: 'left_out', label: language === 'en' ? 'Out' : 'Keluar', icon: '⬅️' },
    { value: 'left_behind', label: language === 'en' ? 'Behind Back' : 'Di Belakang', icon: '🤲' },
    { value: 'left_akimbo', label: language === 'en' ? 'Akimbo' : 'Berkacak Pinggang', icon: '👔' },
    { value: 'left_raised', label: language === 'en' ? 'Raised' : 'Terangkat', icon: '✋' },
    { value: 'left_bent', label: language === 'en' ? 'Bent' : 'Bengkok', icon: '🦾' },
    { value: 'left_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' }
  ];

  const rightArmOptions = [
    { value: 'right_down', label: language === 'en' ? 'Down' : 'Turun', icon: '⬇️' },
    { value: 'right_up', label: language === 'en' ? 'Up' : 'Naik', icon: '⬆️' },
    { value: 'right_out', label: language === 'en' ? 'Out' : 'Keluar', icon: '➡️' },
    { value: 'right_behind', label: language === 'en' ? 'Behind Back' : 'Di Belakang', icon: '🤲' },
    { value: 'right_akimbo', label: language === 'en' ? 'Akimbo' : 'Berkacak Pinggang', icon: '👔' },
    { value: 'right_raised', label: language === 'en' ? 'Raised' : 'Terangkat', icon: '✋' },
    { value: 'right_bent', label: language === 'en' ? 'Bent' : 'Bengkok', icon: '🦾' },
    { value: 'right_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' }
  ];

  const bothHandOptions = [
    { value: 'both_open', label: translations.open, icon: '✋' },
    { value: 'both_closed', label: translations.closed, icon: '✊' },
    { value: 'both_pointing', label: translations.pointing, icon: '👉' },
    { value: 'both_thumbs_up', label: language === 'en' ? 'Thumbs Up' : 'Jempol', icon: '👍' },
    { value: 'both_peace', label: language === 'en' ? 'Peace' : 'Damai', icon: '✌️' },
    { value: 'both_ok', label: 'OK', icon: '👌' },
    { value: 'both_rock', label: language === 'en' ? 'Rock' : 'Rock', icon: '🤘' },
    { value: 'both_wave', label: language === 'en' ? 'Wave' : 'Melambai', icon: '👋' }
  ];

  const leftHandOptions = [
    { value: 'left_open', label: translations.open, icon: '✋' },
    { value: 'left_closed', label: translations.closed, icon: '✊' },
    { value: 'left_pointing', label: translations.pointing, icon: '👈' },
    { value: 'left_thumbs_up', label: language === 'en' ? 'Thumbs Up' : 'Jempol', icon: '👍' },
    { value: 'left_peace', label: language === 'en' ? 'Peace' : 'Damai', icon: '✌️' },
    { value: 'left_ok', label: 'OK', icon: '👌' },
    { value: 'left_rock', label: language === 'en' ? 'Rock' : 'Rock', icon: '🤘' },
    { value: 'left_wave', label: language === 'en' ? 'Wave' : 'Melambai', icon: '👋' }
  ];

  const rightHandOptions = [
    { value: 'right_open', label: translations.open, icon: '✋' },
    { value: 'right_closed', label: translations.closed, icon: '✊' },
    { value: 'right_pointing', label: translations.pointing, icon: '👉' },
    { value: 'right_thumbs_up', label: language === 'en' ? 'Thumbs Up' : 'Jempol', icon: '👍' },
    { value: 'right_peace', label: language === 'en' ? 'Peace' : 'Damai', icon: '✌️' },
    { value: 'right_ok', label: 'OK', icon: '👌' },
    { value: 'right_rock', label: language === 'en' ? 'Rock' : 'Rock', icon: '🤘' },
    { value: 'right_wave', label: language === 'en' ? 'Wave' : 'Melambai', icon: '👋' }
  ];

  const bothLegOptions = [
    { value: 'both_together', label: language === 'en' ? 'Together' : 'Bersama', icon: '🦵' },
    { value: 'both_apart', label: language === 'en' ? 'Apart' : 'Terpisah', icon: '🦿' },
    { value: 'both_bent', label: language === 'en' ? 'Bent' : 'Bengkok', icon: '🦵' },
    { value: 'both_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' },
    { value: 'both_wide', label: language === 'en' ? 'Wide Stance' : 'Posisi Lebar', icon: '🦿' },
    { value: 'both_ready', label: language === 'en' ? 'Ready Stance' : 'Posisi Siap', icon: '🥋' },
    { value: 'both_dancing', label: language === 'en' ? 'Dancing' : 'Menari', icon: '💃' },
    { value: 'both_sitting', label: translations.sitting, icon: '🪑' }
  ];

  const leftLegOptions = [
    { value: 'left_straight', label: translations.straightPose, icon: '🦵' },
    { value: 'left_bent', label: translations.bent, icon: '🦵' },
    { value: 'left_raised', label: language === 'en' ? 'Raised' : 'Terangkat', icon: '🦵' },
    { value: 'left_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' },
    { value: 'left_forward', label: translations.forward, icon: '🦵' },
    { value: 'left_backward', label: language === 'en' ? 'Backward' : 'Ke Belakang', icon: '🦵' },
    { value: 'left_side', label: language === 'en' ? 'Side' : 'Ke Samping', icon: '🦵' },
    { value: 'left_kneeling', label: translations.kneeling, icon: '🧎' }
  ];

  const rightLegOptions = [
    { value: 'right_straight', label: translations.straightPose, icon: '🦵' },
    { value: 'right_bent', label: translations.bent, icon: '🦵' },
    { value: 'right_raised', label: language === 'en' ? 'Raised' : 'Terangkat', icon: '🦵' },
    { value: 'right_crossed', label: language === 'en' ? 'Crossed' : 'Menyilang', icon: '❌' },
    { value: 'right_forward', label: translations.forward, icon: '🦵' },
    { value: 'right_backward', label: language === 'en' ? 'Backward' : 'Ke Belakang', icon: '🦵' },
    { value: 'right_side', label: language === 'en' ? 'Side' : 'Ke Samping', icon: '🦵' },
    { value: 'right_kneeling', label: translations.kneeling, icon: '🧎' }
  ];

  const headPositionOptions = [
    { value: 'straight', label: translations.straightPose, icon: '⬆️' },
    { value: 'tilted_left', label: language === 'en' ? 'Tilted Left' : 'Miring Kiri', icon: '↖️' },
    { value: 'tilted_right', label: language === 'en' ? 'Tilted Right' : 'Miring Kanan', icon: '↗️' },
    { value: 'looking_up', label: language === 'en' ? 'Looking Up' : 'Melihat Atas', icon: '⬆️' },
    { value: 'looking_down', label: language === 'en' ? 'Looking Down' : 'Melihat Bawah', icon: '⬇️' },
    { value: 'looking_left', label: language === 'en' ? 'Looking Left' : 'Melihat Kiri', icon: '⬅️' },
    { value: 'looking_right', label: language === 'en' ? 'Looking Right' : 'Melihat Kanan', icon: '➡️' },
    { value: 'tilted_back', label: language === 'en' ? 'Tilted Back' : 'Miring Belakang', icon: '↩️' },
    { value: 'tilted_forward', label: language === 'en' ? 'Tilted Forward' : 'Miring Depan', icon: '↪️' }
  ];

  const expressionOptions = [
    { value: 'neutral', label: language === 'en' ? 'Neutral' : 'Netral', icon: '😐' },
    { value: 'happy', label: language === 'en' ? 'Happy' : 'Bahagia', icon: '😊' },
    { value: 'sad', label: language === 'en' ? 'Sad' : 'Sedih', icon: '😢' },
    { value: 'angry', label: translations.angry, icon: '😠' },
    { value: 'surprised', label: language === 'en' ? 'Surprised' : 'Terkejut', icon: '😲' },
    { value: 'confused', label: language === 'en' ? 'Confused' : 'Bingung', icon: '😕' },
    { value: 'determined', label: language === 'en' ? 'Determined' : 'Tegas', icon: '😤' },
    { value: 'scared', label: language === 'en' ? 'Scared' : 'Takut', icon: '😨' },
    { value: 'excited', label: language === 'en' ? 'Excited' : 'Gembira', icon: '🤩' },
    { value: 'tired', label: language === 'en' ? 'Tired' : 'Lelah', icon: '😴' },
    { value: 'winking', label: language === 'en' ? 'Winking' : 'Kedip', icon: '😉' },
    { value: 'smirking', label: language === 'en' ? 'Smirking' : 'Senyum Tipis', icon: '😏' }
  ];

  const renderOptionSection = (
    title: string,
    options: typeof stanceOptions,
    currentValue: { value: string; label: string; icon: string },
    onChange: (value: { value: string; label: string; icon: string }) => void
  ) => (
    <div className="option-section">
      <h4>{title}</h4>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${currentValue?.value === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <span className="option-icon">{option.icon}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const handleArmModeChange = (mode: 'both' | 'individual') => {
    setArmMode(mode);
    if (mode === 'both') {
      // When switching to 'both' mode, update the parameter with a 'both' value
      handleChange('armPosition', { value: 'relaxed', label: 'Relaxed', icon: '💪' });
    } else {
      // When switching to individual, set separate values for left and right
      const combinedValue = {
        mode: 'individual',
        left: leftArm,
        right: rightArm
      };
      handleChange('armPosition', combinedValue);
    }
  };

  const handleHandModeChange = (mode: 'both' | 'individual') => {
    setHandMode(mode);
    if (mode === 'both') {
      // When switching to 'both' mode, update the parameter with a 'both' value
      handleChange('handPosition', { value: 'open', label: 'Open', icon: '🖐️' });
    } else {
      // When switching to individual, set separate values for left and right
      const combinedValue = {
        mode: 'individual',
        left: leftHand,
        right: rightHand
      };
      handleChange('handPosition', combinedValue);
    }
  };

  const handleLegModeChange = (mode: 'both' | 'individual') => {
    setLegMode(mode);
    if (mode === 'both') {
      // When switching to 'both' mode, update the parameter with a 'both' value
      handleChange('legPosition', { value: 'straight', label: 'Straight', icon: '🦵' });
    } else {
      // When switching to individual, set separate values for left and right
      const combinedValue = {
        mode: 'individual',
        left: leftLeg,
        right: rightLeg
      };
      handleChange('legPosition', combinedValue);
    }
  };

  const renderModeSwitch = (
    title: string,
    mode: 'both' | 'individual',
    setMode: (mode: 'both' | 'individual') => void
  ) => (
    <div className="mode-switch">
      <h4>{title}</h4>
      <div className="mode-toggle">
        <div className="toggle-container">
          <span className={`toggle-option ${mode === 'both' ? 'active' : ''}`}>
            {language === 'en' ? 'Both' : 'Kedua-duanya'}
          </span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={mode === 'individual'}
              onChange={() => setMode(mode === 'both' ? 'individual' : 'both')}
            />
            <span className="toggle-slider"></span>
          </label>
          <span className={`toggle-option ${mode === 'individual' ? 'active' : ''}`}>
            {language === 'en' ? 'Left/Right' : 'Kiri/Kanan'}
          </span>
        </div>
      </div>
    </div>
  );

  const renderIndividualSection = (
    title: string,
    leftOptions: typeof leftArmOptions,
    rightOptions: typeof rightArmOptions,
    leftValue: string,
    rightValue: string,
    onLeftChange: (value: string) => void,
    onRightChange: (value: string) => void
  ) => (
    <div className="sub-options">
      <div className="individual-groups">
        <div className="group">
          <h5>{language === 'en' ? 'Left' : 'Kiri'}</h5>
          <div className="option-grid">
            {leftOptions.map((option) => (
              <button
                key={option.value}
                className={`option-button ${leftValue === option.value ? 'selected' : ''}`}
                onClick={() => onLeftChange(option.value)}
              >
                <span className="option-icon">{option.icon}</span>
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="group">
          <h5>{language === 'en' ? 'Right' : 'Kanan'}</h5>
          <div className="option-grid">
            {rightOptions.map((option) => (
              <button
                key={option.value}
                className={`option-button ${rightValue === option.value ? 'selected' : ''}`}
                onClick={() => onRightChange(option.value)}
              >
                <span className="option-icon">{option.icon}</span>
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Get current values with defaults
  const currentStance = { value: parameters?.stance?.value || 'standing', label: parameters?.stance?.label || 'Standing', icon: '🧍' };
  
  // Safely get arm position values, handling both union types
  const getArmPositionValue = () => {
    if (!parameters?.armPosition) return 'both_down';
    if ('value' in parameters.armPosition) return parameters.armPosition.value;
    return 'both_down'; // Default for individual mode
  };
  
  const getArmPositionLabel = () => {
    if (!parameters?.armPosition) return 'Both Down';
    if ('label' in parameters.armPosition) return parameters.armPosition.label;
    return 'Both Down'; // Default for individual mode
  };
  
  const currentArmPosition = { 
    value: getArmPositionValue(), 
    label: getArmPositionLabel(), 
    icon: '⬇️' 
  };
  
  // Safely get hand position values, handling both union types
  const getHandPositionValue = () => {
    if (!parameters?.handPosition) return 'both_open';
    if ('value' in parameters.handPosition) return parameters.handPosition.value;
    return 'both_open'; // Default for individual mode
  };
  
  const getHandPositionLabel = () => {
    if (!parameters?.handPosition) return 'Both Open';
    if ('label' in parameters.handPosition) return parameters.handPosition.label;
    return 'Both Open'; // Default for individual mode
  };
  
  const currentHandPosition = { 
    value: getHandPositionValue(), 
    label: getHandPositionLabel(), 
    icon: '✋' 
  };
  
  // Safely get leg position values, handling both union types
  const getLegPositionValue = () => {
    if (!parameters?.legPosition) return 'both_together';
    if ('value' in parameters.legPosition) return parameters.legPosition.value;
    return 'both_together'; // Default for individual mode
  };
  
  const getLegPositionLabel = () => {
    if (!parameters?.legPosition) return 'Both Together';
    if ('label' in parameters.legPosition) return parameters.legPosition.label;
    return 'Both Together'; // Default for individual mode
  };
  
  const currentLegPosition = { 
    value: getLegPositionValue(), 
    label: getLegPositionLabel(), 
    icon: '🦵' 
  };
  
  const currentHeadPosition = { value: parameters?.headPosition?.value || 'straight', label: parameters?.headPosition?.label || 'Straight', icon: '⬆️' };
  const currentExpression = { value: parameters?.expression?.value || 'neutral', label: parameters?.expression?.label || 'Neutral', icon: '😐' };

  return (
    <div className="pose-parameters">
      <div className="form-section">
       

        {renderOptionSection(
          translations.stance,
          stanceOptions,
          currentStance,
          (value) => handleChange('stance', value)
        )}

        <div className="parameter-group">
          {renderModeSwitch(language === 'en' ? 'Arm Position' : 'Posisi Lengan', armMode, handleArmModeChange)}
          {armMode === 'both' ? (
            renderOptionSection(
              language === 'en' ? 'Both Arms' : 'Kedua Lengan',
              bothArmOptions,
              currentArmPosition,
              (val) => handleChange('armPosition', val)
            )
          ) : (
            renderIndividualSection(
              language === 'en' ? 'Arms' : 'Lengan',
              leftArmOptions,
              rightArmOptions,
              leftArm,
              rightArm,
              (value) => {
                setLeftArm(value);
                const combinedValue = {
                  mode: 'individual',
                  left: value,
                  right: rightArm
                };
                handleChange('armPosition', combinedValue);
              },
              (value) => {
                setRightArm(value);
                const combinedValue = {
                  mode: 'individual',
                  left: leftArm,
                  right: value
                };
                handleChange('armPosition', combinedValue);
              }
            )
          )}
        </div>

        <div className="parameter-group">
          {renderModeSwitch(language === 'en' ? 'Hand Position' : 'Posisi Tangan', handMode, handleHandModeChange)}
          {handMode === 'both' ? (
            renderOptionSection(
              language === 'en' ? 'Both Hands' : 'Kedua Tangan',
              bothHandOptions,
              currentHandPosition,
              (val) => handleChange('handPosition', val)
            )
          ) : (
            renderIndividualSection(
              language === 'en' ? 'Hands' : 'Tangan',
              leftHandOptions,
              rightHandOptions,
              leftHand,
              rightHand,
              (value) => {
                setLeftHand(value);
                const combinedValue = {
                  mode: 'individual',
                  left: value,
                  right: rightHand
                };
                handleChange('handPosition', combinedValue);
              },
              (value) => {
                setRightHand(value);
                const combinedValue = {
                  mode: 'individual',
                  left: leftHand,
                  right: value
                };
                handleChange('handPosition', combinedValue);
              }
            )
          )}
        </div>

        {renderModeSwitch(language === 'en' ? 'Leg Position' : 'Posisi Kaki', legMode, handleLegModeChange)}
        {legMode === 'both' ? (
          renderOptionSection(
            language === 'en' ? 'Both Legs' : 'Kedua Kaki',
            bothLegOptions,
            currentLegPosition,
            (value) => handleChange('legPosition', value)
          )
        ) : (
          renderIndividualSection(
            language === 'en' ? 'Legs' : 'Kaki',
            leftLegOptions,
            rightLegOptions,
            leftLeg,
            rightLeg,
            (value) => {
              setLeftLeg(value);
              const combinedValue = {
                mode: 'individual',
                left: value,
                right: rightLeg
              };
              handleChange('legPosition', combinedValue);
            },
            (value) => {
              setRightLeg(value);
              const combinedValue = {
                mode: 'individual',
                left: leftLeg,
                right: value
              };
              handleChange('legPosition', combinedValue);
            }
          )
        )}

        {renderOptionSection(
          translations.headPosition,
          headPositionOptions,
          currentHeadPosition,
          (value) => handleChange('headPosition', value)
        )}

        {renderOptionSection(
          translations.expression,
          expressionOptions,
          currentExpression,
          (value) => handleChange('expression', value)
        )}
      </div>
    </div>
  );
}; 