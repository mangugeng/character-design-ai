import React, { useState } from 'react';
import { PoseParameters as PoseParametersType } from '../../types/parameters';

interface PoseParametersProps {
  parameters: PoseParametersType;
  onChange: (value: PoseParametersType) => void;
}

export const PoseParameters: React.FC<PoseParametersProps> = ({
  parameters,
  onChange
}) => {
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
    { value: 'standing', label: 'Standing', icon: '🧍' },
    { value: 'sitting', label: 'Sitting', icon: '🪑' },
    { value: 'walking', label: 'Walking', icon: '🚶' },
    { value: 'running', label: 'Running', icon: '🏃' },
    { value: 'jumping', label: 'Jumping', icon: '🦘' },
    { value: 'crouching', label: 'Crouching', icon: '🧎' },
    { value: 'kneeling', label: 'Kneeling', icon: '🧎‍♂️' },
    { value: 'lying', label: 'Lying Down', icon: '🛏️' },
    { value: 'dancing', label: 'Dancing', icon: '💃' },
    { value: 'fighting', label: 'Fighting Stance', icon: '🥋' }
  ];

  const bothArmOptions = [
    { value: 'both_down', label: 'Down', icon: '⬇️' },
    { value: 'both_up', label: 'Up', icon: '⬆️' },
    { value: 'both_out', label: 'Out', icon: '↔️' },
    { value: 'both_crossed', label: 'Crossed', icon: '❌' },
    { value: 'both_behind', label: 'Behind Back', icon: '🤲' },
    { value: 'both_akimbo', label: 'Akimbo', icon: '👔' },
    { value: 'both_praying', label: 'Praying', icon: '🙏' },
    { value: 'both_cheering', label: 'Cheering', icon: '🎉' }
  ];

  const leftArmOptions = [
    { value: 'left_down', label: 'Down', icon: '⬇️' },
    { value: 'left_up', label: 'Up', icon: '⬆️' },
    { value: 'left_out', label: 'Out', icon: '⬅️' },
    { value: 'left_behind', label: 'Behind Back', icon: '🤲' },
    { value: 'left_akimbo', label: 'Akimbo', icon: '👔' },
    { value: 'left_raised', label: 'Raised', icon: '✋' },
    { value: 'left_bent', label: 'Bent', icon: '🦾' },
    { value: 'left_crossed', label: 'Crossed', icon: '❌' }
  ];

  const rightArmOptions = [
    { value: 'right_down', label: 'Down', icon: '⬇️' },
    { value: 'right_up', label: 'Up', icon: '⬆️' },
    { value: 'right_out', label: 'Out', icon: '➡️' },
    { value: 'right_behind', label: 'Behind Back', icon: '🤲' },
    { value: 'right_akimbo', label: 'Akimbo', icon: '👔' },
    { value: 'right_raised', label: 'Raised', icon: '✋' },
    { value: 'right_bent', label: 'Bent', icon: '🦾' },
    { value: 'right_crossed', label: 'Crossed', icon: '❌' }
  ];

  const bothHandOptions = [
    { value: 'both_open', label: 'Open', icon: '✋' },
    { value: 'both_closed', label: 'Closed', icon: '✊' },
    { value: 'both_pointing', label: 'Pointing', icon: '👉' },
    { value: 'both_thumbs_up', label: 'Thumbs Up', icon: '👍' },
    { value: 'both_peace', label: 'Peace', icon: '✌️' },
    { value: 'both_ok', label: 'OK', icon: '👌' },
    { value: 'both_rock', label: 'Rock', icon: '🤘' },
    { value: 'both_wave', label: 'Wave', icon: '👋' }
  ];

  const leftHandOptions = [
    { value: 'left_open', label: 'Open', icon: '✋' },
    { value: 'left_closed', label: 'Closed', icon: '✊' },
    { value: 'left_pointing', label: 'Pointing', icon: '👈' },
    { value: 'left_thumbs_up', label: 'Thumbs Up', icon: '👍' },
    { value: 'left_peace', label: 'Peace', icon: '✌️' },
    { value: 'left_ok', label: 'OK', icon: '👌' },
    { value: 'left_rock', label: 'Rock', icon: '🤘' },
    { value: 'left_wave', label: 'Wave', icon: '👋' }
  ];

  const rightHandOptions = [
    { value: 'right_open', label: 'Open', icon: '✋' },
    { value: 'right_closed', label: 'Closed', icon: '✊' },
    { value: 'right_pointing', label: 'Pointing', icon: '👉' },
    { value: 'right_thumbs_up', label: 'Thumbs Up', icon: '👍' },
    { value: 'right_peace', label: 'Peace', icon: '✌️' },
    { value: 'right_ok', label: 'OK', icon: '👌' },
    { value: 'right_rock', label: 'Rock', icon: '🤘' },
    { value: 'right_wave', label: 'Wave', icon: '👋' }
  ];

  const bothLegOptions = [
    { value: 'both_together', label: 'Together', icon: '🦵' },
    { value: 'both_apart', label: 'Apart', icon: '🦿' },
    { value: 'both_bent', label: 'Bent', icon: '🦵' },
    { value: 'both_crossed', label: 'Crossed', icon: '❌' },
    { value: 'both_wide', label: 'Wide Stance', icon: '🦿' },
    { value: 'both_ready', label: 'Ready Stance', icon: '🥋' },
    { value: 'both_dancing', label: 'Dancing', icon: '💃' },
    { value: 'both_sitting', label: 'Sitting', icon: '🪑' }
  ];

  const leftLegOptions = [
    { value: 'left_straight', label: 'Straight', icon: '🦵' },
    { value: 'left_bent', label: 'Bent', icon: '🦵' },
    { value: 'left_raised', label: 'Raised', icon: '🦵' },
    { value: 'left_crossed', label: 'Crossed', icon: '❌' },
    { value: 'left_forward', label: 'Forward', icon: '🦵' },
    { value: 'left_backward', label: 'Backward', icon: '🦵' },
    { value: 'left_side', label: 'Side', icon: '🦵' },
    { value: 'left_kneeling', label: 'Kneeling', icon: '🧎' }
  ];

  const rightLegOptions = [
    { value: 'right_straight', label: 'Straight', icon: '🦵' },
    { value: 'right_bent', label: 'Bent', icon: '🦵' },
    { value: 'right_raised', label: 'Raised', icon: '🦵' },
    { value: 'right_crossed', label: 'Crossed', icon: '❌' },
    { value: 'right_forward', label: 'Forward', icon: '🦵' },
    { value: 'right_backward', label: 'Backward', icon: '🦵' },
    { value: 'right_side', label: 'Side', icon: '🦵' },
    { value: 'right_kneeling', label: 'Kneeling', icon: '🧎' }
  ];

  const headPositionOptions = [
    { value: 'straight', label: 'Straight', icon: '⬆️' },
    { value: 'tilted_left', label: 'Tilted Left', icon: '↖️' },
    { value: 'tilted_right', label: 'Tilted Right', icon: '↗️' },
    { value: 'looking_up', label: 'Looking Up', icon: '⬆️' },
    { value: 'looking_down', label: 'Looking Down', icon: '⬇️' },
    { value: 'looking_left', label: 'Looking Left', icon: '⬅️' },
    { value: 'looking_right', label: 'Looking Right', icon: '➡️' },
    { value: 'tilted_back', label: 'Tilted Back', icon: '↩️' },
    { value: 'tilted_forward', label: 'Tilted Forward', icon: '↪️' }
  ];

  const expressionOptions = [
    { value: 'neutral', label: 'Neutral', icon: '😐' },
    { value: 'happy', label: 'Happy', icon: '😊' },
    { value: 'sad', label: 'Sad', icon: '😢' },
    { value: 'angry', label: 'Angry', icon: '😠' },
    { value: 'surprised', label: 'Surprised', icon: '😲' },
    { value: 'confused', label: 'Confused', icon: '😕' },
    { value: 'determined', label: 'Determined', icon: '😤' },
    { value: 'scared', label: 'Scared', icon: '😨' },
    { value: 'excited', label: 'Excited', icon: '🤩' },
    { value: 'tired', label: 'Tired', icon: '😴' },
    { value: 'winking', label: 'Winking', icon: '😉' },
    { value: 'smirking', label: 'Smirking', icon: '😏' }
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
          <span className={`toggle-option ${mode === 'both' ? 'active' : ''}`}>Both</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={mode === 'individual'}
              onChange={() => setMode(mode === 'both' ? 'individual' : 'both')}
            />
            <span className="toggle-slider"></span>
          </label>
          <span className={`toggle-option ${mode === 'individual' ? 'active' : ''}`}>Left/Right</span>
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
          <h5>Left</h5>
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
          <h5>Right</h5>
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
        <h3>Pose Details</h3>

        {renderOptionSection(
          'Stance',
          stanceOptions,
          currentStance,
          (value) => handleChange('stance', value)
        )}

        <div className="parameter-group">
          {renderModeSwitch('Arm Position', armMode, handleArmModeChange)}
          {armMode === 'both' ? (
            renderOptionSection(
              'Both Arms',
              bothArmOptions,
              currentArmPosition,
              (val) => handleChange('armPosition', val)
            )
          ) : (
            renderIndividualSection(
              'Arms',
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
          {renderModeSwitch('Hand Position', handMode, handleHandModeChange)}
          {handMode === 'both' ? (
            renderOptionSection(
              'Both Hands',
              bothHandOptions,
              currentHandPosition,
              (val) => handleChange('handPosition', val)
            )
          ) : (
            renderIndividualSection(
              'Hands',
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

        {renderModeSwitch('Leg Position', legMode, handleLegModeChange)}
        {legMode === 'both' ? (
          renderOptionSection(
            'Both Legs',
            bothLegOptions,
            currentLegPosition,
            (value) => handleChange('legPosition', value)
          )
        ) : (
          renderIndividualSection(
            'Legs',
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
          'Head Position',
          headPositionOptions,
          currentHeadPosition,
          (value) => handleChange('headPosition', value)
        )}

        {renderOptionSection(
          'Expression',
          expressionOptions,
          currentExpression,
          (value) => handleChange('expression', value)
        )}
      </div>
    </div>
  );
}; 