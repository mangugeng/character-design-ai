export type PresetCategory = 'character' | 'portrait' | 'full-body' | 'scene' | 'custom';

export interface PromptPreset {
  id: string;
  name: string;
  prompt: string;
  style: 'detailed' | 'concise' | 'artistic';
  category: PresetCategory;
  tags: string[];
  description?: string;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
} 