import type { MusePlanet } from '../types';

const negativePrompt = "lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, oversaturated";

export const editorialPortrait: MusePlanet = {
  id: 'editorial-portrait',
  galaxyId: 'photography',
  name: '高级写真',
  subtitle: 'EDITORIAL PORTRAIT',
  description: '以明确成年、年轻、高颜值和高级性感为核心，允许居家、城市、未来、书馆、度假、雪景、花田与运动等跨场景变化，由统一的商业写真摄影语言连接。',
  code: 'EDITORIAL',
  sequence: 1,
  star: { x: 47, y: 72, size: 16 },
  images: [
    {
      id: "editorial-01",
      title: "暖灯书桌",
      image: "/images/photography/editorial-portrait/editorial-portrait-001.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman seated at a warm home desk at night, soft cream knit top, long dark hair, laptop and books in foreground, intimate amber lamp light, natural skin texture, relaxed direct gaze, premium lifestyle editorial portrait, cinematic shallow depth of field",
      negativePrompt,
      tags: ["暖灯","书桌","居家写真","针织"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","dark","soft-layers"] },
        fashion: { outfit: ["soft-knit-top"], colors: ["cream"] },
        environment: { scene: "home-desk", season: "autumn", weather: "clear", time: "night" },
        pose: { action: "seated-at-desk", expression: "soft-direct" },
        photography: { composition: "half-body", lens: "50mm", lighting: ["warm-lamp-light","ambient-room-light"] },
        aesthetics: { styles: ["photorealistic","editorial","cinematic"], mood: ["warm","intimate"], palette: ["cream","amber","dark-brown"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-02",
      title: "樱色春日",
      image: "/images/photography/editorial-portrait/editorial-portrait-002.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman in a pale pink fitted slip dress beneath blooming cherry blossoms, long rose-pink hair with floral details, luminous spring daylight, tasteful shoulder and back line, premium beauty editorial portrait, realistic skin and hair texture, romantic shallow depth of field",
      negativePrompt,
      tags: ["樱花","粉发","吊带裙","春日"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","rose-pink","soft-waves"] },
        fashion: { outfit: ["fitted-slip-dress"], colors: ["blush-pink"] },
        environment: { scene: "cherry-blossom-garden", season: "spring", weather: "sunny", time: "day" },
        pose: { action: "turning-back", expression: "soft-confident" },
        photography: { composition: "three-quarter", lens: "85mm", lighting: ["soft-daylight","blossom-reflected-light"] },
        aesthetics: { styles: ["photorealistic","editorial","romantic"], mood: ["romantic","fresh"], palette: ["blush-pink","white","soft-green"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-03",
      title: "天台夜色",
      image: "/images/photography/editorial-portrait/editorial-portrait-003.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman on a city rooftop at night, long dark hair, fitted black fashion look with tasteful open shoulders, skyline lights behind her, cool blue ambient light and subtle warm city reflections, premium urban editorial portrait, realistic skin texture, cinematic night photography",
      negativePrompt,
      tags: ["天台","夜景","黑色穿搭","城市"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","dark","wet-look"] },
        fashion: { outfit: ["black-evening-top","light-jacket"], colors: ["black"] },
        environment: { scene: "city-rooftop", season: "summer", weather: "clear", time: "night" },
        pose: { action: "looking-back", expression: "confident-calm" },
        photography: { composition: "three-quarter", lens: "85mm", lighting: ["city-light","cool-ambient-light"] },
        aesthetics: { styles: ["photorealistic","editorial","cinematic"], mood: ["cool","confident"], palette: ["black","deep-blue","city-gold"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-04",
      title: "蓝光机房",
      image: "/images/photography/editorial-portrait/editorial-portrait-004.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young woman in a futuristic creative studio, long silver hair, metallic headphones and white fitted top under a light technical jacket, cool blue monitors and magenta accents, glossy modern editorial portrait, realistic skin texture, premium cyber fashion photography",
      negativePrompt,
      tags: ["未来感","蓝光","银发","耳机"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","silver","straight"] },
        fashion: { outfit: ["fitted-top","technical-jacket"], colors: ["white","silver"] },
        environment: { scene: "futuristic-creative-studio", season: "winter", weather: "clear", time: "night" },
        pose: { action: "seated-turning", expression: "cool-direct" },
        photography: { composition: "half-body", lens: "70mm", lighting: ["blue-screen-light","magenta-accent-light"] },
        aesthetics: { styles: ["photorealistic","editorial","cinematic"], mood: ["cool","futuristic"], palette: ["ice-blue","silver","violet"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-05",
      title: "深夜书馆",
      image: "/images/photography/editorial-portrait/editorial-portrait-005.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman reading in a warmly lit library, dark hair in a loose bun, round glasses, oversized beige knit sweater slipping softly at the shoulder, open books surrounding her, warm tungsten glow, intimate premium lifestyle editorial portrait, realistic skin and fabric texture",
      negativePrompt,
      tags: ["书馆","眼镜","针织","暖光"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["dark","loose-bun"] },
        fashion: { outfit: ["oversized-knit-sweater"], colors: ["beige"] },
        environment: { scene: "warm-library", season: "autumn", weather: "clear", time: "night" },
        pose: { action: "reading", expression: "gentle-focused" },
        photography: { composition: "half-body", lens: "50mm", lighting: ["warm-tungsten-light","book-reflected-fill"] },
        aesthetics: { styles: ["photorealistic","editorial","lifestyle"], mood: ["warm","quiet"], palette: ["beige","amber","dark-brown"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-06",
      title: "暮色泳池",
      image: "/images/photography/editorial-portrait/editorial-portrait-006.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman at an outdoor pool during sunset, wet dark hair, elegant black swimwear, shoulders above the water, warm orange horizon and soft reflections on wet skin, tasteful sensual resort editorial portrait, cinematic natural light, realistic water and skin texture",
      negativePrompt,
      tags: ["泳池","落日","湿发","度假"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["dark","wet"] },
        fashion: { outfit: ["elegant-swimwear"], colors: ["black"] },
        environment: { scene: "sunset-pool", season: "summer", weather: "clear", time: "sunset" },
        pose: { action: "resting-in-water", expression: "calm-direct" },
        photography: { composition: "half-body", lens: "85mm", lighting: ["sunset-backlight","water-reflected-light"] },
        aesthetics: { styles: ["photorealistic","editorial","cinematic"], mood: ["warm","sensual"], palette: ["black","warm-gold","deep-blue"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-07",
      title: "银甲幻境",
      image: "/images/photography/editorial-portrait/editorial-portrait-007.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young woman in a polished silver fantasy armor editorial look, long silver-white hair, ornate dark metallic details, stone architecture background, controlled cool daylight, glamorous high-fashion fantasy portrait with realistic skin texture and cinematic depth",
      negativePrompt,
      tags: ["银甲","银发","幻想时尚","冷调"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","silver-white","wavy"] },
        fashion: { outfit: ["fantasy-armor-fashion"], colors: ["silver","black"] },
        environment: { scene: "fantasy-stone-arcade", season: "autumn", weather: "cloudy", time: "day" },
        pose: { action: "standing", expression: "composed" },
        photography: { composition: "three-quarter", lens: "85mm", lighting: ["soft-cool-daylight","metal-reflection"] },
        aesthetics: { styles: ["photorealistic","editorial","fantasy-realism"], mood: ["elegant","mysterious"], palette: ["silver","black","stone-gray"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-08",
      title: "雪夜红围巾",
      image: "/images/photography/editorial-portrait/editorial-portrait-008.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman standing outdoors in falling snow at night, dark winter coat and oversized textured red scarf, dark hair catching snowflakes, warm village window lights behind her, natural smile, realistic skin, premium cinematic winter portrait with warm and cool contrast",
      negativePrompt,
      tags: ["雪夜","红围巾","灯火","冬日"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["dark","medium","soft-waves"] },
        fashion: { outfit: ["winter-coat"], colors: ["black"] },
        environment: { scene: "snowy-village", season: "winter", weather: "snow", time: "night" },
        pose: { action: "standing-in-snow", expression: "soft-smile" },
        photography: { composition: "half-body", lens: "85mm", lighting: ["warm-window-light","cool-snow-ambient"] },
        aesthetics: { styles: ["photorealistic","editorial","cinematic"], mood: ["warm","romantic"], palette: ["muted-red","snow-white","deep-blue"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-09",
      title: "雏菊花田",
      image: "/images/photography/editorial-portrait/editorial-portrait-009.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman in a sunlit daisy meadow, long dark hair, woven straw hat with small flowers, fitted light floral summer dress with tasteful open shoulders, bright natural daylight, soft breeze, premium romantic outdoor fashion editorial, realistic skin texture and floral detail",
      negativePrompt,
      tags: ["雏菊","草帽","花田","夏日"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["long","dark","soft-waves"] },
        fashion: { outfit: ["floral-summer-dress"], colors: ["ivory","soft-floral"] },
        environment: { scene: "daisy-meadow", season: "summer", weather: "sunny", time: "day" },
        pose: { action: "turning-in-field", expression: "soft-confident" },
        photography: { composition: "three-quarter", lens: "70mm", lighting: ["bright-natural-light","soft-rim-light"] },
        aesthetics: { styles: ["photorealistic","editorial","romantic"], mood: ["fresh","romantic"], palette: ["ivory","green","soft-yellow"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    },
    {
      id: "editorial-10",
      title: "训练微光",
      image: "/images/photography/editorial-portrait/editorial-portrait-010.webp",
      galaxyId: 'photography',
      planetId: 'editorial-portrait',
      prompt: "Clearly adult young East Asian woman in a modern gym after training, dark high ponytail with loose wet strands, fitted black athletic top, natural perspiration and realistic skin texture, confident athletic pose, controlled overhead light with warm rim highlights, premium fitness editorial portrait",
      negativePrompt,
      tags: ["健身房","运动","湿发","黑色"],
      dna: {
        subject: { gender: 'female', ageGroup: 'adult', region: "east-asia", hair: ["dark","high-ponytail","wet-strands"] },
        fashion: { outfit: ["athletic-top"], colors: ["black"] },
        environment: { scene: "modern-gym", season: "summer", weather: "clear", time: "day" },
        pose: { action: "leaning-after-training", expression: "focused-direct" },
        photography: { composition: "half-body", lens: "50mm", lighting: ["overhead-gym-light","warm-rim-light"] },
        aesthetics: { styles: ["photorealistic","editorial","fitness"], mood: ["confident","energetic"], palette: ["black","steel-gray","warm-skin"] },
        generation: { aspectRatio: '9:16', resolution: '941x1672', format: 'webp', assetType: 'generated' }
      }
    }
  ]
};
