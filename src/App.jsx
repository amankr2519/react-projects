import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'
import Newsitem from './components/Newsitem'

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <Newsboard category={category}/>
      <Newsitem></Newsitem>
    </div>
  )
}

export default App