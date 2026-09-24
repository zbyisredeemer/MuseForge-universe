import type { MuseImage, MusePlanet } from '../types';

const negativePrompt = 'lowres, blurry, jpeg artifacts, overprocessed skin, bad anatomy, extra fingers, malformed hands, asymmetrical eyes, deformed face, duplicate person, cloned face, recurring identity, text, logo, watermark, frame, oversaturated';

const seeds = [
  {
    title: '竹庭晨雾',
    prompt: 'Adult Chinese woman in pale jade and ivory hanfu in a misty bamboo courtyard at dawn, translucent embroidered layers, slightly off-shoulder drape, visible collarbone, fitted waist sash, flowing sleeves, refined and gently sensual, cinematic natural light, realistic skin texture, premium editorial portrait',
    tags: ['汉服', '竹林', '晨雾', '青白', '轻性感'],
    scene: 'misty-bamboo-courtyard', season: 'spring', weather: 'mist', time: 'dawn',
    colors: ['pale-jade', 'ivory'], accessories: ['gold-hair-ornament'], action: 'standing', expression: 'calm-alluring',
    mood: ['serene', 'sensual', 'elegant'], palette: ['jade-green', 'ivory', 'warm-gold']
  },
  {
    title: '锦鲤夕照',
    prompt: 'Adult Chinese woman in deep teal and gold embroidered hanfu beside a koi pond at golden hour, wrapped waist, open layered sleeves, tasteful low neckline and visible collarbone, ornate floral hair ornaments, confident alluring smile, classical Chinese garden, warm cinematic light, photorealistic luxury editorial portrait',
    tags: ['汉服', '锦鲤', '园林', '夕照', '轻性感'],
    scene: 'classical-koi-garden', season: 'summer', weather: 'clear', time: 'golden-hour',
    colors: ['deep-teal', 'gold'], accessories: ['floral-hairpins', 'tassel'], action: 'looking-back', expression: 'confident-smile',
    mood: ['luxurious', 'sensual', 'warm'], palette: ['deep-teal', 'gold', 'sunset']
  },
  {
    title: '桃花春水',
    prompt: 'Adult Chinese woman in blush pink floral hanfu beneath blooming peach blossoms beside a stone arch bridge and stream, sheer embroidered outer layers, fitted bodice, softly open neckline, flowing sleeves, romantic and gently sensual adult styling, spring petals, luminous natural light, cinematic photorealistic portrait',
    tags: ['汉服', '桃花', '石桥', '春水', '粉色'],
    scene: 'peach-blossom-bridge', season: 'spring', weather: 'clear', time: 'morning',
    colors: ['blush-pink', 'cream'], accessories: ['flower-hairpin'], action: 'reaching-forward', expression: 'soft-smile',
    mood: ['romantic', 'airy', 'sensual'], palette: ['blush-pink', 'cream', 'spring-green']
  },
  {
    title: '书斋兰影',
    prompt: 'Clearly adult young Chinese woman around 23 to 25 writing calligraphy in a refined scholar studio, slate blue and cream hanfu with translucent layers, elegant open neckline, fitted waist and graceful shoulder drape, intelligent youthful allure, distinct facial bone structure, ink brush, scrolls and plum blossoms by lattice window, realistic premium editorial photography',
    tags: ['汉服', '书斋', '书法', '兰灰', '知性'],
    scene: 'scholar-studio', season: 'spring', weather: 'clear', time: 'day',
    colors: ['slate-blue', 'cream'], accessories: ['silver-hair-ornament'], action: 'writing-calligraphy', expression: 'intelligent-smile',
    mood: ['intellectual', 'young', 'sensual'], palette: ['slate-blue', 'cream', 'wood-brown']
  },
  {
    title: '长安夜市',
    prompt: 'Adult Chinese woman in navy celestial embroidered hanfu walking through a lantern-lit ancient night market, semi-sheer flowing sleeves, cinched waist, slightly open neckline, holding a wrapped street snack, playful over-the-shoulder glance, wet reflective stone street, warm lantern bokeh, cinematic photorealism',
    tags: ['汉服', '夜市', '灯笼', '星月', '夜景'],
    scene: 'ancient-night-market', season: 'autumn', weather: 'after-rain', time: 'night',
    colors: ['navy', 'silver'], accessories: ['pearl-hair-ornament'], action: 'walking-looking-back', expression: 'playful',
    mood: ['lively', 'romantic', 'sensual'], palette: ['navy', 'silver', 'warm-gold']
  },
  {
    title: '雪宫红裳',
    prompt: 'Clearly adult young Chinese woman around 24 to 27 in a snowy palace courtyard holding a traditional paper umbrella, ivory fur-lined cloak over burgundy embroidered winter hanfu, fitted silhouette, ornate jeweled updo, poised over-the-shoulder look, luxurious young refined sensuality, falling snow and vermilion walls, cinematic realism',
    tags: ['汉服', '冬雪', '朱墙', '纸伞', '贵气'],
    scene: 'snow-palace-courtyard', season: 'winter', weather: 'snow', time: 'day',
    colors: ['ivory', 'burgundy'], accessories: ['paper-umbrella', 'jeweled-hairpin'], action: 'holding-umbrella', expression: 'poised',
    mood: ['luxurious', 'young', 'serene'], palette: ['snow-white', 'burgundy', 'vermilion']
  },
  {
    title: '荷风玉色',
    prompt: 'Adult Chinese woman seated beside a summer lotus pond holding a pink lotus, pale aqua and white hanfu with translucent sleeves, refined fitted bodice, soft neckline, jade hair ornaments, graceful feminine drape, serene and sensually elegant, sparkling water and lotus leaves, photorealistic editorial portrait',
    tags: ['汉服', '荷花', '荷塘', '玉色', '夏日'],
    scene: 'summer-lotus-pond', season: 'summer', weather: 'sunny', time: 'day',
    colors: ['pale-aqua', 'white'], accessories: ['jade-hair-ornament'], action: 'holding-lotus', expression: 'serene',
    mood: ['fresh', 'feminine', 'sensual'], palette: ['aqua', 'lotus-pink', 'leaf-green']
  },
  {
    title: '秋山旅人',
    prompt: 'Adult Chinese woman traveler on mountain temple steps in autumn, short textured hair, layered rust olive and cream historical robes, fitted waist, open drape at the collar and high-slit layered skirt, leather satchel, confident adventurous pose, red maple leaves and distant mountains, cinematic fashion portrait',
    tags: ['汉服', '秋山', '旅人', '红叶', '飒爽'],
    scene: 'autumn-mountain-temple', season: 'autumn', weather: 'clear', time: 'afternoon',
    colors: ['rust', 'olive', 'cream'], accessories: ['leather-satchel'], action: 'traveling', expression: 'confident',
    mood: ['adventurous', 'confident', 'sensual'], palette: ['rust', 'olive', 'maple-red']
  },
  {
    title: '月满江亭',
    prompt: 'Adult Chinese woman on a moonlit pavilion terrace beside a misty lake, pale lavender hanfu with moon and cloud embroidery, sheer layered sleeves, cinched waist, elegant one-shoulder drape, holding a dark embroidered guqin case, cool moonlight and warm lantern glow, atmospheric cinematic portrait',
    tags: ['汉服', '月夜', '水亭', '琵琶紫', '薄纱'],
    scene: 'moonlit-lake-pavilion', season: 'autumn', weather: 'mist', time: 'night',
    colors: ['pale-lavender', 'silver'], accessories: ['silver-hair-ornament', 'guqin-case'], action: 'standing-with-instrument', expression: 'wistful',
    mood: ['poetic', 'mysterious', 'sensual'], palette: ['lavender', 'moon-silver', 'deep-blue']
  },
  {
    title: '宫阙灯影',
    prompt: 'Adult Chinese woman leaning lightly on a carved palace corridor railing at dusk, deep crimson and black hanfu with ornate gold embroidery, semi-sheer layers, shaped waist, dramatic sleeves and tasteful low neckline, holding a glowing lantern, young glamorous sensuality, wet corridor and repeating lanterns, cinematic realism',
    tags: ['汉服', '宫阙', '灯影', '绯红', '华丽'],
    scene: 'palace-lantern-corridor', season: 'autumn', weather: 'after-rain', time: 'dusk',
    colors: ['deep-crimson', 'black', 'gold'], accessories: ['gold-hairpin', 'hand-lantern'], action: 'leaning-on-railing', expression: 'seductive-calm',
    mood: ['glamorous', 'dramatic', 'sensual'], palette: ['crimson', 'black', 'warm-gold']
  },
  {
    title: '雨夜青伞',
    prompt: 'Adult Chinese woman in a rain-damp ancient alley under a paper umbrella, dark teal and ivory silk hanfu with semi-sheer sleeves, fitted waist and softly open neckline, elegant restrained sensuality, lantern glow, wet stone pavement, cinematic blue-green night atmosphere, realistic skin and fabric detail',
    tags: ['汉服', '雨夜', '纸伞', '古巷', '青黛'],
    scene: 'rainy-ancient-alley', season: 'summer', weather: 'rain', time: 'night',
    colors: ['dark-teal', 'ivory'], accessories: ['paper-umbrella', 'pearl-hair-tassels'], action: 'holding-umbrella', expression: 'serene',
    mood: ['moody', 'romantic', 'sensual'], palette: ['teal', 'ivory', 'lantern-gold']
  },
  {
    title: '雪梅暗香',
    prompt: 'Adult Chinese woman in a winter plum garden during light snowfall, wine-red and ivory embroidered hanfu with fur trim and graceful off-shoulder drape, holding a small incense burner, plum blossoms and stone path, young luxurious sensuality, cinematic winter portrait, realistic skin texture',
    tags: ['汉服', '雪梅', '暗香', '冬日', '酒红'],
    scene: 'snowy-plum-garden', season: 'winter', weather: 'snow', time: 'day',
    colors: ['wine-red', 'ivory'], accessories: ['plum-hair-ornament', 'incense-burner'], action: 'holding-incense-burner', expression: 'composed',
    mood: ['quiet', 'luxurious', 'young'], palette: ['wine-red', 'snow-white', 'plum-red']
  },
  {
    title: '月下琵琶',
    prompt: 'Adult Chinese woman seated by a carved lattice window playing pipa in a candlelit room, pale lilac hanfu with translucent layers and moon-flower embroidery, shaped bodice and exposed shoulder line, warm candlelight mixed with cool moonlight, intimate musical atmosphere, refined tasteful sensuality',
    tags: ['汉服', '琵琶', '月夜', '烛光', '丁香紫'],
    scene: 'candlelit-pipa-room', season: 'autumn', weather: 'clear', time: 'night',
    colors: ['pale-lilac', 'silver'], accessories: ['jade-hair-tassel', 'pipa'], action: 'playing-pipa', expression: 'focused-soft',
    mood: ['intimate', 'poetic', 'sensual'], palette: ['lilac', 'candle-gold', 'moon-blue']
  },
  {
    title: '金阙夕照',
    prompt: 'Adult Chinese woman with short textured hair standing on a palace terrace at sunset, saffron-gold and cream hanfu with layered gauze sleeves, fitted waist belt and elegant neckline, bold feminine confidence, billowing fabric, distant palace rooftops, warm golden backlight, cinematic editorial realism',
    tags: ['汉服', '宫阙', '夕照', '金色', '短发'],
    scene: 'sunset-palace-terrace', season: 'autumn', weather: 'clear', time: 'sunset',
    colors: ['saffron-gold', 'cream'], accessories: ['gold-leaf-hair-ornament'], action: 'standing-in-wind', expression: 'confident',
    mood: ['bold', 'regal', 'warm'], palette: ['gold', 'cream', 'sunset-orange']
  },
  {
    title: '烟波湖亭',
    prompt: 'Clearly adult young Chinese woman around 24 to 27 by a misty lakeside pavilion at dawn, soft aqua and pearl-white hanfu with translucent shawl draped off one shoulder, cinched waist, holding a round silk fan, willow branches and fog over the lake, youthful adult elegance and subtle sensuality, cinematic realism',
    tags: ['汉服', '湖亭', '烟波', '团扇', '水色'],
    scene: 'misty-lakeside-pavilion', season: 'spring', weather: 'mist', time: 'dawn',
    colors: ['soft-aqua', 'pearl-white'], accessories: ['round-silk-fan', 'pearl-hair-ornament'], action: 'standing-with-fan', expression: 'warm-smile',
    mood: ['serene', 'young', 'feminine'], palette: ['aqua', 'pearl-white', 'mist-gray']
  },
  {
    title: '灯市绯影',
    prompt: 'Adult Chinese woman walking through a lantern festival street at twilight, black and crimson embroidered hanfu with sheer sleeves, fitted waist and high-slit layered skirt, carrying a floral lantern, glamorous tasteful sensuality, lively old-town atmosphere and wet reflections, cinematic night portrait',
    tags: ['汉服', '灯市', '绯红', '夜游', '华灯'],
    scene: 'lantern-festival-street', season: 'autumn', weather: 'after-rain', time: 'twilight',
    colors: ['black', 'crimson'], accessories: ['floral-lantern', 'red-jeweled-hair-ornament'], action: 'walking-with-lantern', expression: 'poised',
    mood: ['festive', 'glamorous', 'sensual'], palette: ['black', 'crimson', 'lantern-gold']
  },
  {
    title: '丝路长风',
    prompt: 'Clearly adult young Chinese woman around 24 to 27 on a Silk Road inspired desert watchtower terrace, sand-beige rust and indigo traveler layers with fitted leather belt and airy scarf, partially open shoulder drape, wind-blown fabric, distant dunes and mountains, amber sunset, adventurous youthful sensuality and cinematic realism',
    tags: ['汉服', '丝路', '风沙', '旅人', '大漠'],
    scene: 'silk-road-watchtower', season: 'autumn', weather: 'windy', time: 'sunset',
    colors: ['sand-beige', 'rust', 'indigo'], accessories: ['bronze-hair-ornament', 'leather-belt'], action: 'looking-back-in-wind', expression: 'stoic',
    mood: ['adventurous', 'young', 'epic'], palette: ['sand', 'rust', 'indigo']
  },
  {
    title: '花月同春',
    prompt: 'Adult Chinese woman standing in a moonlit peony garden, ink-blue and silver hanfu with peony embroidery, translucent robe layers, cinched waist and visible collarbone, round fan in hand, cool moonlight with warm lantern glow, poetic restrained sensuality, cinematic garden portrait',
    tags: ['汉服', '牡丹', '月夜', '团扇', '墨蓝'],
    scene: 'moonlit-peony-garden', season: 'spring', weather: 'clear', time: 'night',
    colors: ['ink-blue', 'silver'], accessories: ['round-fan', 'white-blossom-hair-ornament'], action: 'standing-with-fan', expression: 'wistful',
    mood: ['poetic', 'romantic', 'sensual'], palette: ['ink-blue', 'silver', 'peony-pink']
  },
  {
    title: '翡翠浴阁',
    prompt: 'Clearly adult young Chinese woman around 24 to 27 seated in a luxurious bathhouse-side dressing room, cream and emerald hanfu robe loosely draped over an embroidered inner dress, tasteful shoulder reveal and graceful neckline, carved screens, steam, bronze mirror, candles and jade accessories, young sophisticated sensuality, photorealistic cinematic interior',
    tags: ['汉服', '浴阁', '翡翠', '铜镜', '烛影'],
    scene: 'luxury-bathhouse-dressing-room', season: 'winter', weather: 'indoor', time: 'night',
    colors: ['cream', 'emerald'], accessories: ['jade-hair-ornament', 'bronze-mirror'], action: 'seated-at-vanity', expression: 'soft-smile',
    mood: ['intimate', 'luxurious', 'young'], palette: ['emerald', 'cream', 'candle-gold']
  },
  {
    title: '凤仪宫灯',
    prompt: 'Adult Chinese woman in a grand palace hall at night, black crimson and gold ceremonial hanfu with dramatic sheer outer robe, fitted waist and elegant low neckline, gold phoenix hair ornaments and black feather fan, powerful regal glamour, warm lantern rows and wet polished floor reflections, cinematic realism',
    tags: ['汉服', '凤仪', '宫灯', '黑金', '华贵'],
    scene: 'grand-palace-hall-night', season: 'autumn', weather: 'clear', time: 'night',
    colors: ['black', 'crimson', 'gold'], accessories: ['phoenix-hair-ornament', 'feather-fan'], action: 'standing-with-fan', expression: 'regal',
    mood: ['regal', 'powerful', 'glamorous'], palette: ['black', 'crimson', 'gold']
  }
] as const;

const identityProfiles = [
  { ageBand: '23-24', hair: ['long', 'straight', 'center-part'], face: { shape: 'oval', faceWidth: 'medium', cheekbones: 'soft-high', jawShape: 'soft-v', chinShape: 'rounded', skinTone: 'light-warm', eyeShape: 'almond', eyeSpacing: 'balanced', browShape: 'soft-arched', noseShape: 'straight', noseWidth: 'narrow', lipShape: 'defined-cupid-bow', lipRatio: 'balanced', distinctiveFeatures: ['small-beauty-mark-under-eye'] } },
  { ageBand: '25-26', hair: ['long', 'soft-wave', 'half-up'], face: { shape: 'heart', faceWidth: 'medium', cheekbones: 'defined', jawShape: 'tapered', chinShape: 'pointed-soft', skinTone: 'light-neutral', eyeShape: 'upturned-almond', eyeSpacing: 'slightly-wide', browShape: 'straight-soft', noseShape: 'slender', noseWidth: 'narrow', lipShape: 'full-lower-lip', lipRatio: 'lower-fuller', distinctiveFeatures: ['subtle-dimple'] } },
  { ageBand: '21-22', hair: ['long', 'dark-brown', 'braided-updo'], face: { shape: 'round', faceWidth: 'compact', cheekbones: 'soft', jawShape: 'rounded', chinShape: 'short-rounded', skinTone: 'fair-neutral', eyeShape: 'soft-monolid', eyeSpacing: 'balanced', browShape: 'natural-straight', noseShape: 'small-straight', noseWidth: 'medium', lipShape: 'petal', lipRatio: 'balanced', distinctiveFeatures: ['light-freckles'] } },
  { ageBand: '23-25', hair: ['long', 'black', 'low-bun'], face: { shape: 'long-oval', faceWidth: 'narrow', cheekbones: 'high-soft', jawShape: 'slender', chinShape: 'long-rounded', skinTone: 'light-olive', eyeShape: 'double-lid-almond', eyeSpacing: 'close-balanced', browShape: 'fine-arched', noseShape: 'high-bridge', noseWidth: 'narrow', lipShape: 'small-full', lipRatio: 'balanced', distinctiveFeatures: ['calm-intellectual-look'] } },
  { ageBand: '24-25', hair: ['shoulder-length', 'black', 'soft-wave'], face: { shape: 'diamond', faceWidth: 'medium', cheekbones: 'prominent-soft', jawShape: 'narrow', chinShape: 'defined', skinTone: 'medium-warm', eyeShape: 'long-almond', eyeSpacing: 'balanced', browShape: 'bold-straight', noseShape: 'straight', noseWidth: 'medium', lipShape: 'wide-defined', lipRatio: 'balanced', distinctiveFeatures: ['slightly-asymmetric-smile'] } },
  { ageBand: '23-25', hair: ['long', 'black', 'high-updo'], face: { shape: 'soft-square', faceWidth: 'medium-wide', cheekbones: 'defined', jawShape: 'soft-angular', chinShape: 'rounded-square', skinTone: 'fair-cool', eyeShape: 'upturned', eyeSpacing: 'balanced', browShape: 'clean-arched', noseShape: 'straight', noseWidth: 'medium', lipShape: 'full', lipRatio: 'balanced', distinctiveFeatures: ['clear-jawline'] } },
  { ageBand: '22-23', hair: ['long', 'black', 'loose-braids'], face: { shape: 'oval', faceWidth: 'slightly-wide', cheekbones: 'soft', jawShape: 'rounded', chinShape: 'soft', skinTone: 'light-warm', eyeShape: 'round-almond', eyeSpacing: 'slightly-wide', browShape: 'soft-straight', noseShape: 'small', noseWidth: 'medium', lipShape: 'soft-full', lipRatio: 'balanced', distinctiveFeatures: ['bright-eyes'] } },
  { ageBand: '26-27', hair: ['short-bob', 'black', 'textured'], face: { shape: 'rectangular', faceWidth: 'medium', cheekbones: 'high', jawShape: 'defined', chinShape: 'square-soft', skinTone: 'medium-neutral', eyeShape: 'narrow-almond', eyeSpacing: 'balanced', browShape: 'strong-straight', noseShape: 'defined-bridge', noseWidth: 'medium', lipShape: 'wide', lipRatio: 'balanced', distinctiveFeatures: ['short-hair-contrast'] } },
  { ageBand: '24-26', hair: ['long', 'black', 'side-part'], face: { shape: 'heart', faceWidth: 'medium', cheekbones: 'soft-high', jawShape: 'tapered', chinShape: 'small-pointed', skinTone: 'fair-neutral', eyeShape: 'downturned-almond', eyeSpacing: 'balanced', browShape: 'gentle-arched', noseShape: 'slender', noseWidth: 'narrow', lipShape: 'small-defined', lipRatio: 'balanced', distinctiveFeatures: ['wistful-eyes'] } },
  { ageBand: '25-27', hair: ['long', 'black', 'ornate-updo'], face: { shape: 'oval', faceWidth: 'narrow', cheekbones: 'defined', jawShape: 'slender', chinShape: 'rounded-point', skinTone: 'light-neutral', eyeShape: 'cat-almond', eyeSpacing: 'balanced', browShape: 'arched', noseShape: 'high-bridge', noseWidth: 'narrow', lipShape: 'full-defined', lipRatio: 'upper-slightly-fuller', distinctiveFeatures: ['regal-gaze'] } },
  { ageBand: '22-24', hair: ['long', 'black', 'wet-loose-strands'], face: { shape: 'round-oval', faceWidth: 'medium', cheekbones: 'soft', jawShape: 'rounded', chinShape: 'short', skinTone: 'light-cool', eyeShape: 'large-almond', eyeSpacing: 'balanced', browShape: 'natural', noseShape: 'small-straight', noseWidth: 'medium', lipShape: 'petal-full', lipRatio: 'balanced', distinctiveFeatures: ['rain-kissed-hair'] } },
  { ageBand: '24-25', hair: ['long', 'dark-brown', 'plum-pin-updo'], face: { shape: 'diamond', faceWidth: 'medium', cheekbones: 'high', jawShape: 'tapered', chinShape: 'defined', skinTone: 'fair-warm', eyeShape: 'almond', eyeSpacing: 'close-balanced', browShape: 'fine-straight', noseShape: 'straight', noseWidth: 'narrow', lipShape: 'full-lower-lip', lipRatio: 'lower-fuller', distinctiveFeatures: ['warm-blush'] } },
  { ageBand: '23-24', hair: ['long', 'black', 'low-ornate-bun'], face: { shape: 'oval', faceWidth: 'medium', cheekbones: 'soft-high', jawShape: 'soft-v', chinShape: 'rounded', skinTone: 'light-neutral', eyeShape: 'soft-almond', eyeSpacing: 'slightly-wide', browShape: 'straight', noseShape: 'slender', noseWidth: 'narrow', lipShape: 'delicate', lipRatio: 'balanced', distinctiveFeatures: ['tiny-mole-near-lip'] } },
  { ageBand: '26-28', hair: ['short-textured', 'black', 'side-swept'], face: { shape: 'soft-square', faceWidth: 'medium-wide', cheekbones: 'defined', jawShape: 'angular-soft', chinShape: 'broad-rounded', skinTone: 'medium-warm', eyeShape: 'narrow-upturned', eyeSpacing: 'balanced', browShape: 'bold', noseShape: 'straight-strong', noseWidth: 'medium', lipShape: 'wide-full', lipRatio: 'balanced', distinctiveFeatures: ['strong-editorial-bone-structure'] } },
  { ageBand: '22-24', hair: ['long', 'black', 'half-up-pearl'], face: { shape: 'heart', faceWidth: 'medium', cheekbones: 'soft', jawShape: 'tapered', chinShape: 'small-rounded', skinTone: 'fair-neutral', eyeShape: 'round-almond', eyeSpacing: 'slightly-wide', browShape: 'soft-arched', noseShape: 'small', noseWidth: 'narrow', lipShape: 'soft-full', lipRatio: 'balanced', distinctiveFeatures: ['gentle-smile'] } },
  { ageBand: '24-26', hair: ['long', 'black', 'high-ponytail-inspired-updo'], face: { shape: 'oval', faceWidth: 'medium', cheekbones: 'high-soft', jawShape: 'defined-v', chinShape: 'rounded-point', skinTone: 'light-warm', eyeShape: 'upturned-almond', eyeSpacing: 'balanced', browShape: 'clean-straight', noseShape: 'high-bridge', noseWidth: 'medium', lipShape: 'defined-full', lipRatio: 'balanced', distinctiveFeatures: ['confident-gaze'] } },
  { ageBand: '24-26', hair: ['long', 'dark-brown', 'windblown-braids'], face: { shape: 'rectangular-oval', faceWidth: 'medium', cheekbones: 'defined', jawShape: 'strong-soft', chinShape: 'long-rounded', skinTone: 'medium-golden', eyeShape: 'deep-set-almond', eyeSpacing: 'balanced', browShape: 'strong-natural', noseShape: 'straight', noseWidth: 'medium-wide', lipShape: 'full', lipRatio: 'balanced', distinctiveFeatures: ['sun-kissed-skin'] } },
  { ageBand: '21-23', hair: ['long', 'black', 'flower-crown-updo'], face: { shape: 'round', faceWidth: 'compact', cheekbones: 'soft', jawShape: 'rounded', chinShape: 'small', skinTone: 'fair-warm', eyeShape: 'large-almond', eyeSpacing: 'balanced', browShape: 'soft-straight', noseShape: 'small', noseWidth: 'narrow', lipShape: 'petal', lipRatio: 'balanced', distinctiveFeatures: ['youthful-dimples'] } },
  { ageBand: '25-27', hair: ['long', 'black', 'jade-pin-low-bun'], face: { shape: 'diamond-oval', faceWidth: 'medium', cheekbones: 'prominent', jawShape: 'slender', chinShape: 'defined', skinTone: 'light-olive', eyeShape: 'long-almond', eyeSpacing: 'balanced', browShape: 'arched-soft', noseShape: 'straight', noseWidth: 'medium', lipShape: 'full-defined', lipRatio: 'balanced', distinctiveFeatures: ['elegant-long-neck'] } },
  { ageBand: '23-25', hair: ['long', 'black', 'phoenix-ornament-updo'], face: { shape: 'heart-oval', faceWidth: 'medium', cheekbones: 'defined-high', jawShape: 'tapered', chinShape: 'pointed-soft', skinTone: 'fair-neutral', eyeShape: 'cat-almond', eyeSpacing: 'balanced', browShape: 'arched-bold', noseShape: 'high-bridge', noseWidth: 'narrow', lipShape: 'full', lipRatio: 'balanced', distinctiveFeatures: ['commanding-eye-contact'] } }
] as const;

const cameraProfiles = [
  { composition: 'three-quarter', lens: '70mm', angle: 'eye-level', lighting: ['misty-dawn-softlight'] },
  { composition: 'half-body', lens: '85mm', angle: 'slight-low-angle', lighting: ['golden-hour-backlight'] },
  { composition: 'full-body', lens: '50mm', angle: 'eye-level', lighting: ['spring-diffused-light'] },
  { composition: 'seated-three-quarter', lens: '70mm', angle: 'slight-high-angle', lighting: ['window-softlight'] },
  { composition: 'walking-full-body', lens: '35mm', angle: 'eye-level', lighting: ['lantern-night-mixed-light'] },
  { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['snow-softlight'] },
  { composition: 'seated-half-body', lens: '70mm', angle: 'eye-level', lighting: ['summer-water-bounce'] },
  { composition: 'environmental-full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['autumn-directional-light'] },
  { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['moonlight-lantern-mix'] },
  { composition: 'half-body', lens: '70mm', angle: 'slight-low-angle', lighting: ['dusk-lantern-light'] },
  { composition: 'walking-three-quarter', lens: '50mm', angle: 'eye-level', lighting: ['rainy-night-lantern-light'] },
  { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['snow-plum-softlight'] },
  { composition: 'seated-half-body', lens: '70mm', angle: 'slight-high-angle', lighting: ['candle-moon-mixed-light'] },
  { composition: 'environmental-full-body', lens: '35mm', angle: 'slight-low-angle', lighting: ['sunset-rim-light'] },
  { composition: 'half-body', lens: '85mm', angle: 'eye-level', lighting: ['misty-dawn-softlight'] },
  { composition: 'walking-full-body', lens: '50mm', angle: 'eye-level', lighting: ['festival-lantern-light'] },
  { composition: 'environmental-three-quarter', lens: '50mm', angle: 'slight-low-angle', lighting: ['desert-sunset-backlight'] },
  { composition: 'three-quarter', lens: '85mm', angle: 'eye-level', lighting: ['moonlit-garden-light'] },
  { composition: 'seated-three-quarter', lens: '70mm', angle: 'slight-high-angle', lighting: ['steam-candle-softlight'] },
  { composition: 'full-body', lens: '50mm', angle: 'slight-low-angle', lighting: ['grand-hall-lantern-light'] }
] as const;

const removedHanfuSlots = new Set<number>();

const images: MuseImage[] = seeds.map((seed, index) => {
  const number = String(index + 1).padStart(3, '0');
  const identity = identityProfiles[index]!;
  const camera = cameraProfiles[index]!;
  return {
    id: `hanfu-${number}`,
    title: seed.title,
    image: `/images/eastern/hanfu-muse/hanfu-muse-${number}.webp`,
    galaxyId: 'eastern',
    planetId: 'hanfu-muse',
    prompt: seed.prompt,
    negativePrompt,
    tags: [...seed.tags],
    dna: {
      subject: {
        gender: 'female',
        ageGroup: 'adult',
        ageBand: identity.ageBand,
        identityId: `hanfu-identity-${number}`,
        face: {
          ...identity.face,
          distinctiveFeatures: [...identity.face.distinctiveFeatures]
        },
        region: 'east-asia',
        country: 'china',
        appearance: ['natural-makeup'],
        hair: [...identity.hair]
      },
      fashion: {
        outfit: ['hanfu'],
        colors: [...seed.colors],
        accessories: [...seed.accessories]
      },
      environment: {
        scene: seed.scene,
        location: 'china-inspired',
        season: seed.season,
        weather: seed.weather,
        time: seed.time
      },
      pose: {
        action: seed.action,
        expression: seed.expression
      },
      photography: {
        composition: camera.composition,
        lens: camera.lens,
        angle: camera.angle,
        lighting: [...camera.lighting, 'cinematic-natural-light']
      },
      aesthetics: {
        styles: ['photorealistic', 'cinematic', 'editorial'],
        mood: [...seed.mood],
        palette: [...seed.palette]
      },
      generation: {
        aspectRatio: '9:16',
        resolution: '941x1672',
        format: 'webp',
        assetType: 'generated'
      }
    }
  };
}).filter((_, index) => !removedHanfuSlots.has(index + 1));

export const hanfuMuse: MusePlanet = {
  id: 'hanfu-muse',
  galaxyId: 'eastern',
  name: '汉服系美女',
  subtitle: 'HANFU MUSE',
  description: '传统汉服与古典场景的人像星球：竹庭、春水、书斋、夜市、雪宫、荷塘、秋山与月亭；整体强调年轻成年女性魅力、克制的东方性感与高级写真感。',
  code: 'HANFU',
  sequence: 1,
  star: { x: 45, y: 29, size: 16 },
  images
};
