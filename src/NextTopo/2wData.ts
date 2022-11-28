const mapNodeSize = (nodes, propertyName, visualRange) => {
  let minp = 9999999999;
  let maxp = -9999999999;
  nodes.forEach((node) => {
    node[propertyName] = Math.pow(node[propertyName], 1 / 3);
    minp = node[propertyName] < minp ? node[propertyName] : minp;
    maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
  });
  const rangepLength = maxp - minp;
  const rangevLength = visualRange[1] - visualRange[0];
  nodes.forEach((node) => {
    node.size =
      ((node[propertyName] - minp) / rangepLength) * rangevLength +
      visualRange[0];
  });
};

export async function drawBigData() {
  return await fetch(
    'https://gw.alipayobjects.com/os/basement_prod/0b9730ff-0850-46ff-84d0-1d4afecd43e6.json',
  )
    .then((res) => res.json())
    .then((data) => {
      data.nodes.forEach((node) => {
        node.label = node.olabel;
        node.labelCfg.style = {
          fontSize: 1.3,
        };
        node.degree = 0;
        data.edges.forEach((edge) => {
          if (edge.source === node.id || edge.target === node.id) {
            node.degree++;
          }
        });
      });
      console.log('原始数据', data.nodes.length, data.edges.length);
      mapNodeSize(data.nodes, 'degree', [1, 15]);
      return data;
    });
}
