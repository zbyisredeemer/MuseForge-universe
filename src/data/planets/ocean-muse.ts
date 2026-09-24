import type { MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated';

export const oceanMuse: MusePlanet = {
  id: 'ocean-muse',
  galaxyId: 'nature',
  name: '海洋系美女',
  subtitle: 'OCEAN MUSE',
  description: '海风、礁石、游艇、地中海白墙、蓝绿色海水与金色日光构成的清透海岸人像世界。',
  code: 'OCEAN',
  sequence: 3,
  star: { x: 79, y: 57, size: 15 },
  images: [
    {
      id: 'ocean-01', title: '礁岸海风', image: '/images/nature/ocean-muse/ocean-muse-001.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult woman on sunlit Mediterranean coastal rocks, turquoise sea and distant cliffs, flowing aqua wrap dress, windblown hair, luminous skin, glamorous resort editorial, cinematic natural daylight, photorealistic high-end beauty photography',
      negativePrompt, tags: ['礁石海岸', '海风', '青绿长裙', '地中海'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'mediterranean', hair: ['long', 'brown', 'windblown'] },
        fashion: { outfit: ['aqua-wrap-dress'], colors: ['aqua', 'white'] },
        environment: { scene: 'mediterranean-rocky-coast', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'seated-on-rocks', expression: 'confident-soft' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['natural-light', 'sea-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['luxurious', 'breezy'], palette: ['turquoise', 'aqua', 'warm-skin'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-02', title: '白沙晴湾', image: '/images/nature/ocean-muse/ocean-muse-002.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult blonde woman on a bright white-sand tropical beach, crystal turquoise water and palm-framed coast, flowing white and aqua resort dress, shell jewelry, fresh glamorous expression, premium summer fashion editorial, realistic skin and hair',
      negativePrompt, tags: ['白沙滩', '晴湾', '度假', '水蓝'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'europe', hair: ['long', 'blonde', 'beach-waves'] },
        fashion: { outfit: ['resort-dress'], colors: ['white', 'aqua'] },
        environment: { scene: 'tropical-beach', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'standing', expression: 'relaxed-glamorous' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['bright-natural-light'] },
        aesthetics: { styles: ['photorealistic', 'editorial'], mood: ['fresh', 'vacation'], palette: ['aqua', 'white', 'sand'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-03', title: '港湾金潮', image: '/images/nature/ocean-muse/ocean-muse-003.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult woman at a Mediterranean sailboat marina during golden hour, glossy teal satin wrap dress with high slit, warm rim light on windblown hair, sparkling harbor water, luxury travel-fashion portrait, photorealistic editorial photography',
      negativePrompt, tags: ['港湾', '游艇', '金色夕照', '青绿丝绸'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'europe', hair: ['long', 'blonde', 'windblown'] },
        fashion: { outfit: ['teal-satin-dress'], colors: ['teal'] },
        environment: { scene: 'marina', season: 'summer', weather: 'sunny', time: 'golden-hour' },
        pose: { action: 'leaning-on-boat', expression: 'dreamy' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['golden-hour-light', 'rim-light'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['romantic', 'luxury'], palette: ['teal', 'gold', 'deep-blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-04', title: '浪花礁影', image: '/images/nature/ocean-muse/ocean-muse-004.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult woman seated on rugged seaside rocks with crashing foamy waves, seafoam wrap gown with flowing fabric, strong coastal breeze, sunlit turquoise ocean and cliffs, polished cinematic beauty editorial, photorealistic skin texture',
      negativePrompt, tags: ['浪花', '礁影', '海沫', '飘逸长裙'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'mediterranean', hair: ['long', 'brown', 'windblown'] },
        fashion: { outfit: ['seafoam-wrap-gown'], colors: ['seafoam', 'aqua'] },
        environment: { scene: 'wave-rocks', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'seated', expression: 'calm-confident' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['hard-sunlight', 'water-bounce'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['bold', 'breezy'], palette: ['seafoam', 'white', 'blue'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-05', title: '海崖露台', image: '/images/nature/ocean-muse/ocean-muse-005.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult brunette woman seated on an elegant Mediterranean seaside terrace, fitted turquoise evening dress inspired by ocean waves, white flowers and blue sea behind her, luminous summer skin, sophisticated luxury editorial portrait, high-end photorealism',
      negativePrompt, tags: ['海崖露台', '礼服', '度假庄园', '海蓝'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'mediterranean', hair: ['long', 'dark-brown', 'wavy'] },
        fashion: { outfit: ['ocean-evening-dress'], colors: ['turquoise', 'teal'] },
        environment: { scene: 'seaside-terrace', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'seated-on-terrace', expression: 'elegant' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['natural-light', 'soft-fill'] },
        aesthetics: { styles: ['photorealistic', 'luxury-editorial'], mood: ['refined', 'sensual'], palette: ['turquoise', 'stone', 'white'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-06', title: '潮线漫步', image: '/images/nature/ocean-muse/ocean-muse-006.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult woman walking barefoot through shallow surf, translucent aqua chiffon dress moving in sea breeze, bright glittering water, rocky Mediterranean coast in the distance, youthful glamorous beach editorial, cinematic realistic photography',
      negativePrompt, tags: ['潮线', '漫步', '薄纱', '水光'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'europe', hair: ['long', 'light-brown', 'windblown'] },
        fashion: { outfit: ['chiffon-beach-dress'], colors: ['aqua', 'white'] },
        environment: { scene: 'shoreline', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'walking', expression: 'soft-confident' },
        photography: { composition: 'full-body', lens: '50mm', lighting: ['bright-natural-light', 'water-reflection'] },
        aesthetics: { styles: ['photorealistic', 'cinematic'], mood: ['free', 'fresh'], palette: ['aqua', 'white', 'warm-gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-07', title: '蓝白海巷', image: '/images/nature/ocean-muse/ocean-muse-007.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult brunette woman in a whitewashed Mediterranean alley opening toward the blue sea, blue-and-white draped resort outfit, bougainvillea and coastal boats behind her, warm sunlight, glamorous travel editorial, realistic cinematic portrait',
      negativePrompt, tags: ['蓝白海巷', '花墙', '地中海', '印花裙'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'mediterranean', hair: ['long', 'dark-brown', 'wavy'] },
        fashion: { outfit: ['blue-white-wrap-set'], colors: ['blue', 'white'] },
        environment: { scene: 'mediterranean-alley', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'leaning', expression: 'soft-sultry' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['natural-light'] },
        aesthetics: { styles: ['photorealistic', 'travel-editorial'], mood: ['romantic', 'summer'], palette: ['cobalt-blue', 'white', 'magenta'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-08', title: '游艇晴航', image: '/images/nature/ocean-muse/ocean-muse-008.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult blonde woman relaxing on a luxury yacht deck, open sapphire sea and rocky islands behind her, flowing aqua resort set with wrap skirt, sunlit skin, breezy hair, premium nautical fashion editorial, ultra-realistic photography',
      negativePrompt, tags: ['游艇', '晴航', '甲板', '海岛'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'europe', hair: ['long', 'blonde', 'tousled'] },
        fashion: { outfit: ['nautical-resort-set'], colors: ['aqua', 'white'] },
        environment: { scene: 'yacht-deck', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'reclining', expression: 'relaxed' },
        photography: { composition: 'three-quarter', lens: '50mm', lighting: ['bright-natural-light'] },
        aesthetics: { styles: ['photorealistic', 'luxury-editorial'], mood: ['vacation', 'glamorous'], palette: ['aqua', 'navy', 'white'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-09', title: '珍珠秘湾', image: '/images/nature/ocean-muse/ocean-muse-009.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult blonde woman posed in a crystal-clear rocky cove, aqua halter gown with pearl accents, dramatic cliffs and deep turquoise water, luminous sunlit skin, elegant confident expression, high-end Mediterranean fashion editorial, ultra photorealistic',
      negativePrompt, tags: ['秘湾', '珍珠', '海崖', '水晶海'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'europe', hair: ['long', 'blonde', 'wavy'] },
        fashion: { outfit: ['pearl-halter-gown'], colors: ['aqua', 'pearl-white'] },
        environment: { scene: 'crystal-cove', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'seated-on-rocks', expression: 'confident' },
        photography: { composition: 'three-quarter', lens: '70mm', lighting: ['direct-sunlight', 'water-bounce'] },
        aesthetics: { styles: ['photorealistic', 'cinematic', 'editorial'], mood: ['luxurious', 'serene'], palette: ['turquoise', 'pearl', 'gold'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: 'ocean-10', title: '无边海池', image: '/images/nature/ocean-muse/ocean-muse-010.webp',
      galaxyId: 'nature', planetId: 'ocean-muse',
      prompt: 'Young adult brunette woman seated beside a seaside infinity pool blending into the ocean horizon, glossy sea-green wrap dress, Mediterranean cliffs and resort stonework, bright summer sunlight, luxurious calm editorial beauty portrait, photorealistic',
      negativePrompt, tags: ['无边泳池', '海景', '青绿裙', '度假'],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: 'mediterranean', hair: ['long', 'dark-brown', 'wavy'] },
        fashion: { outfit: ['sea-green-wrap-dress'], colors: ['sea-green', 'aqua'] },
        environment: { scene: 'infinity-pool-ocean', season: 'summer', weather: 'sunny', time: 'day' },
        pose: { action: 'seated', expression: 'serene-glamorous' },
        photography: { composition: 'three-quarter', lens: '85mm', lighting: ['natural-light', 'pool-reflection'] },
        aesthetics: { styles: ['photorealistic', 'luxury-editorial'], mood: ['calm', 'premium'], palette: ['sea-green', 'blue', 'stone'] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
