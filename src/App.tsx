import './App.scss'
import Prompt from './components/Prompt/Prompt'
import ToolsetExplorer from './components/ToolsetExplorer/ToolsetExplorer'
import WelcomeText from './components/WelcomeText/WelcomeText'
import type { Toolset } from './models/toolset'
import { useEffect, useState } from 'react'
import { getToolsets } from './api/toolsets'
import { RealtimeAgent, RealtimeSession, tool } from '@openai/agents-realtime'
import z from 'zod'


const getWeather = tool({
  name: "get_weather",
  description: "Get the current weather for a city",
  parameters: z.object({
    city: z.string().describe("The city name"),
  }),
  execute: async ({ city }) => {
    console.log(`Getting weather for ${city}...`);
    // Your actual logic here — call an API, DB, etc.
    return `The weather in ${city} is sunny and 72°F.`;
  },
});

const startSession = async () => {
  const agent = new RealtimeAgent({
    name: "Assistant",
    instructions: "You are a helpful voice assistant. You speak English.",
    tools: [getWeather],
  });
  console.log("Created agent");

  const session = new RealtimeSession(agent, {
    model: "gpt-realtime",
  });
  console.log("Started session");

  try {
    await session.connect({
      apiKey: "redacted",
    });
  } catch (err) {
    console.error("Failed to connect:", err);
    return;
  }

  console.log("Connected")
}


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
        {/* {toolsets ? JSON.stringify(toolsets) : 'Nope'} */}
        <WelcomeText></WelcomeText>
        <Prompt></Prompt>
        <ToolsetExplorer tools={toolsets}></ToolsetExplorer>
        <button onClick={startSession}>Start session</button>
      </div>
    </div>
  )
}

export default App
