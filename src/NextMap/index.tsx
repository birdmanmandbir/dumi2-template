import { IMapConfig, Mapbox, Scene } from '@antv/l7';
import React, { useEffect } from 'react';

export type NextMapProps = {
  id: string;
  config: Partial<IMapConfig>;
  onLoad?: (scene: Scene) => void;
};

export default function NextMap({ id, config, onLoad }: NextMapProps) {
  useEffect(() => {
    const scene = new Scene({
      id,
      map: new Mapbox(config),
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
