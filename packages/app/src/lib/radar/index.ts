import {
  RadarRing,
  RadarQuadrant,
  RadarEntry,
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage/plugin-tech-radar';

import entries from './entry';

export class TechRadar implements TechRadarApi {
  async load(id?: string): Promise<TechRadarLoaderResponse> {
    const rings = new Array<RadarRing>();
    rings.push({ id: 'adopt', name: 'ADOPT', color: '#93c47d' });
    rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
    rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
    rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });

    const quadrants = new Array<RadarQuadrant>();
    quadrants.push({ id: 'languages', name: 'Languages & Frameworks' });
    quadrants.push({ id: 'protocols', name: 'Network Protocols' });
    quadrants.push({ id: 'devops', name: 'DevOps Tools & Platforms' });
    quadrants.push({ id: 'cloudnative', name: 'Cloud Native Technologies' });

    return {
      rings,
      quadrants,
      entries: entries as Array<RadarEntry>,
    };
  }
}
