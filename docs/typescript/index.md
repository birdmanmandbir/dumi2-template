## 编辑对象数组并返回

```ts
type TableDto = {
  a: string;
  b: string;
  c: number;
};

function editTable(
  data: Record<string, any>,
  key: string,
  index: number,
  newVal: string,
) {
  data[index][key] = newVal;
  // 如果是react, 需要lodash cloneDeep
  return data;
}

const tableData: TableDto[] = [
  {
    a: '12',
    b: '13',
    c: 1,
  },
];

const ret = editTable(tableData, 'a', 0, '123213');

console.log(ret);
```
