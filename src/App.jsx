import React, { useState } from 'react'
import './App.css'; // Add some styles if needed
const App = () => {
   
  const[num1,setNum1] = useState('')
  const[num2,setNum2] = useState('')
  const[result,setResult] = useState('')
  const[error,setError] = useState('');

    const ValidateInputs = ()=>{
      if(!num1.trim() || !num2.trim()){
        setError("both the fields should not be empty")
        return false;
      }
      if(!isFinite(num1) || !isFinite(num2)){
        setError("please enter valid numbers")
        setResult('')
        return false
      }
      setError('')
      return true;
    }

    const handleAddition = ()=>{
      if(ValidateInputs()){
        setResult(Number(num1) + Number(num2))
        setError('')
      }
    }

    const handleSubtraction = ()=>{
      if(ValidateInputs()){
        setResult(Number(num1) - Number(num2))
      }
    }

    const handleMultiplication = () =>{
      if(ValidateInputs()){
        setResult(Number(num1) * Number(num2))
      }
    }

    const handleDivision = ()=>{
      if(ValidateInputs()){
        if(Number(num2)===0){
        setError('it cannot divided by zero')
        setResult(null)
        }else{
          setResult(Number(num1) / Number(num2))
        }

      }
    }
  return (
    <div>
      <input 
       type='text'
       value={num1}
       onChange={(e)=>setNum1(e.target.value)}
      />
       <input 
       type='text'
       value={num2}
       onChange={(e)=>setNum2(e.target.value)}
      />

      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>

      {error && <p className="error-message">{error}</p>}
      {result !== null && (
        <p className="success-message">Result: {result}</p>
      )}
    </div>
  )
}

export default App
