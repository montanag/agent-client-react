import './App.scss'
import Prompt from './components/Prompt/Prompt'
import ToolsetExplorer from './components/ToolsetExplorer/ToolsetExplorer'
import WelcomeText from './components/WelcomeText/WelcomeText'
import type { Toolset } from './models/toolset'
import GMailLogo from './assets/gmail.png'
import GCalLogo from './assets/gcal.png'
import LinkedInLogo from './assets/linkedIn.png'


const tools: Toolset[] = [
  {
    uuid: "gmail-toolset-uuid",
    providerUuid: "google-uuid",
    name: "Gmail",
    img: GMailLogo
  },
  {
    uuid: "gcal-toolset-uuid",
    providerUuid: "google-uuid",
    name: "Google Calendar",
    img: GCalLogo
  },
  {
    uuid: "linkedIn-toolset-uuid",
    providerUuid: "linkedIn-uuid",
    name: "LinkedIn",
    img: LinkedInLogo
  }
]

function App() {
  return (
    <div className='flex column grow'>
      <div>sidebar</div>
      <div className='content'>
        <WelcomeText></WelcomeText>
        <Prompt></Prompt>
        <ToolsetExplorer tools={tools}></ToolsetExplorer>
      </div>
    </div>
  )
}

export default App
