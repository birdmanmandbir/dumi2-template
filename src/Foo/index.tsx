import { add } from '@/utils/common.util';
import React, { useState, type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  return (
    <div>
      <label htmlFor="a">
        a
        <input
          type="text"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="b">
        b
        <input
          type="text"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
        />
      </label>
      <h4>{add(a, b)}</h4>
    </div>
  );
};

export default Foo;
