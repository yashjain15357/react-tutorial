import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AddTodo from "./Component/AddTodo"
import Todo from "./Component/Todos"
import Todos from './Component/Todos'
function App() {
  
  return (
    <>
      <h1 className='flex justify-center'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App