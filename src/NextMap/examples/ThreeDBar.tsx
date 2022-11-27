import { Scene } from '@antv/l7';
import { NextMap } from 'dumi2-template';
import React from 'react';
import { draw3dBar } from '../draw3DBar';
const initProps = {
  pitch: 66.02383,
  center: [121.400257, 31.25287],
  zoom: 14.55,
};
export default function Page() {
  const onLoad = (scene: Scene) => {
    draw3dBar(scene);
  };
  return (
    <NextMap
      id="map2"
      config={initProps}
      onLoad={onLoad}
      isChina={true}
    ></NextMap>
  );
}
