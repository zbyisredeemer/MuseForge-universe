export * from './types';
export { galaxies, getGalaxyById, taxonomyOptions } from './taxonomy';

import { forestMuse } from './planets/forest-muse';
import type { MusePlanet } from './types';

export const planets: MusePlanet[] = [forestMuse];

// Compatibility export for the current UI. Prefer planets in new code.
export const styles = planets;
