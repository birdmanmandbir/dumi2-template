import G6, { Graph, GraphOptions } from '@antv/g6';
import React, { useEffect, useRef, useState } from 'react';

export type NextTopoProps = {
  id: string;
  config: Omit<GraphOptions, 'container' | 'width' | 'height'>;
  data: object;
  onSave?: (nodeLen: number, edgeLen: number) => void;
  onLoad?: () => void;
};

export default function NextTopo({ id, config, data, onSave }: NextTopoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphState, setGraphState] = useState<Graph>();

  const width = containerRef.current?.scrollWidth;
  const height = containerRef.current?.scrollHeight || 500;

  useEffect(() => {
    const realConfig = {
      ...config,
      width,
      height,
      container: id,
    };
    const graph = new G6.Graph(realConfig);
    graph.on('node:mouseenter', (e) => {
      const { item } = e;
      graph.setItemState(item, 'hover', true);
    });
    graph.on('node:mouseleave', (e) => {
      const { item } = e;
      graph.setItemState(item, 'hover', false);
    });
    if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        graph.changeSize(width, height);
      };
    setGraphState(graph);
    return () => {
      graph.destroy();
    };
  }, []);

  useEffect(() => {
    graphState?.data(data);
    graphState?.render();
    const graphData = graphState?.save();
    const nodeLen = graphData?.nodes?.length;
    const edgeLen = graphData?.edges?.length;
    onSave?.(nodeLen, edgeLen);
  }, [data]);

  return <div id={id} ref={containerRef}></div>;
}
