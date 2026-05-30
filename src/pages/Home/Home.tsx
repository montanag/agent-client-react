import { useEffect, useState } from "react"
import { GoogleSignInButton } from "../../components/GoogleSignInButton/GoogleSignInButton"
import Prompt from "../../components/Prompt/Prompt"
import ToolsetExplorer from "../../components/ToolsetExplorer/ToolsetExplorer"
import WelcomeText from "../../components/WelcomeText/WelcomeText"
import { RealtimeAgent, RealtimeSession, tool as createOpenAiTool } from '@openai/agents-realtime'
import type { Toolset } from "../../models/toolset"
import type { Tool } from "../../models/tool"
import { executeTool, getTools } from "../../api/tools"
import { createVoiceSession } from "../../api/session"
import { getToolsets } from "../../api/toolsets"
import styles from './Home.module.scss'


export default function Home() {
    const [toolsets, setToolsets] = useState<Toolset[] | undefined>(undefined)
    const [tools, setTools] = useState<Tool[] | undefined>(undefined)

    useEffect(() => {
        // Get the token for the voice chat
    }, [])

    useEffect(() => {
        const fetchTools = async () => {
            const tools: Tool[] = await getTools();
            setTools(tools)
        }
        fetchTools();
    }, [])

    useEffect(() => {
        // Get the available tools
        const fetchToolsets = async () => {
            const toolsets = await getToolsets();
            setToolsets(toolsets);
        }
        fetchToolsets();
    }, [])


    const startSession = async () => {
        // Map the tools
        console.log(tools)
        if (!tools) {
            console.error("No tools retrieved yet")
            return;
        }

        const mappedTools = tools.map(tool => createOpenAiTool({
            name: tool.name,
            description: tool.description,
            parameters: tool.inputSchema,
            execute: async (input) => {
                const toolResult = await executeTool(tool.uuid, input)
                console.log("Executing tool with input", input)
                return toolResult;
            }
        }))

        const agent = new RealtimeAgent({
            name: "Assistant",
            instructions: "You are a helpful voice assistant. You speak English.",
            tools: mappedTools,
        });
        console.log("Created agent");

        const session = new RealtimeSession(agent, {
            model: "gpt-realtime",
        });
        console.log("Started session");

        const ephemeral_token = await createVoiceSession()

        try {
            await session.connect({
                apiKey: ephemeral_token.token,
            });
        } catch (err) {
            console.error("Failed to connect:", err);
            return;
        }

        console.log("Connected")
    }

    return <div className={styles.home}>
        {/* {toolsets ? JSON.stringify(toolsets) : 'Nope'} */}
        <GoogleSignInButton onSuccess={(googleCredential) => { console.log(googleCredential) }}></GoogleSignInButton>
        <WelcomeText></WelcomeText>
        <Prompt></Prompt>
        <ToolsetExplorer tools={toolsets}></ToolsetExplorer>
        <button onClick={startSession}>Start session</button>
    </div>
}