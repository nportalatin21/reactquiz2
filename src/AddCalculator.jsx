import React from "react";
import { useState } from "react";

export const AddCalculator = () => {
  let [add1, setAdd1] = useState(0);
  let [add2, setAdd2] = useState(0);
  let [add3, setAdd3] = useState(0);
  //let [total, setTotal] = useState('');

  const onHandleClick = () => {
    setAdd1(++add1);
  };

  const onHandlePush = () => {
    setAdd2((add2 = +add2 + 2));
  };

  const onHandleChevy = () => {
    setAdd3((add3 = +add3 + 3));
  };
  //   const onHandleReset = () => {
  //     setAdd('');
  //     setCounter(0)
  //   }
  return (
    <div className="Main">
      <button onClick={() => onHandleClick(add1)}>Add 1</button>
      <button onClick={() => onHandlePush(add2)}>Add 2</button>
      <button onClick={() => onHandleChevy(add3)}>Add 3</button>
      Total: {add1 + add2 + add3}
    </div>
  );
};
