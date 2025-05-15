const fs = require('fs');
const path = require('path');

const categories = {
  clothing: [
    { id: 'kasual', label: 'Kasual' },
    { id: 'formal', label: 'Formal' },
    { id: 'tradisional', label: 'Tradisional' },
    { id: 'modern', label: 'Modern' },
    { id: 'sporty', label: 'Olahraga' }
  ],
  fabric: [
    { id: 'katun', label: 'Katun' },
    { id: 'sutra', label: 'Sutra' },
    { id: 'denim', label: 'Denim' },
    { id: 'kulit', label: 'Kulit' },
    { id: 'wol', label: 'Wol' }
  ],
  colors: [
    { id: 'hitam', label: 'Hitam' },
    { id: 'putih', label: 'Putih' },
    { id: 'merah', label: 'Merah' },
    { id: 'biru', label: 'Biru' },
    { id: 'hijau', label: 'Hijau' }
  ]
};

const colorMap = {
  hitam: '#000000',
  putih: '#FFFFFF',
  merah: '#FF0000',
  biru: '#0000FF',
  hijau: '#00FF00',
  kasual: '#4A90E2',
  formal: '#2C3E50',
  tradisional: '#8E44AD',
  modern: '#2ECC71',
  sporty: '#E74C3C',
  katun: '#F5DEB3',
  sutra: '#FFB6C1',
  denim: '#1E90FF',
  kulit: '#8B4513',
  wol: '#A9A9A9'
};

// Create SVG content for a placeholder image
function createPlaceholderSVG(item) {
  const bgColor = colorMap[item.id] || '#e2e8f0';
  const textColor = item.id === 'putih' ? '#000000' : '#FFFFFF';
  
  return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${bgColor}"/>
    <text x="100" y="100" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${item.label}</text>
  </svg>`;
}

// Generate placeholder images for each category
Object.entries(categories).forEach(([category, items]) => {
  const categoryPath = path.join(__dirname, '..', 'public', 'images', category);
  
  // Create category directory if it doesn't exist
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }

  // Generate placeholder images for each item
  items.forEach(item => {
    const svgContent = createPlaceholderSVG(item);
    fs.writeFileSync(path.join(categoryPath, `${item.id}.svg`), svgContent);
  });
});

// Create default accessory image
const accessoriesPath = path.join(__dirname, '..', 'public', 'images', 'accessories');
if (!fs.existsSync(accessoriesPath)) {
  fs.mkdirSync(accessoriesPath, { recursive: true });
}

const defaultAccessorySVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#e2e8f0"/>
  <text x="100" y="100" font-family="Arial" font-size="24" fill="#4a5568" text-anchor="middle" dominant-baseline="middle">Aksesoris</text>
</svg>`;

fs.writeFileSync(path.join(accessoriesPath, 'default.svg'), defaultAccessorySVG);

console.log('Gambar placeholder berhasil dibuat!'); 