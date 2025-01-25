import { useState ,useEffect, useCallback,useRef} from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [Input, setInput] = useState("")
  const [numberAllow , setnumber]= useState(false)
  const [charAllow , setchar]= useState(false)
  const passwordRef = useRef(null)
  const paswordGenerat = useCallback (() => {
    let str = "qwertyuiopasdfghjklzxcvbnm"
    let num = "7894561230"
    let char = "/*-+,./<>?_-{}[]()"
    let pass = ""
    if (charAllow)str+=char;
    if (numberAllow)str+=num;
    for (let index = 0; index < Length; index++) {
      const random = Math.floor(Math.random()* str.length + 1)
      pass+=str.charAt(random)

    }
setInput(pass)
console.log(pass);
},[Length,charAllow,numberAllow,setInput])
useEffect(() => {
  paswordGenerat()
}, [Length, numberAllow, charAllow, setInput])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(Input)
}, [Input])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-3xl'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none w-full py-1 px-3 border-3 border-white" type="text"
          placeholder='Password'
          value={Input}
          readOnly 
          ref={passwordRef}/>
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >COPY</button>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="range"
          min={8}
          max={100}
          className="cursor-pointer"
          onChange={(e) => { setLength(e.target.value) }}
          value={Length}
        />
        <label>Length:{Length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={setnumber}
        onChange={() => {
          setnumber((prev) => !prev )
      }}
        />
        <label>Number</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={setchar}
        onChange={() => {
          setchar((prev) => !prev )
      }} />
        <label>Character</label>
      </div>
    </div>

  )
}

export default App
