import React, { useState, useEffect } from 'react';



const ShowHide = () => {
  const [show, setShow] = useState(false);


  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {show ? <Item />: null} // wowowowo
      {/* {show && <Item />} */}
    </>
  )
};

{/* <h2>show/hide</h2>; */}

// See kaka we can have html bellow and used above LOVEEE
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize); // this becomes the clean up kaka
    }
  }, [])

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h1>size: {size} px</h1>
    </div>
  )
}



export default ShowHide;
