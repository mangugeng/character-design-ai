# Character Designer AI

A comprehensive web application for designing characters with AI. This tool helps users create detailed prompts for generating character images using AI image generators like Midjourney, DALL-E, or Stable Diffusion.

## Features

- Complete character parameter customization
- Detailed sub-race/ethnicity options for human characters
- Automatic prompt generation
- Multiple prompt styles (detailed, concise, artistic)
- Preset characters for quick starting points
- Preset management (save, load, delete, favorite)
- Responsive user interface
- Individual left/right arm, hand, and leg posing

## Preset Characters

The application comes with several pre-configured character presets in various styles:
- Fantasy Warrior
- Sci-Fi Engineer
- Magical Elf
- Cyberpunk Hacker
- Desert Nomad
- Steampunk Inventor
- Modern Detective
- Anime Hero
- Forest Druid
- Space Marine

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS

## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/mangugeng/character-design-ai.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Fill in the character parameters according to your needs
2. Enable "Auto-generate" to see the prompt update in real-time, or click "Generate Prompt"
3. Select a prompt style (detailed, concise, artistic)
4. Copy the generated prompt
5. Use the prompt in your favorite AI image generator

## Parameter Categories

The application includes detailed parameter settings for:

- Basic Info (name, gender, age, body type)
- Race (category, race, sub-race/ethnicity, features)
- Body (height, build, skin tone, scars, tattoos)
- Head (shape, hair, face features, accessories)
- Clothing (style, upper/lower body, accessories)
- Pose (stance, arm/hand/leg positions, expression)
- Style (art style, rendering, lighting)
- Camera (layout, composition, effects)
- Background (type, color, environment)

## Preset Management

You can save character configurations as presets for future use:

1. Configure your character parameters
2. Click "Save as Preset"
3. Enter preset name, category, and tags
4. Click "Save"
5. Use the "Load" button to load a saved preset
6. Use the "Delete" button to remove unwanted presets
7. Mark your favorite presets with the star icon

## Live Demo

Visit the live application at: https://karakter-designer-a73owgzaf-mang-ugengs-projects.vercel.app/

## License

MIT 