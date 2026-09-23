export * from './types';
export { galaxies, getGalaxyById, taxonomyOptions } from './taxonomy';
export { regenerationQueue, forestKeepBaselines, getRegenerationTarget } from './regeneration-queue';
export { globalYoungSexyBeautyPreset, forestMuseStylePreset, forestMuseBatch01 } from './generation-presets';

import { forestMuse } from './planets/forest-muse';
import { snowMuse } from './planets/snow-muse';
import { oceanMuse } from './planets/ocean-muse';
import { hanfuMuse } from './planets/hanfu-muse';
import { tokyoNight } from './planets/tokyo-night';
import { editorialPortrait } from './planets/editorial-portrait';
import type { MusePlanet } from './types';
import { applyIdentityDiversity } from './identity-diversity';
import { applyProjectImageStyle } from './generation-presets';

const rawPlanets: MusePlanet[] = [
  forestMuse,
  snowMuse,
  oceanMuse,
  hanfuMuse,
  tokyoNight,
  editorialPortrait
];

export const planets: MusePlanet[] = applyProjectImageStyle(applyIdentityDiversity(rawPlanets));

// Compatibility export for the current UI. Prefer planets in new code.
export const styles = planets;
