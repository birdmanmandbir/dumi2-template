import { Scene } from '@antv/l7';

export function fitBounds(scene: Scene, id: string) {
  document.querySelector(id)?.addEventListener(
    'click',
    () => {
      scene.fitBounds([
        [112, 32],
        [114, 35],
      ]);
    },
    false,
  );
}
