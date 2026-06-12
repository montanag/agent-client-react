import { useParams } from 'react-router-dom'


export default function Provider() {
    const { providerUuid } = useParams()

    return <>
        Provider {providerUuid}
    </>
}