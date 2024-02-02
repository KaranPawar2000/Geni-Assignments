import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setstate] = useState({count: 0,theme:'blue'});
const count =state.count;
const theme =state.theme;

  function increment() {
  setstate(prevState=> {
    return {...prevState,count:prevState.count+1}
  })
  }

  function decrement() {
    setstate(prevState=>{
      return { ...prevState,count:prevState.count-1}
    })
  }

  
// const [count,setCount] =useState(0);

// function increment(){
//   setCount(prevCount=>prevCount+1);
// }

// function decrement(){
//   setCount(prevCount=>prevCount-1);
// }
  return (
    
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrement}>-</button>
    </>
  );

  }
export default App;
