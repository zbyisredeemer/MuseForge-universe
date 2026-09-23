import type { MusePlanet } from './types';

export type ProjectImageStylePreset = {
  id: string;
  adultAgeRange: string;
  basePrompt: string;
  negativePrompt: string;
  aspectRatio: string;
  outputFormat: string;
  targetLongEdge: number;
};

export type GenerationBrief = {
  imageId: string;
  title: string;
  age: string;
  vibe: string[];
  scene: string;
  outfit: string;
  pose: string;
  hair: string;
  lens: string;
  composition: string;
  lighting: string;
  sensuality: string;
  mustHave: string[];
  avoid: string[];
};

export const globalYoungSexyBeautyPreset: ProjectImageStylePreset = {
  id: 'young-sexy-beauty-editorial-v1',
  adultAgeRange: '20-28',
  basePrompt:
    'clearly adult woman age 20 to 28, youthful high-attractiveness beauty, feminine and subtly sensual, elegant confident body language, flattering body proportions, premium fashion editorial photography, photorealistic face and skin, refined makeup, beautiful hair, high-end commercial beauty aesthetic, tasteful sexy styling, never vulgar',
  negativePrompt:
    'child, teen, underage, schoolgirl, minor, elderly, middle-aged appearance, matronly styling, plain documentary snapshot, conservative shapeless clothing, unflattering body line, low attractiveness, generic face, cloned face, plastic skin, waxy skin, deformed hands, extra fingers, bad anatomy, text, logo, watermark',
  aspectRatio: '9:16',
  outputFormat: 'webp',
  targetLongEdge: 2048
};

export const forestMuseStylePreset = {
  id: 'forest-muse-young-sexy-v1',
  prompt:
    'lush natural forest environment, romantic natural light, fresh green atmosphere, youthful sensual fashion portrait, feminine fitted or flowing outfit, visible waistline or elegant neckline when appropriate, cinematic but bright enough to showcase the subject, premium outdoor fashion editorial',
  avoid:
    'heavy survival clothing, overly practical outdoor gear, old-fashioned styling, gloomy documentary realism, shapeless silhouette'
};

export const forestMuseBatch01: GenerationBrief[] = [
  {
    imageId: 'forest-01',
    title: '苔光晨雾',
    age: '22-24',
    vibe: ['fresh', 'ethereal', 'subtly sensual'],
    scene: 'primeval moss forest at dawn with light emerald mist',
    outfit: 'fitted dark-green linen slip dress with a tasteful neckline and defined waist',
    pose: 'standing among mossy trees, one shoulder slightly toward camera, soft confident eye contact',
    hair: 'long loose dark hair with natural movement',
    lens: '85mm',
    composition: 'three-quarter beauty portrait, vertical 9:16',
    lighting: 'soft dawn rays through trees with gentle face fill',
    sensuality: 'tasteful neckline, exposed shoulders, elegant waistline',
    mustHave: ['clearly adult', 'young beautiful face', 'premium skin', 'strong eye contact', 'cinematic forest depth'],
    avoid: ['old-looking', 'matronly', 'baggy dress', 'flat lighting', 'plastic face']
  },
  {
    imageId: 'forest-02',
    title: '蕨雨',
    age: '23-25',
    vibe: ['wet-look', 'cool', 'sensual'],
    scene: 'giant fern forest just after summer rain',
    outfit: 'muted olive satin-and-linen fitted dress with thin straps',
    pose: 'half-body among wet fern leaves, body angled, face close to camera',
    hair: 'wet black hair loosely framing the face',
    lens: '85mm',
    composition: 'half-body editorial portrait',
    lighting: 'soft overcast rain light with wet-leaf reflections',
    sensuality: 'wet hair, bare shoulders, fitted silhouette',
    mustHave: ['clearly adult', 'young attractive face', 'real droplets', 'natural skin pores', 'luxury editorial feel'],
    avoid: ['older age impression', 'heavy coat', 'fantasy armor', 'over-retouched skin']
  },
  {
    imageId: 'forest-03',
    title: '杉林斜阳',
    age: '24-26',
    vibe: ['elegant', 'warm', 'fashionable'],
    scene: 'cedar forest with diagonal late-afternoon sunlight',
    outfit: 'forest-green fitted midi dress with elegant side slit',
    pose: 'walking slowly across the light beam, torso turning toward camera',
    hair: 'long soft waves',
    lens: '50mm',
    composition: 'full-body fashion portrait',
    lighting: 'warm diagonal sunlight against cool forest shadows',
    sensuality: 'defined waist and tasteful leg reveal through side slit',
    mustHave: ['clearly adult', 'young glamorous face', 'long body line', 'realistic fabric', 'cinematic contrast'],
    avoid: ['older-looking', 'business suit', 'stiff pose', 'flat background']
  },
  {
    imageId: 'forest-04',
    title: '翡翠溪谷',
    age: '21-23',
    vibe: ['clean', 'romantic', 'soft sexy'],
    scene: 'emerald forest stream with dark smooth stones',
    outfit: 'deep-green flowing halter dress with a fitted waist',
    pose: 'standing on a streamside stone, one leg slightly forward, relaxed shoulders',
    hair: 'long dark hair',
    lens: '70mm',
    composition: 'three-quarter to full-body portrait',
    lighting: 'soft reflected green light plus neutral face fill',
    sensuality: 'halter neckline, elegant shoulder and waist line',
    mustHave: ['clearly adult', 'young delicate beauty', 'natural hands', 'water reflections', 'premium editorial mood'],
    avoid: ['mature styling', 'overly dark face', 'fantasy costume', 'stiff hands']
  },
  {
    imageId: 'forest-05',
    title: '野花林隙',
    age: '23-24',
    vibe: ['sweet', 'young', 'sensual'],
    scene: 'sunny woodland glade with tiny wildflowers and a shallow stream',
    outfit: 'cream floral fitted sundress with thin straps and soft moss-green accents',
    pose: 'kneeling lightly among flowers, three-quarter body angle, warm direct eye contact',
    hair: 'collarbone soft waves',
    lens: '50mm',
    composition: 'three-quarter environmental beauty portrait',
    lighting: 'warm morning backlight with soft face fill',
    sensuality: 'thin straps, defined waist, graceful neckline',
    mustHave: ['clearly adult', 'high attractiveness', 'youthful skin', 'flower detail', 'natural feminine pose'],
    avoid: ['older-looking', 'rustic mature styling', 'oversized clothing', 'generic face']
  },
  {
    imageId: 'forest-06',
    title: '雾松',
    age: '25-26',
    vibe: ['cool', 'minimal', 'confident sexy'],
    scene: 'highland pine forest wrapped in silver morning mist',
    outfit: 'dark-green fitted coat dress with a short hem and clean tailoring',
    pose: 'walking toward camera from a slight side angle, confident posture',
    hair: 'short straight bob',
    lens: '50mm',
    composition: 'full-body fashion portrait',
    lighting: 'soft diffused fog light with subtle cool rim',
    sensuality: 'short tailored silhouette, visible legs, defined waist',
    mustHave: ['clearly adult', 'young stylish face', 'short-hair distinction', 'fashion proportions', 'mist depth'],
    avoid: ['middle-aged look', 'heavy long robe', 'somber documentary mood', 'shapeless silhouette']
  },
  {
    imageId: 'forest-07',
    title: '月夜森林',
    age: '21-22',
    vibe: ['mysterious', 'glamorous', 'sensual'],
    scene: 'moonlit blue-black forest with faint fireflies',
    outfit: 'deep-teal velvet evening dress with thin straps and a tasteful side slit',
    pose: 'seated sideways on a mossy boulder, face turned toward camera',
    hair: 'long soft black curls',
    lens: '85mm',
    composition: 'three-quarter night beauty portrait',
    lighting: 'moon rim light with controlled cool face fill',
    sensuality: 'evening neckline, bare shoulders, elegant side slit',
    mustHave: ['clearly adult', 'young glamorous beauty', 'luxury night fashion', 'real skin texture', 'controlled highlights'],
    avoid: ['older-looking', 'witch costume', 'fantasy armor', 'blue plastic skin']
  },
  {
    imageId: 'forest-08',
    title: '金叶暮光',
    age: '24-26',
    vibe: ['warm', 'chic', 'feminine'],
    scene: 'early-autumn forest with amber leaves at golden hour',
    outfit: 'olive fitted knit dress with an elegant neckline and knee-high boots',
    pose: 'walking across frame, looking back with a soft smile',
    hair: 'short soft bob',
    lens: '50mm',
    composition: 'full-body fashion editorial',
    lighting: 'warm backlight plus reflected golden fill',
    sensuality: 'fitted knit silhouette, confident leg line',
    mustHave: ['clearly adult', 'young fashionable beauty', 'distinct short hair', 'golden-hour glow', 'editorial movement'],
    avoid: ['mature coat styling', 'bulky layers', 'static passport pose']
  },
  {
    imageId: 'forest-09',
    title: '雨后木桥',
    age: '22-24',
    vibe: ['fresh', 'romantic', 'natural sexy'],
    scene: 'wet mossy wooden bridge beside a forest waterfall after rain',
    outfit: 'sage-green lightweight dress with a fitted bodice and flowing skirt',
    pose: 'walking barefoot or in delicate sandals, turning lightly over one shoulder',
    hair: 'shoulder-length damp waves',
    lens: '35mm',
    composition: 'full-body environmental fashion portrait',
    lighting: 'soft overcast light reflected from wet wood',
    sensuality: 'fitted bodice, elegant shoulder line, movement in skirt',
    mustHave: ['clearly adult', 'young attractive face', 'wet environment realism', 'full-body proportions', 'natural movement'],
    avoid: ['older-looking', 'plain camping clothing', 'heavy rain gear', 'stiff pose']
  },
  {
    imageId: 'forest-10',
    title: '溪边白衫',
    age: '27-28',
    vibe: ['elegant', 'relaxed', 'subtly seductive'],
    scene: 'sunlit shallow forest stream with mossy stones',
    outfit: 'soft white blouse with a tasteful open neckline and high-waist olive skirt with a side slit',
    pose: 'seated on a broad stone, torso slightly twisted toward camera, hands relaxed beside the body',
    hair: 'jaw-length softly wavy bob',
    lens: '85mm',
    composition: 'three-quarter seated beauty portrait',
    lighting: 'dappled sunlight with stream-reflected fill',
    sensuality: 'open neckline, defined waist, tasteful skirt slit',
    mustHave: ['clearly adult', 'young elegant beauty', 'distinct bob haircut', 'natural smile', 'premium skin texture'],
    avoid: ['older age impression', 'hand-to-face cliché', 'conservative blouse', 'generic influencer face']
  }
];

export function applyProjectImageStyle(planets: MusePlanet[]): MusePlanet[] {
  return planets.map((planet) => ({
    ...planet,
    images: planet.images.map((image) => ({
      ...image,
      prompt: `${globalYoungSexyBeautyPreset.basePrompt}. ${image.prompt}`,
      negativePrompt: `${image.negativePrompt}, ${globalYoungSexyBeautyPreset.negativePrompt}`,
      dna: {
        ...image.dna,
        subject: {
          ...image.dna.subject,
          appearance: [
            ...(image.dna.subject.appearance ?? []),
            'young-adult-20-28',
            'high-attractiveness',
            'feminine',
            'subtly-sensual',
            'premium-beauty-editorial'
          ]
        },
        aesthetics: {
          ...image.dna.aesthetics,
          styles: [
            ...(image.dna.aesthetics.styles ?? []),
            'young-sexy-beauty-editorial'
          ]
        },
        generation: {
          ...image.dna.generation,
          aspectRatio: globalYoungSexyBeautyPreset.aspectRatio
        }
      }
    }))
  }));
}
