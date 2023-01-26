import Input from "./Input"
import Output from "./Output"
import React, { useEffect, useState, useRef } from 'react';


function Translate() {

  const [input, setInput] = useState('');
  const handleInputChangeOnclick = (data) => {
    setInput(data);
  };
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(input)
  },[input]);


  return (
    <div className="">
      <Input inputClick={ handleInputChangeOnclick }/>
      <Output />
    </div>
  )
}

export default Translate