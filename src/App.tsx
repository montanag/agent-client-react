import './App.scss'
import Prompt from './components/Prompt/Prompt'
import ToolsetExplorer from './components/ToolsetExplorer/ToolsetExplorer'
import WelcomeText from './components/WelcomeText/WelcomeText'
import type { Toolset } from './models/toolset'
import { useEffect, useState } from 'react'
import { getToolsets } from './api/toolsets'


function App() {
  const [toolsets, setToolsets] = useState<Toolset[] | undefined>(undefined)

  useEffect(() => {
    // Get the token for the voice chat
  })

  useEffect(() => {
    // Get the available tools
    const fetchTools = async () => {
      const toolsets = await getToolsets();
      setToolsets(toolsets);
    }
    fetchTools();
  }, [])

  return (
    <div className='flex column grow'>
      <div>sidebar</div>
      <div className='content'>
        {toolsets ? JSON.stringify(toolsets) : 'Nope'}
        <WelcomeText></WelcomeText>
        <Prompt></Prompt>
        <ToolsetExplorer tools={toolsets}></ToolsetExplorer>
      </div>
    </div>
  )
}

export default App
