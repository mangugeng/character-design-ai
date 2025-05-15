import { useState, useCallback } from 'react';
import { CharacterParameters } from '@/types/parameters';

// Very simplified version for deployment
const defaultParameters: Partial<CharacterParameters> = {
  characterName: '',
};

export const useCharacterParameters = () => {
  const [parameters, setParameters] = useState<Partial<CharacterParameters>>(defaultParameters);

  const updateParameter = useCallback((key: keyof CharacterParameters, value: any) => {
    setParameters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const generatePrompt = useCallback(() => {
    return `Character Designer AI - Coming Soon! ${parameters.characterName || ''}`;
  }, [parameters]);

  const savePreset = useCallback((presetName: string) => {
    if (!presetName.trim()) {
      throw new Error('Preset name cannot be empty');
    }
    // Simplified for deployment
    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    presets[presetName] = parameters;
    localStorage.setItem('characterPresets', JSON.stringify(presets));
  }, [parameters]);

  const loadPreset = useCallback((presetName: string) => {
    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    const preset = presets[presetName];
    if (!preset) {
      throw new Error('Preset not found');
    }
    setParameters(preset);
  }, []);

  const deletePreset = useCallback((presetName: string) => {
    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    delete presets[presetName];
    localStorage.setItem('characterPresets', JSON.stringify(presets));
  }, []);

  const clearPresets = useCallback(() => {
    localStorage.removeItem('characterPresets');
  }, []);

  return {
    parameters,
    updateParameter,
    generatePrompt,
    savePreset,
    loadPreset,
    deletePreset,
    clearPresets
  };
}; 