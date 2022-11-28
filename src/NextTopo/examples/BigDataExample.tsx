import React from 'react';
import NextTopo from '../';

const config = {
  defaultNode: {
    size: 2,
    style: {
      fill: '#C6E5FF',
      stroke: '#5B8FF9',
      lineWidth: 0.3,
    },
    labelCfg: {
      style: {
        fontSize: 3,
      },
      position: 'right',
      offset: 1,
    },
  },
  defaultEdge: {
    size: 0.1,
    color: '#333',
    type: 'line',
  },
  nodeStateStyles: {
    selected: {
      fill: 'steelblue',
      stroke: '#000',
      lineWidth: 1,
    },
    hover: {
      fill: 'red',
      stroke: '#000',
      lineWidth: 1,
    },
  },
  modes: {
    default: [
      {
        type: 'zoom-canvas',
        enableOptimize: true,
        optimizeZoom: 0.9,
      },
      {
        type: 'drag-canvas',
        enableOptimize: true,
      },
      'drag-node',
      'brush-select',
    ], // 'drag-canvas',
  },
};

export default function Page() {
  return <NextTopo id="container" config={config}></NextTopo>;
}
