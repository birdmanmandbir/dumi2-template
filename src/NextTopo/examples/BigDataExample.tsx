import { useRequest } from 'ahooks';
import React, { useState } from 'react';
import NextTopo, { NextTopoProps } from '../';
import { drawBigData } from '../2wData';

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
  const { data, loading } = useRequest(drawBigData);
  const [nodeSize, setNodeSize] = useState(0);
  const [edgeSize, setEdgeSize] = useState(0);

  const onSave: NextTopoProps['onSave'] = (nodeLen, edgeLen) => {
    setNodeSize(nodeLen);
    setEdgeSize(edgeLen);
  };

  return (
    <div>
      {loading && <div>正在渲染大规模数据，请稍等……</div>}
      {!loading &&
        `节点数量：${nodeSize}, 边数量：${edgeSize}, 图元数量：${
          nodeSize * 2 + edgeSize
        }`}
      <NextTopo
        id="container"
        config={config}
        data={data}
        onSave={onSave}
      ></NextTopo>
    </div>
  );
}
