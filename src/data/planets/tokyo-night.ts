import { museArtwork } from '../../art';
import type { MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const tokyoNight: MusePlanet = {
  id: 'tokyo-night',
  galaxyId: 'urban',
  name: '东京夜景美女',
  subtitle: 'TOKYO NIGHT',
  description: '霓虹街巷、雨后反光、车站、便利店与城市蓝调组成的现代东京夜间人像。',
  code: 'TOKYO',
  sequence: 1,
  star: { x: 31, y: 59, size: 16 },
  images: [
    {
      id: 'tokyo-01', title: '雨夜霓虹', image: '/images/urban/tokyo-night/tokyo-night-001.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Stylish adult Japanese woman standing on a neon-lit Tokyo side street after rain, black trench coat, short dark hair, magenta and cyan reflections on wet pavement, cinematic urban portrait, realistic skin, 50mm lens, shallow depth of field, premium night photography',
      negativePrompt, tags: ['东京', '霓虹', '雨夜', '风衣'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['short', 'dark'] },
        fashion: { outfit: ['trench-coat'], colors: ['black'] },
        environment: { scene: 'neon-side-street', location: 'tokyo', season: 'autumn', weather: 'rain', time: 'night' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['neon-light', 'reflected-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street'], mood: ['cool', 'mysterious'], palette: ['magenta', 'cyan', 'black'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-02', title: '车站蓝调', image: museArtwork('tokyo', 1, '车站蓝调'),
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Adult Japanese woman waiting near a modern Tokyo train platform at blue hour, minimalist navy coat, soft station lights, cinematic reflections in glass, quiet expression, realistic urban fashion portrait, 85mm lens, clean composition, subtle film grain',
      negativePrompt, tags: ['车站', '蓝调', '极简', '城市'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['dark', 'bob'] },
        fashion: { outfit: ['minimal-coat'], colors: ['navy'] },
        environment: { scene: 'train-platform', location: 'tokyo', season: 'winter', weather: 'clear', time: 'blue-hour' },
        pose: { action: 'waiting', expression: 'quiet' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['station-light', 'blue-hour-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'minimalist', 'film'], mood: ['cool', 'serene'], palette: ['navy', 'steel-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'tokyo-03', title: '便利店微光', image: museArtwork('tokyo', 2, '便利店微光'),
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Adult Japanese woman outside a bright convenience store late at night, casual oversized jacket and pleated skirt, soft fluorescent spill light, realistic Tokyo street details, candid cinematic photography, 35mm lens, natural expression, subtle film grain',
      negativePrompt, tags: ['便利店', '街拍', '夜晚', '35mm'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['medium', 'dark'] },
        fashion: { outfit: ['oversized-jacket', 'pleated-skirt'], colors: ['charcoal', 'gray'] },
        environment: { scene: 'convenience-store-street', location: 'tokyo', season: 'spring', weather: 'clear', time: 'night' },
        pose: { action: 'walking', expression: 'natural' },
        photography: { composition: 'full-body', lens: '35mm', lighting: ['fluorescent-spill-light', 'ambient-night-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street', 'film'], mood: ['fresh', 'cool'], palette: ['white', 'charcoal', 'neon'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'tokyo-04', title: '涩谷红灯', image: museArtwork('tokyo', 3, '涩谷红灯'),
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Elegant adult Japanese woman near a busy Tokyo crossing at night, tailored black blazer dress, red signal glow and blurred city lights, confident calm expression, cinematic fashion editorial, 85mm lens, realistic skin texture, high contrast urban color grading',
      negativePrompt, tags: ['涩谷', '红灯', '都市时尚', '虚化'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark'] },
        fashion: { outfit: ['blazer-dress'], colors: ['black'] },
        environment: { scene: 'city-crossing', location: 'tokyo', season: 'autumn', weather: 'clear', time: 'night' },
        pose: { action: 'standing', expression: 'confident-calm' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['city-light', 'signal-glow'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['elegant', 'cool'], palette: ['black', 'red', 'electric-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    }
  ]
};
