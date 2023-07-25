import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import './App.css'
import TodoList from './TodoList'
import Navbar from './NavBar'

function App() {
  

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
