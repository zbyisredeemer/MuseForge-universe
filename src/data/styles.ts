export * from './types';
export { galaxies, getGalaxyById, taxonomyOptions } from './taxonomy';

import { forestMuse } from './planets/forest-muse';
import { snowMuse } from './planets/snow-muse';
import { oceanMuse } from './planets/ocean-muse';
import { hanfuMuse } from './planets/hanfu-muse';
import { tokyoNight } from './planets/tokyo-night';
import type { MusePlanet } from './types';
import { applyIdentityDiversity } from './identity-diversity';

const rawPlanets: MusePlanet[] = [
  forestMuse,
  snowMuse,
  oceanMuse,
  hanfuMuse,
  tokyoNight
];

export const planets: MusePlanet[] = applyIdentityDiversity(rawPlanets);

// Compatibility export for the current UI. Prefer planets in new code.
export const styles = planets;
