import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import ItemOfFolderScreen from './pages/ItemOfFolderScreen'
import Layout from './pages/layout'

const App:React.FC = () => {
  return(
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='component/:id' element={<ItemOfFolderScreen />}/>
      </Route>
    </Routes>
  )
}

export default App