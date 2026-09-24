import type { MusePlanet } from '../types';

const negativePrompt = 'underage, teenager, childlike face, lowres, blurry, jpeg artifacts, overprocessed skin, plastic skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const snowMuse: MusePlanet = {
  id: 'snow-muse',
  galaxyId: 'nature',
  name: '雪原系美女',
  subtitle: 'SNOW MUSE',
  description: '雪山木屋、冰湖、松林、飘雪与冬日金色光线构成的高级冬季人像世界，以象牙白、雪蓝和酒红为主。',
  code: 'SNOW',
  sequence: 2,
  star: { x: 72, y: 28, size: 15 },
  images: [
    {
      id: 'snow-01', title: '雪山邀约', image: '/images/nature/snow-muse/snow-muse-001.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman on a snowy alpine chalet terrace at golden hour, long dark hair dusted with snow, ivory plush winter layers and a vivid red scarf, reaching a hand toward the camera, warm mountain sunset, premium photorealistic winter fashion editorial',
      negativePrompt, tags: ['雪山', '木屋', '红围巾', '牵手视角', '金色夕照'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['ivory-knitwear', 'plush-winter-coat'], colors: ['ivory', 'red'], accessories: ['red-scarf'] },
        environment: { scene: 'alpine-chalet-terrace', season: 'winter', weather: 'snow', time: 'golden-hour' },
        pose: { action: 'reaching-toward-camera', expression: 'warm-inviting' },
        photography: { composition: 'close-three-quarter', lens: '50mm', lighting: ['golden-backlight', 'snow-bounce'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['romantic', 'warm'], palette: ['ivory', 'red', 'snow-blue', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-02', title: '雪湖暮光', image: '/images/nature/snow-muse/snow-muse-002.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman posing on a snowy chalet balcony above a mountain lake at sunset, cream knit mini dress and white winter outerwear with a red scarf, dark hair in a loose updo, warm sunset reflecting on the lake, high-end photorealistic fashion portrait',
      negativePrompt, tags: ['雪湖', '暮光', '针织裙', '红围巾', '阳台'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'loose-updo'] },
        fashion: { outfit: ['cream-knit-mini-dress', 'white-winter-coat'], colors: ['cream', 'white', 'red'], accessories: ['red-scarf'] },
        environment: { scene: 'snowy-lake-chalet-balcony', season: 'winter', weather: 'snow', time: 'sunset' },
        pose: { action: 'seated-leaning-forward', expression: 'soft-direct' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['sunset-rim-light', 'snow-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'fashion-editorial'], mood: ['intimate', 'glowing'], palette: ['cream', 'red', 'blue', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-03', title: '晨曦绒白', image: '/images/nature/snow-muse/snow-muse-003.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman seated on a snow-covered wooden terrace at sunrise, long dark hair, ivory fur-trimmed winter jacket and cream knit layers, tall knit socks, alpine peaks glowing behind her, elegant youthful winter beauty editorial, realistic skin and fabric',
      negativePrompt, tags: ['晨曦', '白色绒衣', '雪山', '针织', '木露台'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['fur-trimmed-ivory-jacket', 'cream-knitwear'], colors: ['ivory', 'cream'] },
        environment: { scene: 'snowy-wooden-terrace', season: 'winter', weather: 'clear-snow', time: 'sunrise' },
        pose: { action: 'seated', expression: 'gentle' },
        photography: { composition: 'close-three-quarter', lens: '70mm', lighting: ['sunrise-backlight', 'soft-snow-reflection'] },
        aesthetics: { styles: ['photorealistic', 'editorial'], mood: ['clean', 'serene'], palette: ['ivory', 'ice-blue', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-04', title: '暮雪红绒', image: '/images/nature/snow-muse/snow-muse-004.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman in a snowy mountain cabin village during sunset, long dark hair with fine snowflakes, cream knit fashion and soft white plush outerwear, long red scarf, alpine lake and warm cabin lights behind, cinematic photorealistic winter portrait',
      negativePrompt, tags: ['暮雪', '红围巾', '雪村', '湖景', '暖光'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['cream-knit-dress', 'white-plush-coat'], colors: ['cream', 'white', 'red'], accessories: ['red-scarf'] },
        environment: { scene: 'snowy-mountain-village', season: 'winter', weather: 'light-snow', time: 'sunset' },
        pose: { action: 'leaning-toward-camera', expression: 'calm' },
        photography: { composition: 'half-body', lens: '85mm', lighting: ['golden-rim-light', 'ambient-snow-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['romantic', 'cozy'], palette: ['cream', 'red', 'deep-blue', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-05', title: '雪岭白绒', image: '/images/nature/snow-muse/snow-muse-005.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman on a bright snowy alpine chalet balcony, white fur hood and plush jacket over cream knit fashion, tall winter socks and boots, fine falling snow, crisp mountain peaks and blue sky, luminous photorealistic luxury winter editorial',
      negativePrompt, tags: ['雪岭', '白绒帽', '长靴', '晴雪', '雪山木屋'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark'] },
        fashion: { outfit: ['white-fur-hood-jacket', 'cream-knit-set', 'winter-boots'], colors: ['white', 'cream'] },
        environment: { scene: 'bright-alpine-chalet-balcony', season: 'winter', weather: 'light-snow', time: 'day' },
        pose: { action: 'leaning-forward', expression: 'soft-confident' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['crisp-daylight', 'snow-bounce'] },
        aesthetics: { styles: ['photorealistic', 'luxury-editorial'], mood: ['bright', 'fresh'], palette: ['white', 'ice-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-06', title: '雪境牵手', image: '/images/nature/snow-muse/snow-muse-006.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman reaching toward the viewer in a snowy mountain cabin setting, white fur-trimmed coat, cream ribbed knit top, plaid short skirt and red patterned scarf, alpine peaks and warm horizon light, immersive photorealistic winter fashion editorial',
      negativePrompt, tags: ['牵手', '红围巾', '格纹短裙', '雪屋', '沉浸视角'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'half-up'] },
        fashion: { outfit: ['white-fur-trimmed-coat', 'cream-ribbed-top', 'plaid-mini-skirt'], colors: ['white', 'cream', 'red', 'plaid'], accessories: ['red-patterned-scarf'] },
        environment: { scene: 'snowy-mountain-cabin', season: 'winter', weather: 'snow', time: 'golden-hour' },
        pose: { action: 'reaching-toward-camera', expression: 'inviting' },
        photography: { composition: 'immersive-three-quarter', lens: '35mm', lighting: ['warm-horizon-light', 'snow-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['playful', 'romantic'], palette: ['white', 'red', 'charcoal', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-07', title: '雪湖红围巾', image: '/images/nature/snow-muse/snow-muse-007.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman seated in fresh snow above a deep blue alpine lake, long dark hair dusted with snow, cream off-shoulder knit layers and vivid red scarf, wooden chalet and snowy pines nearby, crisp daylight, premium photorealistic winter beauty portrait',
      negativePrompt, tags: ['雪湖', '红围巾', '露肩针织', '晴日', '雪地'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['cream-off-shoulder-knitwear', 'white-plush-layer'], colors: ['cream', 'white', 'red'], accessories: ['red-scarf'] },
        environment: { scene: 'snowfield-above-alpine-lake', season: 'winter', weather: 'clear-snow', time: 'day' },
        pose: { action: 'seated-in-snow', expression: 'wistful' },
        photography: { composition: 'close-three-quarter', lens: '70mm', lighting: ['crisp-natural-light', 'snow-reflection'] },
        aesthetics: { styles: ['photorealistic', 'beauty-editorial'], mood: ['cool', 'intimate'], palette: ['cream', 'red', 'lake-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-08', title: '雪屋暖灯', image: '/images/nature/snow-muse/snow-muse-008.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman on a snow-covered wooden chalet terrace at sunset, cream fur hat and scarf with fitted ivory knit dress, extending a hand toward the camera, warm lantern and hot drink beside her, frozen lake and mountains glowing in the distance, cinematic winter lifestyle editorial',
      negativePrompt, tags: ['雪屋', '暖灯', '白色围巾', '湖景', '牵手视角'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark'] },
        fashion: { outfit: ['ivory-fitted-knit-dress', 'cream-plush-outerwear'], colors: ['ivory', 'cream'], accessories: ['fur-hat', 'cream-scarf'] },
        environment: { scene: 'snowy-chalet-terrace-with-lantern', season: 'winter', weather: 'snow', time: 'sunset' },
        pose: { action: 'reaching-toward-camera', expression: 'warm-smile' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['sunset-key', 'lantern-warm-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'lifestyle-editorial'], mood: ['cozy', 'inviting'], palette: ['cream', 'snow-blue', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-09', title: '雪岭柔光', image: '/images/nature/snow-muse/snow-muse-009.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman leaning toward the camera in a bright snowy mountain village, long dark hair, cream knit mini dress, plush white layer and long red scarf, tall white winter boots, falling snow and dramatic alpine peaks, soft backlit photorealistic fashion portrait',
      negativePrompt, tags: ['雪岭', '柔光', '红围巾', '白色针织', '长靴'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['cream-knit-mini-dress', 'white-plush-layer', 'white-winter-boots'], colors: ['cream', 'white', 'red'], accessories: ['red-scarf'] },
        environment: { scene: 'snowy-alpine-village', season: 'winter', weather: 'falling-snow', time: 'day' },
        pose: { action: 'leaning-on-railing', expression: 'soft-dreamy' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['soft-backlight', 'snow-bounce'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['dreamy', 'fresh'], palette: ['white', 'red', 'ice-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-10', title: '湖山初阳', image: '/images/nature/snow-muse/snow-muse-010.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman on a snowy chalet railing overlooking an alpine lake and mountain range at sunrise, long dark hair with snowflakes, white fur-trimmed jacket, cream fitted knit dress and maroon red scarf, warm first light against cool snow, premium cinematic photorealistic winter editorial',
      negativePrompt, tags: ['湖山', '初阳', '酒红围巾', '雪山木屋', '冬季写真'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['white-fur-trimmed-jacket', 'cream-fitted-knit-dress'], colors: ['white', 'cream', 'maroon'], accessories: ['maroon-scarf'] },
        environment: { scene: 'alpine-lake-chalet-railing', season: 'winter', weather: 'light-snow', time: 'sunrise' },
        pose: { action: 'seated-on-railing', expression: 'calm-confident' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['first-light-rim', 'cool-snow-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['elegant', 'serene'], palette: ['cream', 'maroon', 'ice-blue', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
