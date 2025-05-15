export interface BasicParameters {
  name: string;
  gender: 'male' | 'female' | 'other';
  ageGroup: 'child' | 'teen' | 'young adult' | 'adult' | 'elderly';
  bodyType: 'slim' | 'athletic' | 'average' | 'curvy' | 'muscular';
}

export interface HeadParameters {
  shape: 'round' | 'oval' | 'square' | 'heart' | 'diamond';
  hair: {
    style: string;
    color: string;
    length: string;
  };
  face: {
    eyes: string;
    nose: string;
    mouth: string;
    ears: string;
  };
  accessories: string[];
}

export interface Option {
  value: string;
  label: string;
  icon: string;
}

export interface BodyParameters {
  proportions: {
    height: Option;
    build: Option;
  };
  features: {
    skinTone: Option;
    scars: string[];
    tattoos: string[];
  };
}

export interface ClothingParameters {
  style: Option;
  upperBody: {
    type: Option;
    color: Option;
    material: Option;
  };
  lowerBody: {
    type: Option;
    color: Option;
    material: Option;
  };
  footwear: {
    type: Option;
    color: Option;
    material: Option;
  };
  headwear: {
    type: Option;
    color: Option;
    material: Option;
  };
  underwear: {
    type: Option;
    color: Option;
    material: Option;
  };
  accessories: string[];
}

export interface PoseParameters {
  stance: { value: string; label: string; icon: string };
  armPosition: 
    | { value: string; label: string; icon: string }
    | { 
        mode: 'individual';
        left: string;
        right: string;
      };
  handPosition: 
    | { value: string; label: string; icon: string }
    | { 
        mode: 'individual';
        left: string;
        right: string;
      };
  legPosition: 
    | { value: string; label: string; icon: string }
    | { 
        mode: 'individual';
        left: string;
        right: string;
      };
  headPosition: { value: string; label: string; icon: string };
  expression: { value: string; label: string; icon: string };
}

export interface StyleParameters {
  artStyle: Option;
  rendering: Option;
  lighting: Option;
}

export interface CameraParameters {
  layout: string;
  composition: string;
  effects: string[];
}

export interface BackgroundParameters {
  type: string;
  color: string;
  environment: string;
}

export interface RaceParameters {
  race: {
    value: string;
    label: string;
    icon: string;
    category: 'real' | 'fantasy' | 'scifi';
  };
  subRace?: {
    value: string;
    label: string;
  };
  features: string[];
  traits: string[];
}

export interface CharacterParameters {
  characterName: string;
  gender: string;
  ageGroup: string;
  bodyType: string;
  race: RaceParameters;
  pose: PoseParameters;
  body: BodyParameters;
  clothing: ClothingParameters;
  style: StyleParameters;
  head: HeadParameters;
  camera: CameraParameters;
  background: BackgroundParameters;
}

export interface Preset {
  basic: {
    name: string;
    gender: string;
    ageGroup: string;
    bodyType: string;
  };
  head: {
    shape: string;
    hair: {
      style: string;
      color: string;
    };
    face: {
      eyes: string;
      eyeColor: string;
      ears: string;
      nose: string;
      mouth: string;
    };
    accessories: string[];
  };
  body: {
    proportions: string;
    features: string[];
    skinTone: string;
  };
  clothing: {
    style: { value: string; label: string; icon: string };
    upperBody: {
      type: { value: string; label: string; icon: string };
      color: { value: string; label: string; icon: string };
      material: { value: string; label: string; icon: string };
    };
    lowerBody: {
      type: { value: string; label: string; icon: string };
      color: { value: string; label: string; icon: string };
      material: { value: string; label: string; icon: string };
    };
    footwear: {
      type: { value: string; label: string; icon: string };
      color: { value: string; label: string; icon: string };
      material: { value: string; label: string; icon: string };
    };
    headwear: {
      type: { value: string; label: string; icon: string };
      color: { value: string; label: string; icon: string };
      material: { value: string; label: string; icon: string };
    };
    underwear: {
      type: { value: string; label: string; icon: string };
      color: { value: string; label: string; icon: string };
      material: { value: string; label: string; icon: string };
    };
    accessories: string[];
  };
  pose: {
    bodyPose: string;
    armPose: string;
    handGesture: string;
  };
  style: {
    artStyle: string;
  };
  camera: {
    layout: string;
    aspectRatio: string;
    screenSize: string;
    cameraAngle: string;
    cameraTreatment: string;
    cameraEffects: string[];
    lighting: string;
  };
  background: {
    type: string;
    color: string;
    environmentType: string;
    effects: string[];
    style: string;
  };
}

export const defaultPreset: Preset = {
  basic: {
    name: '',
    gender: 'other',
    ageGroup: 'young adult',
    bodyType: 'average'
  },
  head: {
    shape: 'oval',
    hair: {
      style: 'short',
      color: 'black'
    },
    face: {
      eyes: 'almond',
      eyeColor: 'brown',
      ears: 'normal',
      nose: 'straight',
      mouth: 'full'
    },
    accessories: []
  },
  body: {
    proportions: 'average',
    features: [],
    skinTone: 'medium'
  },
  clothing: {
    style: { value: 'casual', label: 'Casual', icon: '👕' },
    upperBody: {
      type: { value: 'shirt', label: 'Shirt', icon: '👕' },
      color: { value: 'blue', label: 'Blue', icon: '🔵' },
      material: { value: 'cotton', label: 'Cotton', icon: '🧵' }
    },
    lowerBody: {
      type: { value: 'pants', label: 'Pants', icon: '👖' },
      color: { value: 'black', label: 'Black', icon: '⚫' },
      material: { value: 'denim', label: 'Denim', icon: '👖' }
    },
    footwear: {
      type: { value: 'shoes', label: 'Shoes', icon: '👞' },
      color: { value: 'brown', label: 'Brown', icon: '🟤' },
      material: { value: 'leather', label: 'Leather', icon: '🧥' }
    },
    headwear: {
      type: { value: 'none', label: 'None', icon: '❌' },
      color: { value: 'none', label: 'None', icon: '⚪' },
      material: { value: 'none', label: 'None', icon: '❌' }
    },
    underwear: {
      type: { value: 'regular', label: 'Regular', icon: '🩲' },
      color: { value: 'white', label: 'White', icon: '⚪' },
      material: { value: 'cotton', label: 'Cotton', icon: '🧵' }
    },
    accessories: []
  },
  pose: {
    bodyPose: 'standing',
    armPose: 'both arms down',
    handGesture: 'both hands open'
  },
  style: {
    artStyle: 'realistic'
  },
  camera: {
    layout: 'portrait',
    aspectRatio: '3:4',
    screenSize: '1080p',
    cameraAngle: 'front view',
    cameraTreatment: 'medium shot',
    cameraEffects: [],
    lighting: 'natural lighting'
  },
  background: {
    type: 'solid color',
    color: 'white',
    environmentType: 'minimalist',
    effects: [],
    style: 'minimalist'
  }
}; 