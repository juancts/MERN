

import React from 'react'
import { useContext } from 'react'
import { context } from '../context/PostContext'





export const Home = () =>{
  const myContext = useContext(context)  
  
  return (
    <div>Homes
    {console.log(myContext)}
      <button >Add</button>
    </div>
  )
}

