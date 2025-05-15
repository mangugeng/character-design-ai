// Store selected values
const selectedValues = {
    // Basic
    characterName: '',
    gender: null,
    ageGroup: null,
    bodyType: null,

    // Body
    bodyProportions: null,
    bodyFeatures: [],
    skinTone: null,
    bodyPose: null,
    armPose: null,
    handGesture: null,

    // Head
    headShape: null,
    hairStyle: null,
    hairColor: null,
    eyes: null,
    eyeColor: null,
    ears: null,
    nose: null,
    mouth: null,
    facialFeatures: [],
    headAccessories: [],

    // Clothing
    clothingStyle: null,
    fabricType: null,
    fabricColor: null,
    stitchingDetails: [],
    clothingAccessories: [],

    // Camera
    layout: null,
    aspectRatio: null,
    screenSize: null,
    cameraAngle: null,
    cameraTreatment: null,
    cameraEffects: [],
    lighting: null,

    // Background
    backgroundType: null,
    backgroundColor: null,
    environmentType: null,
    backgroundEffects: [],
    backgroundStyle: null,

    // Style
    artStyle: null
};

// Standard Preset Values
const standardPresets = {
    anime: {
        basic: {
            name: '',
            gender: 'other',
            ageGroup: 'young adult',
            bodyType: 'slim'
        },
        head: {
            shape: 'round',
            hair: {
                style: 'long',
                color: 'black'
            },
            face: {
                eyes: 'almond',
                eyeColor: 'blue',
                ears: 'normal',
                nose: 'button',
                mouth: 'full'
            },
            accessories: []
        },
        body: {
            proportions: 'average',
            features: ['slim'],
            skinTone: 'fair'
        },
        clothing: {
            style: 'casual',
            fabricType: 'cotton',
            fabricColor: 'black',
            stitchingDetails: [],
            accessories: []
        },
        pose: {
            bodyPose: 'standing',
            armPose: 'both arms down',
            handGesture: 'both hands open'
        },
        style: {
            artStyle: 'anime'
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
    },
    realistic: {
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
                color: 'brown'
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
            features: ['athletic'],
            skinTone: 'medium'
        },
        clothing: {
            style: 'casual',
            fabricType: 'cotton',
            fabricColor: 'blue',
            stitchingDetails: [],
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
            screenSize: '4k',
            cameraAngle: 'front view',
            cameraTreatment: 'medium shot',
            cameraEffects: ['depth of field'],
            lighting: 'natural lighting'
        },
        background: {
            type: 'studio',
            color: 'light gray',
            environmentType: 'indoor',
            effects: ['blur'],
            style: 'minimalist'
        }
    },
    fantasy: {
        basic: {
            name: '',
            gender: 'other',
            ageGroup: 'young adult',
            bodyType: 'athletic'
        },
        head: {
            shape: 'oval',
            hair: {
                style: 'long',
                color: 'silver'
            },
            face: {
                eyes: 'almond',
                eyeColor: 'violet',
                ears: 'elven',
                nose: 'straight',
                mouth: 'full'
            },
            accessories: ['earrings']
        },
        body: {
            proportions: 'tall',
            features: ['athletic', 'long limbs'],
            skinTone: 'fair'
        },
        clothing: {
            style: 'fantasy',
            fabricType: 'silk',
            fabricColor: 'purple',
            stitchingDetails: ['gold thread'],
            accessories: ['cape', 'jewelry']
        },
        pose: {
            bodyPose: 'standing',
            armPose: 'both arms up',
            handGesture: 'both hands open'
        },
        style: {
            artStyle: 'stylized'
        },
        camera: {
            layout: 'portrait',
            aspectRatio: '3:4',
            screenSize: '4k',
            cameraAngle: 'three-quarter view',
            cameraTreatment: 'medium shot',
            cameraEffects: ['lens flare', 'glow'],
            lighting: 'dramatic lighting'
        },
        background: {
            type: 'environment',
            color: 'purple',
            environmentType: 'fantasy',
            effects: ['glow', 'particles'],
            style: 'detailed'
        }
    },
    'sci-fi': {
        basic: {
            name: '',
            gender: 'other',
            ageGroup: 'young adult',
            bodyType: 'athletic'
        },
        head: {
            shape: 'oval',
            hair: {
                style: 'short',
                color: 'black'
            },
            face: {
                eyes: 'narrow',
                eyeColor: 'blue',
                ears: 'normal',
                nose: 'straight',
                mouth: 'thin'
            },
            accessories: ['glasses']
        },
        body: {
            proportions: 'tall',
            features: ['athletic', 'broad shoulders'],
            skinTone: 'fair'
        },
        clothing: {
            style: 'sci-fi',
            fabricType: 'synthetic',
            fabricColor: 'metallic blue',
            stitchingDetails: ['silver thread'],
            accessories: ['gloves', 'jewelry']
        },
        pose: {
            bodyPose: 'standing',
            armPose: 'arms akimbo',
            handGesture: 'both hands fists'
        },
        style: {
            artStyle: '3d'
        },
        camera: {
            layout: 'portrait',
            aspectRatio: '3:4',
            screenSize: '4k',
            cameraAngle: 'three-quarter view',
            cameraTreatment: 'medium shot',
            cameraEffects: ['chromatic aberration', 'lens flare'],
            lighting: 'rim lighting'
        },
        background: {
            type: 'environment',
            color: 'dark gray',
            environmentType: 'sci-fi',
            effects: ['glow', 'particles'],
            style: 'detailed'
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mode switches
    const armPoseSwitch = document.getElementById('armPoseModeSwitch');
    const handGestureSwitch = document.getElementById('handGestureModeSwitch');
    
    // Arm Pose Mode Switch
    if (armPoseSwitch) {
        armPoseSwitch.addEventListener('change', function() {
            const container = this.closest('.pose-options');
            const bothOptions = container.querySelector('.both-options');
            const individualOptions = container.querySelector('.individual-options');
            
            if (this.checked) {
                bothOptions.style.display = 'none';
                individualOptions.style.display = 'block';
                // Reset both options selections
                bothOptions.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            } else {
                bothOptions.style.display = 'block';
                individualOptions.style.display = 'none';
                // Reset individual options selections
                individualOptions.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            }
        });
    }
    
    // Hand Gesture Mode Switch
    if (handGestureSwitch) {
        handGestureSwitch.addEventListener('change', function() {
            const container = this.closest('.pose-options');
            const bothOptions = container.querySelector('.both-options');
            const individualOptions = container.querySelector('.individual-options');
            
            if (this.checked) {
                bothOptions.style.display = 'none';
                individualOptions.style.display = 'block';
                // Reset both options selections
                bothOptions.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            } else {
                bothOptions.style.display = 'block';
                individualOptions.style.display = 'none';
                // Reset individual options selections
                individualOptions.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            }
        });
    }

    // Add click handlers to all option buttons
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.closest('.mb-4').querySelector('.form-label').textContent.toLowerCase().replace(' ', '');
            const value = this.dataset.value;
            
            // Handle both/individual options
            if (this.classList.contains('both-option')) {
                const container = this.closest('.mb-4');
                const bothOptions = container.querySelectorAll('.both-option');
                
                // Reset all both options
                bothOptions.forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Update selected value
                const property = getPropertyForCategory(category);
                if (property) {
                    selectedValues[property] = value;
                }
            } else if (this.classList.contains('individual-option')) {
                // Get the column (left or right) of the clicked button
                const isLeft = this.classList.contains('left-arm') || this.classList.contains('left-hand');
                const column = isLeft ? 'left' : 'right';
                
                // Find all buttons in the same column
                const columnButtons = this.closest('.col-6').querySelectorAll('.option-btn');
                
                // Reset selection in the same column
                columnButtons.forEach(btn => {
                    btn.classList.remove('selected');
                });
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Update selected values
                const property = getPropertyForCategory(category);
                if (property) {
                    if (!Array.isArray(selectedValues[property])) {
                        selectedValues[property] = [];
                    }
                    
                    // Remove any existing selections for this side
                    selectedValues[property] = selectedValues[property].filter(v => 
                        (isLeft && !v.startsWith('left')) || (!isLeft && !v.startsWith('right'))
                    );
                    
                    // Add the new selection
                    selectedValues[property].push(value);
                }
            } else {
                // Handle other options (non-both/individual)
                const parent = this.closest('.option-grid');
                parent.querySelectorAll('.option-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
                this.classList.add('selected');
                
                const property = getPropertyForCategory(category);
                if (property) {
                    selectedValues[property] = value;
                }
            }
            
            // Generate prompt after selection
            generatePrompt();
        });
    });

    // Style multiple select elements
    const multipleSelects = document.querySelectorAll('select[multiple]');
    multipleSelects.forEach(select => {
        select.style.height = '120px';
    });

    // Add helper text for multiple select
    const multipleSelectLabels = document.querySelectorAll('select[multiple]').forEach(select => {
        const label = select.previousElementSibling;
        if (label) {
            label.innerHTML += ' <small class="text-muted">(Hold Ctrl/Cmd to select multiple)</small>';
        }
    });

    // Add click handlers to all color buttons
    document.querySelectorAll('.color-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.closest('.mb-4').querySelector('.form-label').textContent.toLowerCase().replace(' ', '');
            const value = this.dataset.value;
            
            // Remove selected class from all color buttons in the same category
            const parent = this.closest('.color-grid');
            parent.querySelectorAll('.color-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Update selected value based on category
            const property = getPropertyForCategory(category);
            if (property) {
                selectedValues[property] = value;
            }
        });
    });
});

// Helper function to get the correct property name for a category
function getPropertyForCategory(category) {
    const categoryMap = {
        // Basic
        'gender': 'gender',
        'agegroup': 'ageGroup',
        'bodytype': 'bodyType',
        
        // Body
        'bodyproportions': 'bodyProportions',
        'bodyfeatures': 'bodyFeatures',
        'skintone': 'skinTone',
        'bodypose': 'bodyPose',
        'armpose': 'armPose',
        'handgestures': 'handGesture',
        
        // Head
        'headshape': 'headShape',
        'hairstyle': 'hairStyle',
        'haircolor': 'hairColor',
        'eyes': 'eyes',
        'eyecolor': 'eyeColor',
        'ears': 'ears',
        'nose': 'nose',
        'mouth': 'mouth',
        
        // Clothing
        'clothingstyle': 'clothingStyle',
        'fabrictype': 'fabricType',
        'fabriccolor': 'fabricColor',
        
        // Camera
        'layout & composition': 'layout',
        'layout': 'layout',
        'aspectratio': 'aspectRatio',
        'screensize': 'screenSize',
        'cameraangle': 'cameraAngle',
        'cameratreatment': 'cameraTreatment',
        'lighting': 'lighting',
        
        // Background
        'backgroundtype': 'backgroundType',
        'backgroundcolor': 'backgroundColor',
        'environmenttype': 'environmentType',
        'backgroundstyle': 'backgroundStyle',
        
        // Style
        'artstyle': 'artStyle'
    };
    return categoryMap[category.toLowerCase()];
}

// Helper function to get the correct array property name for multi-select categories
function getArrayPropertyForCategory(category) {
    const arrayCategoryMap = {
        // Body
        'bodyfeatures': 'bodyFeatures',
        
        // Head
        'facialfeatures': 'facialFeatures',
        'headaccessories': 'headAccessories',
        
        // Clothing
        'stitchingdetails': 'stitchingDetails',
        'clothingaccessories': 'clothingAccessories',
        
        // Camera
        'cameraeffects': 'cameraEffects',
        
        // Background
        'backgroundeffects': 'backgroundEffects'
    };
    return arrayCategoryMap[category];
}

// Generate prompt
function generatePrompt() {
    const characterName = document.getElementById('characterName').value;
    let promptParts = [];

    // Basic Information
    let basicInfo = [];
    if (characterName) basicInfo.push(characterName);
    if (selectedValues.ageGroup) basicInfo.push(selectedValues.ageGroup);
    if (selectedValues.gender) basicInfo.push(selectedValues.gender);
    if (selectedValues.bodyType) basicInfo.push(`with a ${selectedValues.bodyType} body type`);
    if (basicInfo.length > 0) {
        promptParts.push(basicInfo.join(' '));
    }

    // Body Details
    let bodyInfo = [];
    if (selectedValues.bodyProportions) bodyInfo.push(`with ${selectedValues.bodyProportions} proportions`);
    if (Array.isArray(selectedValues.bodyFeatures) && selectedValues.bodyFeatures.length > 0) {
        bodyInfo.push(`featuring ${selectedValues.bodyFeatures.join(', ')}`);
    }
    if (selectedValues.skinTone) bodyInfo.push(`with ${selectedValues.skinTone} skin tone`);
    if (selectedValues.bodyPose) bodyInfo.push(selectedValues.bodyPose);
    if (selectedValues.armPose) bodyInfo.push(`with ${selectedValues.armPose}`);
    if (selectedValues.handGesture) bodyInfo.push(`making a ${selectedValues.handGesture} gesture`);
    if (bodyInfo.length > 0) {
        promptParts.push(bodyInfo.join(', '));
    }

    // Head Details
    let headInfo = [];
    if (selectedValues.headShape) headInfo.push(`${selectedValues.headShape} shaped head`);
    if (selectedValues.ears) headInfo.push(`${selectedValues.ears} ears`);
    if (selectedValues.nose) headInfo.push(`${selectedValues.nose} nose`);
    if (selectedValues.mouth) headInfo.push(`${selectedValues.mouth} mouth`);
    if (Array.isArray(selectedValues.facialFeatures) && selectedValues.facialFeatures.length > 0) {
        headInfo.push(`with ${selectedValues.facialFeatures.join(', ')}`);
    }
    if (Array.isArray(selectedValues.headAccessories) && selectedValues.headAccessories.length > 0) {
        headInfo.push(`wearing ${selectedValues.headAccessories.join(', ')}`);
    }
    if (headInfo.length > 0) {
        promptParts.push(headInfo.join(', '));
    }

    // Face Details
    let faceInfo = [];
    if (selectedValues.hairStyle && selectedValues.hairColor) {
        faceInfo.push(`${selectedValues.hairColor} ${selectedValues.hairStyle} hair`);
    }
    if (selectedValues.eyes) faceInfo.push(`${selectedValues.eyes} eyes`);
    if (selectedValues.eyeColor) {
        faceInfo.push(`with ${selectedValues.eyeColor} irises`);
    }
    if (faceInfo.length > 0) {
        promptParts.push(faceInfo.join(', '));
    }

    // Clothing Details
    let clothingInfo = [];
    if (selectedValues.clothingStyle) {
        clothingInfo.push(`${selectedValues.clothingStyle} style clothing`);
    }
    if (selectedValues.fabricType) {
        clothingInfo.push(`made of ${selectedValues.fabricType}`);
    }
    if (selectedValues.fabricColor) {
        clothingInfo.push(`in ${selectedValues.fabricColor} color`);
    }
    if (Array.isArray(selectedValues.stitchingDetails) && selectedValues.stitchingDetails.length > 0) {
        clothingInfo.push(`with ${selectedValues.stitchingDetails.join(', ')} details`);
    }
    if (Array.isArray(selectedValues.clothingAccessories) && selectedValues.clothingAccessories.length > 0) {
        clothingInfo.push(`accessorized with ${selectedValues.clothingAccessories.join(', ')}`);
    }
    if (clothingInfo.length > 0) {
        promptParts.push(clothingInfo.join(', '));
    }

    // Layout & Camera Details
    let layoutInfo = [];
    if (selectedValues.layout) {
        let layoutDescription = '';
        switch (selectedValues.layout) {
            case 'portrait':
                layoutDescription = 'in portrait orientation';
                break;
            case 'landscape':
                layoutDescription = 'in landscape orientation';
                break;
            case 'square':
                layoutDescription = 'in square format';
                break;
            case 'cinematic':
                layoutDescription = 'in cinematic widescreen format';
                break;
            default:
                layoutDescription = `in ${selectedValues.layout} format`;
        }
        layoutInfo.push(layoutDescription);
    }
    if (selectedValues.aspectRatio) {
        let ratioDescription = '';
        switch (selectedValues.aspectRatio) {
            case '1:1':
                ratioDescription = 'with a square (1:1) aspect ratio';
                break;
            case '4:3':
                ratioDescription = 'with a standard (4:3) aspect ratio';
                break;
            case '16:9':
                ratioDescription = 'with a widescreen (16:9) aspect ratio';
                break;
            case '21:9':
                ratioDescription = 'with an ultrawide (21:9) aspect ratio';
                break;
            default:
                ratioDescription = `with a ${selectedValues.aspectRatio} aspect ratio`;
        }
        layoutInfo.push(ratioDescription);
    }
    if (selectedValues.screenSize) layoutInfo.push(`at ${selectedValues.screenSize} resolution`);
    if (selectedValues.cameraAngle) layoutInfo.push(`shot from ${selectedValues.cameraAngle}`);
    if (selectedValues.cameraTreatment) layoutInfo.push(`using ${selectedValues.cameraTreatment}`);
    if (Array.isArray(selectedValues.cameraEffects) && selectedValues.cameraEffects.length > 0) {
        layoutInfo.push(`with ${selectedValues.cameraEffects.join(', ')} effects`);
    }
    if (selectedValues.lighting) layoutInfo.push(`with ${selectedValues.lighting}`);
    if (layoutInfo.length > 0) {
        promptParts.push(layoutInfo.join(', '));
    }

    // Background Details
    let backgroundInfo = [];
    if (selectedValues.backgroundType) backgroundInfo.push(selectedValues.backgroundType);
    if (selectedValues.backgroundColor) backgroundInfo.push(`in ${selectedValues.backgroundColor}`);
    if (selectedValues.environmentType) backgroundInfo.push(`with ${selectedValues.environmentType} setting`);
    if (selectedValues.backgroundStyle) backgroundInfo.push(`in ${selectedValues.backgroundStyle} style`);
    if (Array.isArray(selectedValues.backgroundEffects) && selectedValues.backgroundEffects.length > 0) {
        backgroundInfo.push(`featuring ${selectedValues.backgroundEffects.join(', ')} effects`);
    }
    if (backgroundInfo.length > 0) {
        promptParts.push(backgroundInfo.join(', '));
    }

    // Art Style
    if (selectedValues.artStyle) {
        let styleDescription = '';
        switch (selectedValues.artStyle) {
            case 'realistic':
                styleDescription = 'highly detailed and photorealistic with accurate lighting and shadows';
                break;
            case 'anime':
                styleDescription = 'anime-style proportions and features with bold outlines and expressive eyes';
                break;
            case 'cartoon':
                styleDescription = 'stylized, cartoon-like appearance with clean lines and vibrant colors';
                break;
            case 'pixel-art':
                styleDescription = 'pixel art style with limited color palette and clear pixel definition';
                break;
            case '3d':
                styleDescription = '3D style with realistic materials and lighting';
                break;
            case 'clay render':
                styleDescription = 'clay-like appearance with soft, matte materials and subtle subsurface scattering';
                break;
            case 'watercolor':
                styleDescription = 'watercolor painting style with soft edges and flowing colors';
                break;
            case 'oil painting':
                styleDescription = 'oil painting style with rich textures and visible brush strokes';
                break;
            case 'sketch':
                styleDescription = 'sketch-like appearance with visible pencil or charcoal strokes';
                break;
            case 'digital art':
                styleDescription = 'clean, digital art style with smooth gradients and precise details';
                break;
            case 'low poly':
                styleDescription = 'low poly style with geometric shapes and flat shading';
                break;
            case 'stylized':
                styleDescription = 'unique, stylized appearance with exaggerated features and artistic interpretation';
                break;
            default:
                styleDescription = 'well-detailed and visually appealing';
        }
        promptParts.push(styleDescription);
    }

    // Combine all parts into a flowing paragraph
    let finalPrompt = promptParts.join('. ');
    if (finalPrompt.length > 0) {
        finalPrompt = finalPrompt.charAt(0).toUpperCase() + finalPrompt.slice(1) + '.';
    }

    // Display the generated prompt
    const promptElement = document.getElementById('generatedPrompt');
    if (promptElement) {
        promptElement.textContent = finalPrompt;
    } else {
        console.error('Prompt element not found');
    }

    // Add click handler for layout buttons
    document.querySelectorAll('.option-btn[data-value="portrait"], .option-btn[data-value="landscape"], .option-btn[data-value="square"], .option-btn[data-value="cinematic"]').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.closest('.mb-4').querySelector('.form-label').textContent.toLowerCase().replace(' ', '');
            const value = this.dataset.value;
            
            // Remove selected class from all buttons in the same category
            const parent = this.closest('.option-grid');
            parent.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Update selected value
            selectedValues.layout = value;
        });
    });
}

// Copy prompt to clipboard
function copyPrompt() {
    const promptText = document.getElementById('generatedPrompt').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        // Show a temporary success message
        const copyButton = document.querySelector('.btn-success');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Preset Management Functions
function savePreset() {
    const presetName = document.getElementById('presetName').value.trim();
    if (!presetName) {
        alert('Please enter a preset name');
        return;
    }

    // Get all selected parameters
    const parameters = {
        basic: getSelectedBasicParameters(),
        head: getSelectedHeadParameters(),
        body: getSelectedBodyParameters(),
        clothing: getSelectedClothingParameters(),
        pose: getSelectedPoseParameters(),
        style: getSelectedStyleParameters(),
        camera: getSelectedCameraParameters(),
        background: getSelectedBackgroundParameters()
    };

    // Save to localStorage
    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    presets[presetName] = parameters;
    localStorage.setItem('characterPresets', JSON.stringify(presets));

    // Clear input and refresh list
    document.getElementById('presetName').value = '';
    loadPresets();
}

function loadPreset(presetName) {
    let preset;
    
    // Check if it's a standard preset
    if (standardPresets[presetName]) {
        preset = standardPresets[presetName];
    } else {
        // Load from localStorage for custom presets
        const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
        preset = presets[presetName];
        
        if (!preset) {
            alert('Preset not found');
            return;
        }
    }

    // Apply preset parameters
    applyBasicParameters(preset.basic);
    applyHeadParameters(preset.head);
    applyBodyParameters(preset.body);
    applyClothingParameters(preset.clothing);
    applyPoseParameters(preset.pose);
    applyStyleParameters(preset.style);
    applyCameraParameters(preset.camera);
    applyBackgroundParameters(preset.background);

    // Generate new prompt
    generatePrompt();
}

function loadPresets() {
    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    const container = document.getElementById('savedPresets');
    container.innerHTML = '';

    Object.keys(presets).forEach(name => {
        const presetButton = document.createElement('button');
        presetButton.className = 'btn btn-outline-secondary';
        presetButton.innerHTML = `
            <i class="fas fa-folder me-2"></i>${name}
            <button class="btn btn-sm btn-outline-danger ms-2" onclick="deletePreset('${name}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        presetButton.onclick = () => loadPreset(name);
        container.appendChild(presetButton);
    });
}

function deletePreset(presetName) {
    if (!confirm(`Are you sure you want to delete the preset "${presetName}"?`)) {
        return;
    }

    const presets = JSON.parse(localStorage.getItem('characterPresets') || '{}');
    delete presets[presetName];
    localStorage.setItem('characterPresets', JSON.stringify(presets));
    loadPresets();
}

function clearPresets() {
    if (!confirm('Are you sure you want to delete all presets?')) {
        return;
    }

    localStorage.removeItem('characterPresets');
    loadPresets();
}

// Helper functions to get selected parameters
function getSelectedBasicParameters() {
    // Implementation to get basic parameters
    return {
        name: document.getElementById('characterName').value,
        gender: getSelectedValue('gender'),
        ageGroup: getSelectedValue('ageGroup'),
        bodyType: getSelectedValue('bodyType')
    };
}

function getSelectedHeadParameters() {
    // Implementation to get head parameters
    return {
        shape: getSelectedValue('headShape'),
        hair: {
            style: getSelectedValue('hairStyle'),
            color: getSelectedValue('hairColor')
        },
        face: {
            eyes: getSelectedValue('eyes'),
            eyeColor: getSelectedValue('eyeColor'),
            ears: getSelectedValue('ears'),
            nose: getSelectedValue('nose'),
            mouth: getSelectedValue('mouth')
        },
        accessories: getSelectedMultiValues('headAccessories')
    };
}

// Add similar functions for other parameter categories...

// Helper functions to apply parameters
function applyBasicParameters(parameters) {
    document.getElementById('characterName').value = parameters.name;
    setSelectedValue('gender', parameters.gender);
    setSelectedValue('ageGroup', parameters.ageGroup);
    setSelectedValue('bodyType', parameters.bodyType);
}

function applyHeadParameters(parameters) {
    setSelectedValue('headShape', parameters.shape);
    setSelectedValue('hairStyle', parameters.hair.style);
    setSelectedValue('hairColor', parameters.hair.color);
    setSelectedValue('eyes', parameters.face.eyes);
    setSelectedValue('eyeColor', parameters.face.eyeColor);
    setSelectedValue('ears', parameters.face.ears);
    setSelectedValue('nose', parameters.face.nose);
    setSelectedValue('mouth', parameters.face.mouth);
    setSelectedMultiValues('headAccessories', parameters.accessories);
}

// Add similar functions for other parameter categories...

// Helper functions for getting and setting values
function getSelectedValue(category) {
    const selected = document.querySelector(`.option-btn[data-value].selected`);
    return selected ? selected.dataset.value : null;
}

function setSelectedValue(category, value) {
    const button = document.querySelector(`.option-btn[data-value="${value}"]`);
    if (button) {
        button.click();
    }
}

function getSelectedMultiValues(category) {
    return Array.from(document.querySelectorAll(`.option-btn[data-value].selected`))
        .map(btn => btn.dataset.value);
}

function setSelectedMultiValues(category, values) {
    values.forEach(value => {
        const button = document.querySelector(`.option-btn[data-value="${value}"]`);
        if (button) {
            button.click();
        }
    });
}

// Load presets when page loads
document.addEventListener('DOMContentLoaded', loadPresets);

// Add missing parameter application functions
function applyBodyParameters(parameters) {
    setSelectedValue('bodyProportions', parameters.proportions);
    setSelectedMultiValues('bodyFeatures', parameters.features);
    setSelectedValue('skinTone', parameters.skinTone);
}

function applyClothingParameters(parameters) {
    setSelectedValue('clothingStyle', parameters.style);
    setSelectedValue('fabricType', parameters.fabricType);
    setSelectedValue('fabricColor', parameters.fabricColor);
    setSelectedMultiValues('stitchingDetails', parameters.stitchingDetails);
    setSelectedMultiValues('clothingAccessories', parameters.accessories);
}

function applyPoseParameters(parameters) {
    setSelectedValue('bodyPose', parameters.bodyPose);
    setSelectedValue('armPose', parameters.armPose);
    setSelectedValue('handGesture', parameters.handGesture);
}

function applyStyleParameters(parameters) {
    setSelectedValue('artStyle', parameters.artStyle);
}

function applyCameraParameters(parameters) {
    setSelectedValue('layout', parameters.layout);
    setSelectedValue('aspectRatio', parameters.aspectRatio);
    setSelectedValue('screenSize', parameters.screenSize);
    setSelectedValue('cameraAngle', parameters.cameraAngle);
    setSelectedValue('cameraTreatment', parameters.cameraTreatment);
    setSelectedMultiValues('cameraEffects', parameters.cameraEffects);
    setSelectedValue('lighting', parameters.lighting);
}

function applyBackgroundParameters(parameters) {
    setSelectedValue('backgroundType', parameters.type);
    setSelectedValue('backgroundColor', parameters.color);
    setSelectedValue('environmentType', parameters.environmentType);
    setSelectedMultiValues('backgroundEffects', parameters.effects);
    setSelectedValue('backgroundStyle', parameters.style);
} 