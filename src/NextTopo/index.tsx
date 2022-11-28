import G6, { Graph, GraphOptions } from '@antv/g6';
import { useRequest } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import { drawBigData } from './2wData';

export type NextTopoProps = {
  id: string;
  config: Omit<GraphOptions, 'container' | 'width' | 'height'>;
  onLoad?: () => void;
};

export default function NextTopo({ id, config }: NextTopoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphState, setGraphState] = useState<Graph>();

  const width = containerRef.current?.scrollWidth;
  const height = containerRef.current?.scrollHeight || 500;

  const { data, loading } = useRequest(async () => drawBigData(graphState), {
    refreshDeps: [graphState],
  });
  const { nodeLen, edgeLen } = data ?? {};

  useEffect(() => {
    const realConfig = {
      ...config,
      width,
      height,
      container: id,
    };
    const graph = new G6.Graph(realConfig);
    setGraphState(graph);
    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div id={id} ref={containerRef}>
      {loading && <div>正在渲染大规模数据，请稍等……</div>}
      {!loading &&
        `节点数量：${nodeLen}, 边数量：${edgeLen}, 图元数量：${
          nodeLen * 2 + edgeLen
        }`}
    </div>
  );
}
