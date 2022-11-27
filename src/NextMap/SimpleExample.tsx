import { NextMap } from 'dumi2-template';
import React from 'react';
import { drawText } from './drawText';
const initProps = {
  pitch: 0,
  style: 'blank',
  center: [116.368652, 39.93866],
  zoom: 10.07,
};
export default function Page() {
  return <NextMap id="map1" config={initProps} onLoad={drawText}></NextMap>;
}
