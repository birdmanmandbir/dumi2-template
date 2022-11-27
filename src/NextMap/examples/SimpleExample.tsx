import { Scene } from '@antv/l7';
import { NextMap } from 'dumi2-template';
import React from 'react';
import { drawText } from '../drawText';
import { fitBounds } from '../fitBounds';
const initProps = {
  pitch: 0,
  style: 'blank',
  center: [116.368652, 39.93866],
  zoom: 10.07,
};
export default function Page() {
  const onLoad = (scene: Scene) => {
    fitBounds(scene, 'map1');
    drawText(scene);
  };
  return <NextMap id="map1" config={initProps} onLoad={onLoad}></NextMap>;
}
