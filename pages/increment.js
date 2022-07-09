import React, { useState } from 'react';

export default function increment() {
  const [counter, setCounter] = useState(0);

  const onClickIncrement = () => {
    // this is the same as the decriment.
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <div>Counter</div>
      <div>
        <h2>{counter}</h2>
        <button type="button" onClick={onClickIncrement}>
          Increment
        </button>
        <button type="button" onClick={() => setCounter((prevState) => prevState - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </>
  );
}

/*
This function is asynchrinous and as such it does not guarantee that counter has been updated prior to it incrimenting.
onClick={() => setCounter(counter - 1)}

setCounter((prevState) => prevState + 1)}
This function takes into account counters state, basically calling the setCounter,
this allows you to indirectly change the state vs directly changing state.
*/
