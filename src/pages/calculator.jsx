import React, { useState } from 'react';
import './calculator.css'

const Calculater = () => {
  const [input, setinput] = useState('');
  const [result, setresult] = useState(false);
  const [operater, setoperater] = useState('')

  const handlechange = (e) => {
    const inputvalue = e.target.value;
    setinput(inputvalue);
  }

  const handleinput = (value) => {
    // if result value is showing
    // clear
    setinput(input + value);

    if (result) {
      setinput(value);
      setresult(false);
    }
  }

  const myeval = () => {
    const str = input.split(operater)
    let result;
    if (operater == "+") {
      result = parseInt(str[0]) + parseInt(str[1]);
    } else if (operater == "-") {
      result = parseInt(str[0]) - parseInt(str[1]);
    } else {
    }
    setinput(result)
    setresult(true);
  }

  const clearinput = () => {
    setinput('')
  }
  const handleoperater = (operater) => {
    setinput(input + operater);
    setoperater(operater);

  }

  return (
    <div>
      <h1>Calculator</h1>
      <input className='input' value={input} onChange={handlechange} />
      <div className='container'>
        <button className='btn' onClick={() => handleinput("7")} >7</button>
        <button className='btn' onClick={() => handleinput("8")} >8</button>
        <button className='btn' onClick={() => handleinput("9")} >9</button>
        <button className='btn' onClick={() => handleoperater("%")} >%</button>


        <button className='btn' onClick={() => handleinput("4")} >4</button>
        <button className='btn' onClick={() => handleinput("5")} >5</button>
        <button className='btn' onClick={() => handleinput("6")} >6</button>
        <button className='btn' onClick={() => handleoperater("-")} >-</button>


        <button className='btn' onClick={() => handleinput("1")} >1</button>
        <button className='btn' onClick={() => handleinput("2")} >2</button>
        <button className='btn' onClick={() => handleinput("3")} >3</button>
        <button className='btn' onClick={() => handleoperater("+")} >+</button>


        <button className='btn' onClick={() => clearinput()} >C</button>
        <button className='btn' onClick={() => handleinput("0")} >0</button>
        <button className='btn' onClick={() => handleoperater("*")} >*</button>
        <button className='btn' onClick={() => myeval('str')} >=</button>

      </div>
    </div>
  )
}

export default Calculater;
