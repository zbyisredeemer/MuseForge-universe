import { museArtwork } from '../../art';
import type { MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const snowMuse: MusePlanet = {
  id: 'snow-muse',
  galaxyId: 'nature',
  name: '雪原系美女',
  subtitle: 'SNOW MUSE',
  description: '雪原、冰湖、松林与冷空气构成的冬季人像世界，以银白、冰蓝和柔雾为主。',
  code: 'SNOW',
  sequence: 2,
  star: { x: 72, y: 28, size: 15 },
  images: [
    {
      id: 'snow-01', title: '初雪晨光', image: museArtwork('snow', 0, '初雪晨光'),
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Elegant adult East Asian woman standing in a quiet snowy pine field at dawn, soft falling snow, ivory wool coat, long black hair, pale blue morning haze, realistic skin texture, cinematic winter portrait, soft backlight, 85mm lens, shallow depth of field, premium editorial photography, photorealistic, ultra detailed',
      negativePrompt, tags: ['初雪', '晨光', '羊毛大衣', '冰蓝'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'black'] },
        fashion: { outfit: ['wool-coat'], colors: ['ivory'] },
        environment: { scene: 'snowy-pine-field', season: 'winter', weather: 'snow', time: 'dawn' },
        pose: { action: 'standing', expression: 'calm' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['soft-backlight', 'natural-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['serene', 'cool'], palette: ['ice-blue', 'white'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'snow-02', title: '冰湖蓝影', image: museArtwork('snow', 1, '冰湖蓝影'),
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Adult East Asian woman beside a frozen alpine lake under blue-hour light, deep navy coat dress, silver scarf, fine frost in the air, calm reflective expression, cinematic winter fashion portrait, 50mm lens, cool natural color grading, realistic skin, editorial composition',
      negativePrompt, tags: ['冰湖', '蓝调', '围巾', '冬日'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'loose'] },
        fashion: { outfit: ['coat-dress'], colors: ['navy'], accessories: ['silver-scarf'] },
        environment: { scene: 'frozen-lake', season: 'winter', weather: 'clear', time: 'blue-hour' },
        pose: { action: 'standing', expression: 'reflective' },
        photography: { composition: 'environmental-portrait', lens: '50mm', lighting: ['blue-hour-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['cool', 'serene'], palette: ['navy', 'silver', 'ice-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'snow-03', title: '风雪红围巾', image: museArtwork('snow', 2, '风雪红围巾'),
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Adult East Asian woman walking through light windblown snow in a northern forest, charcoal winter coat, muted red scarf, hair moving in the wind, dramatic but natural expression, cinematic fashion photography, crisp snow detail, 85mm lens, realistic textures',
      negativePrompt, tags: ['风雪', '红围巾', '行走', '电影感'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'windblown'] },
        fashion: { outfit: ['winter-coat'], colors: ['charcoal'], accessories: ['red-scarf'] },
        environment: { scene: 'snow-forest', season: 'winter', weather: 'snow', time: 'day' },
        pose: { action: 'walking', expression: 'focused' },
        photography: { composition: 'full-body', lens: '85mm', lighting: ['soft-overcast-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['cool', 'elegant'], palette: ['charcoal', 'white', 'muted-red'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    },
    {
      id: 'snow-04', title: '雪夜灯火', image: museArtwork('snow', 3, '雪夜灯火'),
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Elegant adult East Asian woman in a snowy mountain village at night, warm window lights behind her, cream knit sweater under a dark coat, soft snowflakes catching warm light, cinematic night portrait, realistic skin and fabric, 50mm lens, warm and cool contrast',
      negativePrompt, tags: ['雪夜', '灯火', '冷暖对比', '针织'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'soft-wave'] },
        fashion: { outfit: ['dark-coat', 'knit-sweater'], colors: ['cream', 'black'] },
        environment: { scene: 'snow-village', season: 'winter', weather: 'snow', time: 'night' },
        pose: { action: 'standing', expression: 'gentle' },
        photography: { composition: 'half-body', lens: '50mm', lighting: ['warm-window-light', 'ambient-night-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['warm', 'romantic'], palette: ['warm-gold', 'snow-white', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '2160x3840', format: 'svg', assetType: 'placeholder' }
      }
    }
  ]
};
