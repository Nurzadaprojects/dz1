import { useState } from 'react'
import './App.css'
import { Counter } from './features/counter/Counter'
import {UserList} from "./features/users/UserList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Counter />*/}
        <UserList />
    </>
  )
}

export default App
