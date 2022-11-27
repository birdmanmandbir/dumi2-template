import { GaodeMap, IMapConfig, Mapbox, Scene } from '@antv/l7';
import React, { useEffect } from 'react';

export type NextMapProps = {
  id: string;
  config: Partial<IMapConfig>;
  isChina?: boolean;
  onLoad?: (scene: Scene) => void;
};

export default function NextMap({
  id,
  config,
  isChina = false,
  onLoad,
}: NextMapProps) {
  useEffect(() => {
    const scene = new Scene({
      id,
      map: isChina ? new GaodeMap(config) : new Mapbox(config),
    });

    scene.on('loaded', () => {
      onLoad?.(scene);
    });

    return () => {
      scene.destroy();
    };
  }, []);

  return (
    <div
      style={{ minHeight: 500, justifyContent: 'center', position: 'relative' }}
      id={id}
    />
  );
}
