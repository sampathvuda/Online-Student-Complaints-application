import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import App from './App'
import Add from './Add'
import Edit from './Edit'
import Delete from './Delete'


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/create' element={<Add />} />
            <Route path='/update/:id' element={<Edit />} />
            <Route path='/delete' element={<Delete />} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter