import React from "react";
import './App.css';
import showingCount from "./components/ShowingCount";


function App() {
   let [num,setNum]= React.useState(0);

 const handleIncrement =()=>{
    setNum(num+1);
 }
 const handleDecrement =()=>{
    if(num===0) setNum(num=0);
    else setNum(num-1);
 }
 const handleDouble=()=>{
  setNum(num*2);
 }
  return (
    <div className="App">
      <h1>Using useState hook </h1>
      <div>{showingCount(num)}</div>
      {num%2==0 ? <h3 className="green">Even Number</h3> : <h3 className="red">Odd Number</h3>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
}

export default App;
