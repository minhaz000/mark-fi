import React, { useState } from 'react'
import { rootContext } from './Context';
import Layout from './components/Layout';

export default function App() {
  const [user,setUser] = useState("mihaz")
  
  return (
    <rootContext.Provider value={{user ,setUser }} > 
    <div>
    <Layout> </Layout>
    </div>
    </rootContext.Provider >
  )
}
