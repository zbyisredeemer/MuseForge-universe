import type { MuseGalaxy } from './types';

export const galaxies: MuseGalaxy[] = [
  {
    id: 'nature',
    name: '自然星系',
    subtitle: 'NATURE',
    description: '森林、雪原、海洋、花海、荒漠、草原与山野等自然环境人像。',
    order: 1
  },
  {
    id: 'urban',
    name: '城市星系',
    subtitle: 'URBAN',
    description: '城市街头、夜景、霓虹、建筑与现代生活场景。',
    order: 2
  },
  {
    id: 'eastern',
    name: '东方星系',
    subtitle: 'EASTERN',
    description: '汉服、旗袍、江南、和服、韩服与东方古典视觉。',
    order: 3
  },
  {
    id: 'fashion',
    name: '时尚星系',
    subtitle: 'FASHION',
    description: '法式复古、静奢、Old Money、街头、极简与编辑时尚。',
    order: 4
  },
  {
    id: 'lifestyle',
    name: '生活星系',
    subtitle: 'LIFESTYLE',
    description: '咖啡馆、书店、居家、校园、办公室、旅行与周末生活。',
    order: 5
  },
  {
    id: 'fantasy',
    name: '梦幻星系',
    subtitle: 'FANTASY',
    description: '精灵、仙女、女神、人鱼、月光与天体幻想。',
    order: 6
  },
  {
    id: 'future',
    name: '未来星系',
    subtitle: 'FUTURE',
    description: '赛博朋克、仿生人、太空、全息与未来时尚。',
    order: 7
  },
  {
    id: 'photography',
    name: '摄影星系',
    subtitle: 'PHOTOGRAPHY',
    description: '胶片、棚拍、街拍、电影感、黑白与拍立得等摄影语言。',
    order: 8
  }
];

export const getGalaxyById = (id: string) => galaxies.find((galaxy) => galaxy.id === id);

/**
 * Starter controlled vocabulary for filters and future prompt generation.
 * These are internal normalized IDs; UI display labels can be localized separately.
 */
export const taxonomyOptions = {
  region: ['east-asia', 'south-asia', 'southeast-asia', 'europe', 'north-america', 'latin-america', 'africa', 'middle-east'],
  season: ['spring', 'summer', 'autumn', 'winter'],
  weather: ['clear', 'sunny', 'cloudy', 'rain', 'snow', 'fog', 'mist'],
  time: ['dawn', 'morning', 'day', 'golden-hour', 'sunset', 'blue-hour', 'night'],
  composition: ['close-up', 'headshot', 'half-body', 'three-quarter', 'full-body', 'environmental-portrait'],
  visualStyle: ['photorealistic', 'cinematic', 'editorial', 'film', 'minimalist', 'street', 'fantasy-realism'],
  mood: ['serene', 'fresh', 'romantic', 'mysterious', 'elegant', 'dreamy', 'cool', 'warm']
} as const;
