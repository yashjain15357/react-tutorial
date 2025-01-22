import { useState } from 'react'//{hooks name, hook name}


import './App.css'

function App() {
  let [value, setvaluer] = useState(5) // return two value in array form setvaluer is a function that responsible for change the value in interface

  // let value =10
  const increasevalue = () => {
    // console.log(value)
    if (value<20){
      value = value + 1
      setvaluer(value)
      console.log(value)
    }
  }
  const decreasevalue = () => {
    if(value>0){

      value = value - 1
      setvaluer(value)
      console.log(value)
    }
  }

  return (
    <>
      <h1>counter project for future</h1>
      <h2>count value {value}</h2>
      <button
        onClick={increasevalue}>increace value</button><br />
      <button
        onClick={decreasevalue}>decrease value</button>
    </>
  )
}

export default App
