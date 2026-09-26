import type { MusePlanet } from '../types';

const negativePrompt = 'underage, teenager, childlike face, lowres, blurry, jpeg artifacts, overprocessed skin, plastic skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const tokyoNight: MusePlanet = {
  id: 'tokyo-night',
  galaxyId: 'urban',
  name: '东京夜景美女',
  subtitle: 'TOKYO NIGHT',
  description: '霓虹街巷、雨后反光、夜景露台、湾岸灯火与都市蓝调组成的现代东京夜间人像。',
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
      id: 'tokyo-02', title: '东京塔绯夜', image: '/images/urban/tokyo-night/tokyo-night-002.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 24 to 27 on an elevated Tokyo night terrace with Tokyo Tower glowing behind her, deep burgundy satin backless evening dress, long dark wavy hair, elegant over-shoulder pose, realistic skin texture, cinematic city bokeh, premium fashion editorial, tasteful sensuality',
      negativePrompt, tags: ['东京塔', '露台', '酒红长裙', '夜景', '高级写真'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark', 'wavy'] },
        fashion: { outfit: ['burgundy-satin-backless-dress'], colors: ['burgundy'] },
        environment: { scene: 'city-rooftop-terrace', location: 'tokyo', season: 'autumn', weather: 'clear', time: 'night' },
        pose: { action: 'looking-over-shoulder', expression: 'confident-soft' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['city-bokeh', 'soft-flash', 'tower-glow'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['elegant', 'romantic'], palette: ['burgundy', 'black', 'amber'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-03', title: '霓虹机车', image: '/images/urban/tokyo-night/tokyo-night-003.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 23 to 26 beside a black motorcycle in a dense Tokyo neon alley, glossy black fitted top and cropped leather jacket, dark softly waved hair, direct confident gaze, wet pavement reflections, cinematic street fashion, realistic skin and leather texture, premium night editorial',
      negativePrompt, tags: ['霓虹', '机车', '黑色皮衣', '夜巷', '街头时尚'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['medium-long', 'dark', 'soft-waves'] },
        fashion: { outfit: ['fitted-black-top', 'cropped-leather-jacket'], colors: ['black'] },
        environment: { scene: 'neon-motorcycle-alley', location: 'tokyo', season: 'summer', weather: 'clear', time: 'night' },
        pose: { action: 'leaning-beside-motorcycle', expression: 'direct-confident' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['neon-key', 'street-sign-rim', 'wet-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street-fashion'], mood: ['bold', 'electric'], palette: ['black', 'red', 'magenta'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-04', title: '夜樱和风', image: '/images/urban/tokyo-night/tokyo-night-004.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 22 to 25 in a floral pink yukata beneath illuminated cherry blossoms near a Tokyo shrine at night, traditional paper parasol, hair in a soft updo, refined youthful expression, lantern glow, cinematic shallow depth of field, photorealistic premium portrait',
      negativePrompt, tags: ['夜樱', '浴衣', '神社', '和伞', '灯笼'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['dark', 'soft-updo'] },
        fashion: { outfit: ['floral-pink-yukata', 'obi'], colors: ['pink', 'cream'] },
        environment: { scene: 'night-shrine-cherry-blossom', location: 'tokyo', season: 'spring', weather: 'clear', time: 'night' },
        pose: { action: 'holding-parasol', expression: 'serene' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['lantern-light', 'soft-fill', 'night-bokeh'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'japanese-classic'], mood: ['romantic', 'gentle'], palette: ['pink', 'cream', 'red'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-05', title: '都会酒廊', image: '/images/urban/tokyo-night/tokyo-night-005.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 25 to 28 seated in a sophisticated Tokyo rooftop lounge at night, fitted white blouse and high-waisted black skirt with sheer tights, holding a wine glass, polished dark shoulder-length hair, poised expression, skyline bokeh, realistic luxury editorial photography',
      negativePrompt, tags: ['酒廊', '白衬衫', '黑裙', '夜景', '都市'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['shoulder-length', 'dark'] },
        fashion: { outfit: ['fitted-white-blouse', 'high-waisted-black-skirt', 'sheer-tights'], colors: ['white', 'black'] },
        environment: { scene: 'rooftop-lounge', location: 'tokyo', season: 'winter', weather: 'clear', time: 'night' },
        pose: { action: 'seated-holding-glass', expression: 'poised' },
        photography: { composition: 'seated-three-quarter', lens: '85mm', lighting: ['warm-interior-key', 'city-bokeh'] },
        aesthetics: { styles: ['photorealistic', 'luxury', 'editorial'], mood: ['sophisticated', 'confident'], palette: ['black', 'white', 'amber'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-06', title: '雨街学院风', image: '/images/urban/tokyo-night/tokyo-night-006.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 21 to 24 on a rain-slick Tokyo shopping street at night, contemporary adult preppy fashion with white shirt, plaid mini skirt, dark layered jacket and shoulder bag, long dark hair, soft confident expression, vivid storefront bokeh, realistic cinematic street portrait',
      negativePrompt, tags: ['雨街', '学院风', '格裙', '霓虹', '街拍'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark', 'straight'] },
        fashion: { outfit: ['adult-preppy-white-shirt', 'plaid-mini-skirt', 'dark-layered-jacket'], colors: ['white', 'charcoal', 'plaid-red'] },
        environment: { scene: 'rainy-shopping-street', location: 'tokyo', season: 'spring', weather: 'rain', time: 'night' },
        pose: { action: 'street-standing', expression: 'soft-confident' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['storefront-neon', 'wet-road-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street-fashion'], mood: ['fresh', 'urban'], palette: ['black', 'white', 'red-neon'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-07', title: '银光天台', image: '/images/urban/tokyo-night/tokyo-night-007.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 24 to 27 on a Tokyo rooftop at night in a shimmering silver fitted evening dress, long dark hair moving in the breeze, city skyline and tower lights behind, luminous realistic skin, confident fashion pose, cinematic high-end nightlife editorial',
      negativePrompt, tags: ['银色礼服', '天台', '城市灯光', '夜景', '时尚'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark', 'windblown'] },
        fashion: { outfit: ['silver-sequin-evening-dress'], colors: ['silver'] },
        environment: { scene: 'night-rooftop-skyline', location: 'tokyo', season: 'summer', weather: 'breezy', time: 'night' },
        pose: { action: 'leaning-on-rooftop-edge', expression: 'calm-confident' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['soft-flash', 'city-light', 'rim-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'nightlife-editorial'], mood: ['glamorous', 'luminous'], palette: ['silver', 'black', 'amber'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-08', title: '涂鸦紫发', image: '/images/urban/tokyo-night/tokyo-night-008.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 22 to 25 in a neon graffiti alley at night, dusty violet hair with bangs, oversized black leather jacket over edgy graphic streetwear, seated confident pose, punk-inspired styling, realistic skin texture, colorful city neon, cinematic urban fashion portrait',
      negativePrompt, tags: ['紫发', '涂鸦', '皮衣', '朋克', '霓虹'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['medium', 'violet', 'bangs'] },
        fashion: { outfit: ['oversized-black-leather-jacket', 'graphic-streetwear'], colors: ['black', 'violet'] },
        environment: { scene: 'graffiti-neon-alley', location: 'tokyo', season: 'autumn', weather: 'clear', time: 'night' },
        pose: { action: 'seated', expression: 'cool-direct' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['magenta-neon', 'blue-fill', 'sign-bokeh'] },
        aesthetics: { styles: ['photorealistic', 'punk', 'street-editorial'], mood: ['edgy', 'cool'], palette: ['black', 'violet', 'magenta'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-09', title: '湾岸白夜', image: '/images/urban/tokyo-night/tokyo-night-009.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 23 to 26 on a Tokyo Bay terrace with an illuminated suspension bridge behind her, fitted ivory backless mini dress, long dark hair, elegant over-shoulder pose, water reflections, cinematic night skyline, realistic premium fashion photography',
      negativePrompt, tags: ['东京湾', '大桥', '白裙', '露台', '夜景'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark', 'soft-waves'] },
        fashion: { outfit: ['ivory-backless-mini-dress'], colors: ['ivory'] },
        environment: { scene: 'bay-bridge-terrace', location: 'tokyo', season: 'summer', weather: 'clear', time: 'night' },
        pose: { action: 'looking-over-shoulder', expression: 'elegant' },
        photography: { composition: 'three-quarter-back', lens: '85mm', lighting: ['bridge-bokeh', 'soft-rim', 'water-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['romantic', 'luxury'], palette: ['ivory', 'navy', 'electric-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-10', title: '夜窗黑蕾丝', image: '/images/urban/tokyo-night/tokyo-night-010.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 25 to 28 in a luxury Tokyo hotel room beside a large night window, elegant black lace evening bodysuit layered with a loose dark jacket, softly styled dark hair, warm lamp light and distant city bokeh, tasteful sensuality, photorealistic luxury editorial',
      negativePrompt, tags: ['酒店夜窗', '黑蕾丝', '暖光', '都市', '高级性感'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['medium-long', 'dark', 'soft-updo'] },
        fashion: { outfit: ['black-lace-evening-bodysuit', 'loose-dark-jacket'], colors: ['black'] },
        environment: { scene: 'luxury-hotel-night-window', location: 'tokyo', season: 'winter', weather: 'clear', time: 'night' },
        pose: { action: 'seated', expression: 'soft-confident' },
        photography: { composition: 'seated-three-quarter', lens: '85mm', lighting: ['warm-lamp-key', 'city-window-bokeh'] },
        aesthetics: { styles: ['photorealistic', 'luxury', 'editorial'], mood: ['intimate', 'elegant'], palette: ['black', 'warm-amber', 'night-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'tokyo-11', title: '霓虹耳机', image: '/images/urban/tokyo-night/tokyo-night-011.webp',
      galaxyId: 'urban', planetId: 'tokyo-night',
      prompt: 'Clearly adult Japanese woman age 22 to 25 on a neon-lit Tokyo balcony at night, dark red fitted crop top, black leather pants and oversized black jacket, studio headphones around her neck, long dark hair, confident direct gaze, vibrant city bokeh, photorealistic cinematic street-fashion editorial',
      negativePrompt, tags: ['耳机', '红色短上衣', '皮裤', '霓虹', '夜生活'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', country: 'japan', hair: ['long', 'dark', 'straight'] },
        fashion: { outfit: ['dark-red-fitted-crop-top', 'black-leather-pants', 'oversized-black-jacket'], colors: ['dark-red', 'black'] },
        environment: { scene: 'neon-city-balcony', location: 'tokyo', season: 'autumn', weather: 'clear', time: 'night' },
        pose: { action: 'standing-at-railing', expression: 'direct-confident' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['neon-key', 'city-bokeh', 'soft-flash'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street-fashion'], mood: ['cool', 'nightlife'], palette: ['red', 'black', 'magenta'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
