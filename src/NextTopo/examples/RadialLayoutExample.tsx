import React from 'react';
import NextTopo from '..';
import { radialConfig, radialMockData } from '../radialData';

export default function Page() {
  return (
    <div>
      <NextTopo
        id="radial"
        config={radialConfig}
        data={radialMockData}
      ></NextTopo>
    </div>
  );
}
