import React from 'react'
import { RouterProvider } from 'react-router'
import router from './router'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App