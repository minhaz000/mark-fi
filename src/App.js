import React, { useState } from 'react'
import { rootContext } from './Context';
import Layout from './components/Layout';

export default function App() {
  const [topics,setTopics] = useState([])
  
  return (
    <rootContext.Provider value={{topics ,setTopics}} > 
    <div>
    <Layout> </Layout>
    </div>
    </rootContext.Provider >
  )
}
