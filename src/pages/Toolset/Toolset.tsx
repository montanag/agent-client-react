import { useParams } from 'react-router-dom'

export default function Toolset() {
    const { toolsetUuid } = useParams()

    return <>
        Toolset {toolsetUuid}
    </>
}