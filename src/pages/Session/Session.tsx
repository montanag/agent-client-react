import { useParams } from "react-router-dom"

export default function Session() {
    const { sessionUuid } = useParams()

    return <>
        Session {sessionUuid}
    </>
}