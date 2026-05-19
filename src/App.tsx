import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'
import Prompt from './components/Prompt/Prompt'

function App() {
  return (
    <div className='flex column grow'>
      <div>sidebar</div>
      <div className='content'>
        <div>header</div>
        <Prompt></Prompt>
        <div>footer</div>
      </div>
    </div>
  )
}

export default App
