import React, { useState } from 'react'

import { rootContext } from './Context';
import Layout from './components/Layout';

export default function App() {
  const [topics,setTopics] = useState([])
  
  return (
    <rootContext.Provider value={{topics ,setTopics}} > 
     
        
     
      <Layout></Layout>
    </rootContext.Provider >
  )
}
