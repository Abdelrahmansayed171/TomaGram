import { useEffect, useState } from 'react'
import './index.css'
import useTheme from './contexts/ThemeContext/useTheme';

function App() {

  const { toggleDarkMode } = useTheme();

  return (
    <>
    <div className='bg-white dark:bg-slate-700 py-11 justify-center min-h-52 w-screen flex content-center'>
      <h1 className="dark:text-white text-4xl font-bold underline font-poppins">
        Hello world!
      </h1>
    </div>
      
      <button onClick={toggleDarkMode}>toggle</button>
    </>
  )
}

export default App
