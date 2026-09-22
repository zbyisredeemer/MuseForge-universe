export type MuseAssetType = 'generated' | 'placeholder';

export type MuseImageDNA = {
  subject: {
    gender: 'female';
    ageGroup: 'adult';
    ageBand?: string;
    identityId?: string;
    face?: {
      shape?: string;
      skinTone?: string;
      eyeShape?: string;
      browShape?: string;
      noseShape?: string;
      lipShape?: string;
      distinctiveFeatures?: string[];
    };
    region?: string;
    country?: string;
    appearance?: string[];
    hair?: string[];
  };
  fashion: {
    outfit?: string[];
    colors?: string[];
    accessories?: string[];
  };
  environment: {
    scene?: string;
    location?: string;
    season?: string;
    weather?: string;
    time?: string;
  };
  pose: {
    action?: string;
    expression?: string;
  };
  photography: {
    composition?: string;
    camera?: string;
    lens?: string;
    aperture?: string;
    angle?: string;
    lighting?: string[];
  };
  aesthetics: {
    styles?: string[];
    mood?: string[];
    palette?: string[];
  };
  generation: {
    model?: string;
    aspectRatio?: string;
    resolution?: string;
    format?: string;
    assetType: MuseAssetType;
  };
};

export type MuseImage = {
  id: string;
  title: string;
  image: string;
  galaxyId: string;
  planetId: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
  dna: MuseImageDNA;
};

export type MuseGalaxy = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  order: number;
};

export type MusePlanet = {
  id: string;
  galaxyId: string;
  name: string;
  subtitle: string;
  description: string;
  code: string;
  sequence: number;
  star: { x: number; y: number; size: number };
  images: MuseImage[];
};

// Compatibility alias for the current UI. New code should prefer MusePlanet.
export type MuseStyle = MusePlanet;
