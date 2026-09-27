import type { OceanGenerationSpec } from './ocean-batch-02';

// Ocean Muse Batch 04 generation queue.
// IMPORTANT: keep this file detached from oceanMuse.images until all 10 real WebP assets exist.
// Final target for each asset: 941x1672 / 9:16 / WebP, independently generated, no collage.
const negativePrompt =
  'underage, teenager, childlike face, mature middle-aged look, elderly, nudity, explicit pose, transparent clothing, same face, cloned face, recurring identity, generic influencer face, plastic skin, waxy skin, lowres, blurry, jpeg artifacts, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, text, logo, watermark, frame, collage, split panel, oversaturated';

export const oceanBatch04: OceanGenerationSpec[] = [
  {
    id: 'ocean-031',
    title: '济州青岸',
    prompt: 'Use case: photorealistic-natural. Create ONE standalone premium coastal fashion editorial photograph for the MuseForge Ocean Muse collection, not a collage. Vertical 9:16. Subject: a clearly adult 23-year-old Korean woman with light warm-beige skin, a slim oval face, softly hooded dark-brown almond eyes, a small straight nose, softly defined lips, and a shoulder-length black layered bob with airy curtain bangs. Wardrobe: a fully opaque sea-glass green fitted square-neck midi dress with short sleeves and a clean waist seam, minimal silver earrings. Setting: Jeju black volcanic rocks beside clear cobalt water, low yellow coastal flowers and bright spring sky. Pose: standing on a dry basalt path with one hand lightly holding the skirt side and the other relaxed, looking directly at the camera with a quiet confident expression. Composition: three-quarter, 70mm lens, eye level, clear-morning-key, cool-sea-fill. High-end commercial fashion photography, realistic skin pores and hair texture, elegant feminine silhouette, tasteful sensuality, anatomically correct hands and body. Fully clothed, no nudity or erotic action. No text, logos, watermarks, borders or grids.',
    negativePrompt,
    tags: ['济州岛', '玄武岩海岸', '海玻璃绿裙', '短发', '春日'],
    identity: {
      ageBand: '22-24',
      face: ['slim-oval', 'hooded-dark-almond', 'small-straight-nose', 'soft-defined-lips'],
      hair: ['shoulder-length-black', 'layered-bob', 'curtain-bangs'],
      distinctiveFeatures: ['light-warm-beige-skin', 'soft-straight-brows'],
      region: 'east-asia'
    },
    fashion: ['sea-glass-green-square-neck-midi-dress', 'minimal-silver-earrings'],
    scene: ['jeju-basalt-coast', 'spring', 'morning'],
    photography: { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['clear-morning-key', 'cool-sea-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-031.webp'
  },
  {
    id: 'ocean-032',
    title: '马赛午潮',
    prompt: 'Use case: photorealistic-natural. ONE vertical 9:16 premium Mediterranean fashion editorial portrait. Subject: a clearly adult 26-year-old French woman with light olive skin, a long heart-shaped face, gray-green deep-set eyes, a refined straight nose, medium full lips and collarbone-length dark-blonde waves. Wardrobe: an opaque ivory sleeveless tailored jumpsuit with a defined waist, wide-leg trousers and a slim navy belt. Setting: a sunlit Marseille stone quay with white fishing boats and saturated blue harbor water. Pose: walking slowly along the quay, shoulders relaxed, one hand brushing the belt, face turned toward camera with a restrained smile. Full-body framing, 50mm lens, eye level, crisp-midday-key, white-stone-bounce. Photorealistic magazine fashion, sophisticated tailoring, real skin texture, natural hair, accurate hands, fully clothed, ordinary fashion pose. No text, logos, watermarks, collage or border.',
    negativePrompt,
    tags: ['马赛', '旧港', '象牙连体裤', '深金发', '午潮'],
    identity: {
      ageBand: '25-27',
      face: ['long-heart', 'deep-set-gray-green', 'refined-straight-nose', 'medium-full-lips'],
      hair: ['collarbone-length', 'dark-blonde', 'loose-waves'],
      distinctiveFeatures: ['light-olive-skin', 'subtle-left-brow-arch'],
      region: 'western-europe'
    },
    fashion: ['ivory-tailored-wide-leg-jumpsuit', 'slim-navy-belt'],
    scene: ['marseille-stone-harbor-quay', 'summer', 'midday'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'eye-level', lighting: ['crisp-midday-key', 'white-stone-bounce'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-032.webp'
  },
  {
    id: 'ocean-033',
    title: '巴拉望翠湾',
    prompt: 'Use case: photorealistic-natural. Create one standalone 9:16 upscale tropical coastal editorial photograph. Subject: a clearly adult 24-year-old Filipina woman with warm golden-beige skin, a soft diamond face, large dark round-almond eyes, a softly rounded nose, full balanced lips and long black hair in a low braided ponytail. Wardrobe: a fully opaque turquoise halter-neck midi dress with a fitted waist and fluid skirt, no transparent panels. Setting: a quiet Palawan limestone lagoon with jade water, dramatic karst cliffs and a narrow wooden boat softly out of focus. Pose: standing on a stable wooden jetty, body angled slightly toward the lagoon, both hands naturally separated, gaze returning to the camera. Three-quarter framing, 50mm lens, eye level, lagoon-soft-key, jade-water-fill. Premium travel-fashion photography, realistic skin and hair, tasteful sensuality, accurate anatomy, fully clothed. No text, logos, watermark, collage or split panel.',
    negativePrompt,
    tags: ['巴拉望', '石灰岩泻湖', '青绿挂脖裙', '编发', '翠湾'],
    identity: {
      ageBand: '23-25',
      face: ['soft-diamond', 'large-round-almond', 'soft-rounded-nose', 'full-balanced-lips'],
      hair: ['long-black', 'low-braided-ponytail'],
      distinctiveFeatures: ['warm-golden-beige-skin', 'delicate-cheekbone-highlight'],
      region: 'southeast-asia'
    },
    fashion: ['turquoise-halter-midi-dress'],
    scene: ['palawan-limestone-lagoon-jetty', 'summer', 'late-morning'],
    photography: { composition: 'three-quarter', lens: '50mm', angle: 'eye-level', lighting: ['lagoon-soft-key', 'jade-water-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-033.webp'
  },
  {
    id: 'ocean-034',
    title: '亚速尔雾蓝',
    prompt: 'Use case: photorealistic-natural. One standalone vertical 9:16 Atlantic coastal fashion editorial. Subject: a clearly adult 27-year-old Portuguese woman with fair neutral skin, a broad oval face, blue-gray slightly downturned eyes, a straight medium-width nose, defined cupid-bow lips, and short dark-brown natural curls. Wardrobe: a fully opaque slate-blue asymmetric knit midi dress with one covered shoulder and a sculpted waist, paired with simple black ankle boots. Setting: an Azores volcanic coast with black basalt tide pools, misty green cliffs and steel-blue Atlantic water. Pose: standing on a dry basalt platform, weight shifted naturally, arms relaxed, serious but calm gaze toward camera. Full-body, 70mm lens, eye level, mist-diffused-key, ocean-gray-fill. Editorial realism, textured fabric, natural skin, accurate hands, elegant fully clothed silhouette. No text, logo, watermark, collage or nudity.',
    negativePrompt,
    tags: ['亚速尔群岛', '黑色潮池', '雾蓝针织裙', '短卷发', '大西洋'],
    identity: {
      ageBand: '26-28',
      face: ['broad-oval', 'blue-gray-downturned', 'straight-medium-nose', 'defined-cupid-bow'],
      hair: ['short-dark-brown', 'natural-curls'],
      distinctiveFeatures: ['fair-neutral-skin', 'subtle-nose-freckles'],
      region: 'southern-europe'
    },
    fashion: ['slate-blue-asymmetric-knit-midi-dress', 'black-ankle-boots'],
    scene: ['azores-basalt-tide-pools', 'spring', 'misty-afternoon'],
    photography: { composition: 'full-body', lens: '70mm', angle: 'eye-level', lighting: ['mist-diffused-key', 'ocean-gray-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-034.webp'
  },
  {
    id: 'ocean-035',
    title: '斐济红树林',
    prompt: 'Use case: photorealistic-natural. Create ONE standalone premium 9:16 island fashion editorial photograph. Subject: a clearly adult 22-year-old Indo-Fijian woman with warm medium-brown skin, a round face, large dark almond eyes, a softly broad nose, plush balanced lips and very long black hair in a high sleek ponytail. Wardrobe: a fully opaque warm-white fitted sleeveless top and a high-waisted deep-teal flowing midi skirt, refined resort styling. Setting: a sunlit Fiji mangrove boardwalk opening toward a luminous shallow lagoon, lush green leaves and clear aqua water. Pose: walking slowly toward camera on the boardwalk, one hand lightly touching the wooden rail, relaxed confident smile. Full-body, 35mm lens, eye level, filtered-tropical-key, water-bounce. High-end resort editorial, realistic skin texture, natural proportions, accurate hands, fully clothed and non-suggestive. No text, logo, watermark, collage or border.',
    negativePrompt,
    tags: ['斐济', '红树林栈道', '白上衣', '深青半裙', '泻湖'],
    identity: {
      ageBand: '21-23',
      face: ['round', 'large-dark-almond', 'soft-broad-nose', 'plush-balanced-lips'],
      hair: ['very-long-black', 'high-sleek-ponytail'],
      distinctiveFeatures: ['warm-medium-brown-skin', 'gentle-smile-lines'],
      region: 'oceania-south-asian-diaspora'
    },
    fashion: ['warm-white-fitted-sleeveless-top', 'deep-teal-high-waist-midi-skirt'],
    scene: ['fiji-mangrove-boardwalk-lagoon', 'summer', 'afternoon'],
    photography: { composition: 'full-body', lens: '35mm', angle: 'eye-level', lighting: ['filtered-tropical-key', 'water-bounce'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-035.webp'
  },
  {
    id: 'ocean-036',
    title: '卡萨布兰卡海风',
    prompt: 'Use case: photorealistic-natural. ONE standalone vertical 9:16 North African coastal fashion editorial photograph. Subject: a clearly adult 25-year-old Moroccan woman with light warm-olive skin, an angular oval face, dark hazel almond eyes, strong softly arched brows, a refined aquiline nose, full lower lip and long dark-brown hair in a polished low ponytail. Wardrobe: a fully opaque sand-colored fitted long-sleeve midi dress with a high bateau neckline, narrow waist and elegant side drape, small gold earrings. Setting: a modern Casablanca ocean promenade with pale stone, Atlantic spray and a distant white city edge. Pose: standing beside the seawall, one hand resting flat on the stone, body angled three-quarter, direct poised gaze. Three-quarter framing, 85mm lens, eye level, warm-late-day-key, Atlantic-blue-fill. Luxury fashion realism, natural skin, detailed fabric, accurate hands, fully clothed, no erotic pose. No text, logos, watermarks or collage.',
    negativePrompt,
    tags: ['卡萨布兰卡', '大西洋海滨', '沙色长裙', '低马尾', '金色夕照'],
    identity: {
      ageBand: '24-26',
      face: ['angular-oval', 'dark-hazel-almond', 'refined-aquiline-nose', 'full-lower-lip'],
      hair: ['long-dark-brown', 'polished-low-ponytail'],
      distinctiveFeatures: ['light-warm-olive-skin', 'strong-softly-arched-brows'],
      region: 'north-africa'
    },
    fashion: ['sand-fitted-long-sleeve-midi-dress', 'small-gold-earrings'],
    scene: ['casablanca-atlantic-promenade', 'summer', 'golden-hour'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['warm-late-day-key', 'atlantic-blue-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-036.webp'
  },
  {
    id: 'ocean-037',
    title: '卑尔根峡湾晨雾',
    prompt: 'Use case: photorealistic-natural. One standalone vertical 9:16 Nordic coastal fashion portrait. Subject: a clearly adult 24-year-old Norwegian woman with fair cool skin, a soft rectangular face, pale blue wide-set eyes, a straight narrow nose, natural medium lips and long ash-brown hair loosely braided over one shoulder. Wardrobe: a fully opaque cream ribbed turtleneck midi dress beneath a cropped muted-blue wool jacket, dark leather boots. Setting: a quiet fjord pier near Bergen with still slate water, misted green mountains and pale morning sky. Pose: standing near the end of the pier, both hands visible and relaxed, turning slightly into the breeze with a subtle smile. Full-body, 50mm lens, eye level, cool-morning-ambient, soft-sky-fill. High-end Nordic editorial photography, real skin texture, natural hair movement, detailed knitwear, fully clothed, accurate anatomy. No text, logo, watermark, collage or border.',
    negativePrompt,
    tags: ['卑尔根', '峡湾', '奶油针织裙', '雾晨', '编发'],
    identity: {
      ageBand: '23-25',
      face: ['soft-rectangular', 'pale-blue-wide-set', 'straight-narrow-nose', 'natural-medium-lips'],
      hair: ['long-ash-brown', 'loose-side-braid'],
      distinctiveFeatures: ['fair-cool-skin', 'very-light-freckles'],
      region: 'northern-europe'
    },
    fashion: ['cream-ribbed-turtleneck-midi-dress', 'cropped-muted-blue-wool-jacket', 'dark-leather-boots'],
    scene: ['bergen-fjord-pier', 'spring', 'misty-morning'],
    photography: { composition: 'full-body', lens: '50mm', angle: 'eye-level', lighting: ['cool-morning-ambient', 'soft-sky-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-037.webp'
  },
  {
    id: 'ocean-038',
    title: '萨尔瓦多彩岸',
    prompt: 'Use case: photorealistic-natural. Create one standalone 9:16 Brazilian coastal fashion editorial. Subject: a clearly adult 26-year-old Afro-Brazilian woman with deep warm-brown skin, a sculpted diamond face, large dark slightly upturned eyes, a medium broad nose, full rounded lips and shoulder-length springy black curls. Wardrobe: an opaque saffron-orange square-neck fitted midi dress with short sleeves and a high side seam slit below mid-thigh, minimal gold hoops. Setting: a colorful Salvador da Bahia seaside district with pastel facades, stone steps and a glimpse of bright blue Atlantic water. Pose: standing on a wide sunlit step, one hand at her side and the other lightly touching the wall, confident soft smile. Three-quarter, 50mm lens, eye level, warm-afternoon-key, pastel-wall-fill. Premium fashion editorial, realistic skin and curls, tasteful sensuality, anatomically correct hands, fully clothed. No text, watermark, logos or collage.',
    negativePrompt,
    tags: ['萨尔瓦多', '巴西海岸', '藏红花橙裙', '自然卷', '彩色街区'],
    identity: {
      ageBand: '25-27',
      face: ['sculpted-diamond', 'dark-upturned-eyes', 'medium-broad-nose', 'full-rounded-lips'],
      hair: ['shoulder-length-black', 'springy-curls'],
      distinctiveFeatures: ['deep-warm-brown-skin', 'high-cheekbones'],
      region: 'latin-america'
    },
    fashion: ['saffron-orange-square-neck-midi-dress', 'minimal-gold-hoops'],
    scene: ['salvador-bahia-colorful-seafront-steps', 'summer', 'afternoon'],
    photography: { composition: 'three-quarter', lens: '50mm', angle: 'eye-level', lighting: ['warm-afternoon-key', 'pastel-wall-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-038.webp'
  },
  {
    id: 'ocean-039',
    title: '釜山蓝桥夜',
    prompt: 'Use case: photorealistic-natural. One standalone vertical 9:16 premium Korean coastal night fashion editorial. Subject: a clearly adult 27-year-old Korean woman with neutral beige skin, a tapered heart-shaped face, narrow dark almond eyes, a refined straight nose, softly full lips and long dark-brown hair in smooth loose waves. Wardrobe: a fully opaque midnight-navy satin long-sleeve wrap midi dress with a defined waist and modest V neckline, silver drop earrings. Setting: a Busan waterfront terrace at blue hour with the illuminated Gwangan Bridge softly blurred over dark water. Pose: standing upright beside a glass-and-stone rail, one hand resting naturally on the rail and the other relaxed, calm direct gaze. Half-to-three-quarter framing, 85mm lens, eye level, warm-terrace-key, cool-blue-hour-fill. High-end cinematic fashion photography, realistic low-light skin, natural hair, accurate hands, fully clothed. No text, logo, watermark, collage or neon signage.',
    negativePrompt,
    tags: ['釜山', '广安大桥', '午夜蓝缎裙', '蓝调时刻', '夜海'],
    identity: {
      ageBand: '26-28',
      face: ['tapered-heart', 'narrow-dark-almond', 'refined-straight-nose', 'soft-full-lips'],
      hair: ['long-dark-brown', 'smooth-loose-waves'],
      distinctiveFeatures: ['neutral-beige-skin', 'fine-defined-jawline'],
      region: 'east-asia'
    },
    fashion: ['midnight-navy-satin-wrap-midi-dress', 'silver-drop-earrings'],
    scene: ['busan-waterfront-bridge-terrace', 'summer', 'blue-hour'],
    photography: { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['warm-terrace-key', 'cool-blue-hour-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-039.webp'
  },
  {
    id: 'ocean-040',
    title: '夏威夷熔岩霞光',
    prompt: 'Use case: photorealistic-natural. Create ONE standalone vertical 9:16 Pacific coastal fashion editorial photograph. Subject: a clearly adult 25-year-old Native Hawaiian / Polynesian woman with warm bronze skin, a broad heart-shaped face, dark brown almond eyes, a softly wide nose, full lips and very long dark wavy hair swept over one shoulder. Wardrobe: a fully opaque deep-plum one-shoulder draped midi dress with a sculpted waist and flowing hem, a simple shell-and-gold bracelet. Setting: a Hawaiian lava-rock shoreline at sunset with orange-pink sky, dark volcanic stones and glowing ocean spray. Pose: standing safely on a broad dry rock shelf, one arm relaxed and the other lightly holding the fabric at the hip, gaze just past camera with a serene confident expression. Full-body, 35mm lens, slight-low-angle, sunset-rim-key, warm-sky-fill. Premium cinematic fashion realism, detailed fabric and natural skin, elegant posture, accurate hands, fully clothed and non-explicit. No text, logos, watermark, collage or border.',
    negativePrompt,
    tags: ['夏威夷', '熔岩海岸', '深梅紫长裙', '夕霞', '波利尼西亚'],
    identity: {
      ageBand: '24-26',
      face: ['broad-heart', 'dark-brown-almond', 'soft-wide-nose', 'full-lips'],
      hair: ['very-long-dark', 'loose-waves', 'side-swept'],
      distinctiveFeatures: ['warm-bronze-skin', 'strong-soft-cheekbones'],
      region: 'polynesia'
    },
    fashion: ['deep-plum-one-shoulder-draped-midi-dress', 'shell-gold-bracelet'],
    scene: ['hawaii-lava-rock-shoreline', 'summer', 'sunset'],
    photography: { composition: 'full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['sunset-rim-key', 'warm-sky-fill'] },
    outputPath: '/images/nature/ocean-muse/ocean-muse-040.webp'
  }
];
