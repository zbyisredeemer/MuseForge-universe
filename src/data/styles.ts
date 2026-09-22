import { forestArtwork } from '../art';

export type MuseImage = {
  id: string;
  title: string;
  image: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
};

export type MuseStyle = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  star: { x: number; y: number; size: number };
  images: MuseImage[];
};

const negativePrompt =
  'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const styles: MuseStyle[] = [
  {
    id: 'forest-muse',
    name: '森林系美女',
    subtitle: 'FOREST MUSE',
    description:
      '潮湿苔藓、树影、晨雾、溪流与自然光构成的清冷森林人像宇宙。第一批以自然、克制、电影感为主。',
    star: { x: 61, y: 45, size: 18 },
    images: [
      {
        id: 'forest-01',
        title: '苔光晨雾',
        image: '/images/forest/forest-01.webp',
        prompt:
          'Portrait of an elegant adult East Asian woman standing in a primeval moss forest at dawn, soft emerald mist, wet leaves, delicate natural makeup, long dark hair moved by a light breeze, dark green linen dress, cinematic volumetric sun rays through ancient trees, shallow depth of field, realistic skin texture, subtle film grain, editorial fashion photography, 85mm lens, f/1.8, ultra detailed, natural color grading, vertical composition, 4K',
        negativePrompt,
        tags: ['晨雾', '苔藓', '自然光', '电影感']
      },
      {
        id: 'forest-02',
        title: '蕨雨',
        image: '/images/forest/forest-02.webp',
        prompt:
          'Adult East Asian woman among giant fern leaves after a summer rain, translucent raindrops, soft overcast forest light, calm expression, wet black hair, muted olive dress, atmospheric green background, realistic pores and hair strands, luxury editorial portrait, cinematic composition, 85mm portrait lens, high dynamic range, ultra detailed, 4K',
        negativePrompt,
        tags: ['雨林', '蕨叶', '湿润', '编辑人像']
      },
      {
        id: 'forest-03',
        title: '杉林斜阳',
        image: '/images/forest/forest-03.webp',
        prompt:
          'Graceful adult East Asian woman in a cedar forest during late afternoon, warm diagonal sunlight cutting through cool green shadows, loose natural hair, elegant forest-green dress, serene cinematic portrait, realistic skin, subtle dust particles in light beams, fashion editorial photography, 50mm lens, filmic contrast, intricate details, 4K',
        negativePrompt,
        tags: ['杉林', '斜阳', '暖冷对比', '胶片']
      },
      {
        id: 'forest-04',
        title: '翡翠溪谷',
        image: '/images/forest/forest-04.webp',
        prompt:
          'Adult East Asian woman beside a clear emerald stream deep in a forest valley, smooth dark stones, reflected green light on skin, flowing dark green dress, quiet contemplative mood, cinematic natural light, photorealistic portrait, fine hair detail, realistic hands, 85mm lens, high-end magazine photography, ultra sharp subject, soft background, 4K',
        negativePrompt,
        tags: ['溪流', '翡翠绿', '安静', '写实']
      },
      {
        id: 'forest-05',
        title: '野花林隙',
        image: forestArtwork(4),
        prompt:
          'Beautiful adult East Asian woman in a quiet woodland glade filled with tiny wildflowers, soft golden morning light, gentle breeze, natural expression, cream and moss green dress, dreamy but photorealistic editorial portrait, realistic skin texture, balanced composition, 85mm lens, soft bokeh, premium color grading, ultra detailed 4K',
        negativePrompt,
        tags: ['野花', '林隙', '柔光', '清新']
      },
      {
        id: 'forest-06',
        title: '雾松',
        image: forestArtwork(5),
        prompt:
          'Adult East Asian woman in a highland pine forest wrapped in silver mist, minimalist dark green coat dress, soft diffused light, quiet eyes, cool cinematic palette, photorealistic fashion portrait, subtle moisture on hair, layered fog depth, 85mm lens, fine skin texture, elegant composition, 4K',
        negativePrompt,
        tags: ['松林', '银雾', '冷调', '极简']
      },
      {
        id: 'forest-07',
        title: '月夜森林',
        image: forestArtwork(6),
        prompt:
          'Adult East Asian woman in a moonlit forest, blue-black trees, soft moon rim light outlining long dark hair, deep teal velvet dress, faint fireflies, mysterious calm expression, cinematic night portrait, realistic skin and fabric, controlled highlights, 85mm lens, high detail, premium fantasy realism, 4K',
        negativePrompt,
        tags: ['月夜', '萤火', '蓝绿调', '神秘']
      },
      {
        id: 'forest-08',
        title: '金叶暮光',
        image: forestArtwork(7),
        prompt:
          'Elegant adult East Asian woman walking through a forest at golden hour in early autumn, green and amber leaves, warm backlight, natural long hair, understated olive dress, cinematic fashion photography, realistic skin, soft lens bloom, layered woodland depth, 50mm lens, editorial composition, ultra detailed, 4K',
        negativePrompt,
        tags: ['秋林', '金叶', '暮光', '时尚']
      }
    ]
  }
];
