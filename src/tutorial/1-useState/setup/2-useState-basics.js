// import React, { useState } from 'react';

// const UseStateBasics = () => {
//   return <h2></h2>;
// };

// export default UseStateBasics;

import React,{useState} from 'react';

const UseStateBasic=()=>{
  const [text,setText]=useState('FIRST');
  const changeTitle=()=>{
      if (text==='FIRST')
        setText('SECOND');
      else
        setText('FIRST');
  }
  

  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button type='btn' onClick={changeTitle}>CHANGE TITLE</button>
    </React.Fragment>
  )
}


export default UseStateBasic;
