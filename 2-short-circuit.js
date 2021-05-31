import React, { useState } from 'react';

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');
  // const [text, setText] = useState('aaaa');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
    <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1>
    {/* {if(){console.log('hello world')}} */}

    <h1>{text || 'if it is string or empty, bring back whatever here'}</h1>
    {text && <h1>Hello Bahasht</h1>}
    {/* or like that */}
    {!text && <h1>Hello Bahasht</h1>}
    </>



  );
  // <h2>short circuit</h2>;
};

export default ShortCircuit;
