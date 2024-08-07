import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const[input,setInput] = useState("");
    const[result,setResult] = useState("")
    const handleCaculation = () => {
        if(input === ""){
            setResult("Error")
        }else{
            let sanitizedInput = input.replace('--', '+');
            let outcome = eval(sanitizedInput);
            // setInput(outcome.toString());
            setResult(outcome);
        }
    }
    const clearAll = () => {
        setInput("")
        setResult("")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>React Calculator</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <p>{result}</p>
      <div>
        <div className='container'> 
            <button onClick={()=>setInput((prev)=>prev+7)}>7</button>
            <button onClick={()=>setInput((prev)=>prev+8)}>8</button>
            <button onClick={()=>setInput((prev)=>prev+9)}>9</button>
            <button onClick={()=>setInput((prev)=>prev+"+")}>+</button>
        </div>
        <div className='container'>
            <button onClick={()=>setInput((prev)=>prev+4)}>4</button>
            <button onClick={()=>setInput((prev)=>prev+5)}>5</button>
            <button onClick={()=>setInput((prev)=>prev+6)}>6</button>
            <button onClick={()=>setInput((prev)=>prev+"-")}>-</button>
        </div>
        <div className='container'>
            <button onClick={()=>setInput((prev)=>prev+1)}>1</button>
            <button onClick={()=>setInput((prev)=>prev+2)}>2</button>
            <button onClick={()=>setInput((prev)=>prev+3)}>3</button>
            <button onClick={()=>setInput((prev)=>prev+"*")}>*</button>
        </div>
        <div className='container'>
            <button onClick={clearAll}>C</button>
            <button onClick={()=>setInput((prev)=>prev+0)}>0</button>
            <button onClick={handleCaculation}>=</button>
            <button onClick={()=>setInput((prev)=>prev+"/")}>/</button>
        </div>
        
      </div>

    </div>
  )
}

export default Calculator
