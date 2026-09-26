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
    },
    {
      id: 'snow-11', title: '雪帽暖光', image: '/images/nature/snow-muse/snow-muse-011.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 23 to 26 in a snowy alpine chalet village at dusk, fluffy white winter hat and ivory faux-fur wrap over a delicate fitted white top, long dark hair, warm cabin lights behind, fine falling snow, premium photorealistic winter beauty editorial, tasteful sensuality',
      negativePrompt, tags: ['雪帽', '木屋', '白色绒衣', '暖光', '飘雪'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['ivory-faux-fur-wrap', 'fitted-white-top'], colors: ['ivory', 'white'], accessories: ['fluffy-white-winter-hat'] },
        environment: { scene: 'snowy-alpine-chalet-village', season: 'winter', weather: 'falling-snow', time: 'dusk' },
        pose: { action: 'three-quarter-standing', expression: 'soft-direct' },
        photography: { composition: 'close-three-quarter', lens: '85mm', lighting: ['warm-cabin-rim', 'cool-snow-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'beauty-editorial'], mood: ['romantic', 'warm'], palette: ['ivory', 'snow-blue', 'amber'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-12', title: '雪坡白绒', image: '/images/nature/snow-muse/snow-muse-012.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 22 to 25 seated in fresh snow beside a warmly lit winter lodge, white quilted jacket and thick ivory scarf, long dark hair dusted with snow, calm youthful expression, blue-hour snowfield and soft bokeh, photorealistic luxury winter portrait',
      negativePrompt, tags: ['雪坡', '白色外套', '围巾', '蓝调时刻', '雪屋'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['white-quilted-jacket'], colors: ['white', 'ivory'], accessories: ['thick-ivory-scarf'] },
        environment: { scene: 'snowfield-by-winter-lodge', season: 'winter', weather: 'light-snow', time: 'blue-hour' },
        pose: { action: 'seated-in-snow', expression: 'calm-soft' },
        photography: { composition: 'close-three-quarter', lens: '70mm', lighting: ['blue-hour-ambient', 'warm-lodge-bokeh'] },
        aesthetics: { styles: ['photorealistic', 'luxury-editorial'], mood: ['soft', 'serene'], palette: ['white', 'ice-blue', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-13', title: '雪岭滑雪', image: '/images/nature/snow-muse/snow-muse-013.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 24 to 27 at a bright alpine ski resort, white technical ski jacket with black details, ski helmet and oversized mirrored goggles lifted above the eyes, dark hair framing the face, crisp mountain peaks and blue sky, premium photorealistic winter sports fashion editorial',
      negativePrompt, tags: ['滑雪', '雪岭', '护目镜', '白色滑雪服', '高山'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'face-framing-strands'] },
        fashion: { outfit: ['white-technical-ski-jacket'], colors: ['white', 'black'], accessories: ['ski-helmet', 'mirrored-goggles'] },
        environment: { scene: 'alpine-ski-resort', season: 'winter', weather: 'clear', time: 'day' },
        pose: { action: 'standing-on-slope', expression: 'confident' },
        photography: { composition: 'close-three-quarter', lens: '70mm', lighting: ['crisp-daylight', 'snow-bounce'] },
        aesthetics: { styles: ['photorealistic', 'sports-fashion', 'editorial'], mood: ['fresh', 'active'], palette: ['white', 'black', 'sky-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-14', title: '雪屋灰蓝', image: '/images/nature/snow-muse/snow-muse-014.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 23 to 26 leaning into soft snow outside a rustic alpine lodge, light gray fitted knit top and thick white scarf, dark hair in a loose high bun, bright winter sun and snowy wooden buildings behind, realistic skin and knit texture, cinematic photorealistic winter fashion portrait',
      negativePrompt, tags: ['雪屋', '灰蓝针织', '白围巾', '高发髻', '晴雪'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'loose-high-bun'] },
        fashion: { outfit: ['light-gray-fitted-knit-top'], colors: ['light-gray', 'white'], accessories: ['thick-white-scarf'] },
        environment: { scene: 'rustic-alpine-lodge-snowbank', season: 'winter', weather: 'clear-snow', time: 'day' },
        pose: { action: 'leaning-on-snowbank', expression: 'soft-confident' },
        photography: { composition: 'close-three-quarter', lens: '85mm', lighting: ['bright-winter-sun', 'snow-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'fashion-editorial'], mood: ['clean', 'inviting'], palette: ['white', 'gray-blue', 'wood-brown'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-15', title: '雪泉晨光', image: '/images/nature/snow-muse/snow-muse-015.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 25 to 28 in a private outdoor hot spring surrounded by snow-covered alpine cabins and pines, elegant white one-piece swimsuit, dark hair in a loose high bun, warm water steam and bright winter daylight, luxury spa editorial photography, tasteful sensuality, no nudity',
      negativePrompt, tags: ['雪泉', '温泉', '白色泳装', '雪屋', '冬日暖水'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'loose-high-bun'] },
        fashion: { outfit: ['white-one-piece-swimsuit'], colors: ['white'] },
        environment: { scene: 'private-outdoor-hot-spring', season: 'winter', weather: 'clear-snow', time: 'day' },
        pose: { action: 'shoulder-turn-in-water', expression: 'calm-confident' },
        photography: { composition: 'close-three-quarter', lens: '85mm', lighting: ['winter-daylight', 'water-reflection', 'steam-diffusion'] },
        aesthetics: { styles: ['photorealistic', 'luxury-spa', 'editorial'], mood: ['warm', 'serene'], palette: ['white', 'ice-blue', 'warm-wood'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-16', title: '雪林白绒', image: '/images/nature/snow-muse/snow-muse-016.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 22 to 25 in a dense snow-covered pine forest, soft white faux-fur wrap over a fitted light winter top, long dark hair, fine snowflakes, luminous cool daylight and natural skin texture, premium photorealistic winter beauty editorial',
      negativePrompt, tags: ['雪林', '白色绒衣', '长发', '冷杉', '飘雪'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'loose'] },
        fashion: { outfit: ['white-faux-fur-wrap', 'fitted-light-top'], colors: ['white', 'ivory'] },
        environment: { scene: 'snow-covered-pine-forest', season: 'winter', weather: 'falling-snow', time: 'day' },
        pose: { action: 'standing-in-forest', expression: 'gentle-direct' },
        photography: { composition: 'close-three-quarter', lens: '85mm', lighting: ['soft-overcast', 'snow-bounce'] },
        aesthetics: { styles: ['photorealistic', 'beauty-editorial'], mood: ['quiet', 'romantic'], palette: ['white', 'deep-green', 'ice-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-17', title: '雪镇格围巾', image: '/images/nature/snow-muse/snow-muse-017.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 24 to 27 on a snowy mountain-town street at blue hour, dark winter coat, thick red-green plaid scarf and cream knit gloves, long dark hair dusted with snow, warm shop lights behind, cinematic photorealistic winter street portrait',
      negativePrompt, tags: ['雪镇', '格纹围巾', '黑色外套', '暖灯', '街头'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['dark-winter-coat'], colors: ['black', 'cream', 'red', 'green'], accessories: ['red-green-plaid-scarf', 'cream-knit-gloves'] },
        environment: { scene: 'snowy-mountain-town-street', season: 'winter', weather: 'falling-snow', time: 'blue-hour' },
        pose: { action: 'standing-close-to-camera', expression: 'direct-soft' },
        photography: { composition: 'close-up', lens: '85mm', lighting: ['warm-shop-bokeh', 'cool-evening-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'street-editorial'], mood: ['cozy', 'intimate'], palette: ['black', 'red', 'green', 'snow-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-18', title: '雪桥蓝影', image: '/images/nature/snow-muse/snow-muse-018.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 23 to 26 standing on a wooden bridge in a snow-covered alpine village at evening, powder-blue winter coat and thick white scarf, long dark hair with snowflakes, warm cabin lights and deep blue sky, cinematic photorealistic winter lifestyle editorial',
      negativePrompt, tags: ['雪桥', '蓝色外套', '白围巾', '雪村', '蓝调夜色'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['long', 'dark', 'snow-dusted'] },
        fashion: { outfit: ['powder-blue-winter-coat'], colors: ['powder-blue', 'white'], accessories: ['thick-white-scarf'] },
        environment: { scene: 'wooden-bridge-snow-village', season: 'winter', weather: 'light-snow', time: 'evening' },
        pose: { action: 'standing-head-tilt', expression: 'dreamy' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['warm-village-bokeh', 'blue-hour-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'lifestyle-editorial'], mood: ['dreamy', 'romantic'], palette: ['powder-blue', 'white', 'amber'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-19', title: '红织雪夜', image: '/images/nature/snow-muse/snow-muse-019.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 25 to 28 in a snowy village at night, fitted red-and-cream fair-isle winter knit with reindeer pattern, cream knit gloves, dark hair with falling snow, warm holiday lights in the background, premium cinematic photorealistic winter portrait',
      negativePrompt, tags: ['红色针织', '雪夜', '驯鹿纹', '手套', '暖灯'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'side-part', 'snow-dusted'] },
        fashion: { outfit: ['red-cream-fair-isle-knit'], colors: ['red', 'cream'], accessories: ['cream-knit-gloves'] },
        environment: { scene: 'snowy-village-night', season: 'winter', weather: 'falling-snow', time: 'night' },
        pose: { action: 'hand-near-face', expression: 'confident-soft' },
        photography: { composition: 'close-up', lens: '85mm', lighting: ['warm-holiday-bokeh', 'cool-snow-fill'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'winter-editorial'], mood: ['festive', 'cozy'], palette: ['red', 'cream', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'snow-20', title: '雪原白羽', image: '/images/nature/snow-muse/snow-muse-020.webp',
      galaxyId: 'nature', planetId: 'snow-muse',
      prompt: 'Clearly adult young East Asian woman age 22 to 25 seated in fresh alpine snow near a winter cabin, soft white faux-fur wrap over a fitted white winter top, dark hair in a loose updo, bright snowy pines and cabin behind, luminous natural skin, premium photorealistic winter beauty editorial, tasteful sensuality',
      negativePrompt, tags: ['雪原', '白绒', '盘发', '雪屋', '晴雪'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'east-asia', hair: ['dark', 'loose-updo'] },
        fashion: { outfit: ['white-faux-fur-wrap', 'fitted-white-winter-top'], colors: ['white', 'ivory'] },
        environment: { scene: 'fresh-snow-near-alpine-cabin', season: 'winter', weather: 'clear-snow', time: 'day' },
        pose: { action: 'seated-in-snow', expression: 'soft-direct' },
        photography: { composition: 'close-three-quarter', lens: '85mm', lighting: ['bright-winter-daylight', 'snow-reflection'] },
        aesthetics: { styles: ['photorealistic', 'beauty-editorial'], mood: ['bright', 'romantic'], palette: ['white', 'ice-blue', 'warm-wood'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
