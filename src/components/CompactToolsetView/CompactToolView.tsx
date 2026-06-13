// import { installToolset } from "../../api/providers.api"
import type { Toolset } from "../../models/toolsets.model"
import styles from './CompactToolView.module.scss'

function CompactToolsetView({ toolset }: { toolset: Toolset }) {
    const toolsetClicked = async () => {
        console.log(`Toolset clicked: ${toolset.name}`)
        // const installResponse = await installToolset()
        // window.location.href = installResponse.authorizationUrl;
    }

    return (
        <div className={styles.toolset} onClick={toolsetClicked}>
            {/* <img src={toolset.imgUrl} className={styles.toolsetLogo}></img> */}
            <span>{toolset.name}</span>
            {/* <button className={styles.addBtn}>+</button> */}
        </div>
    )
}

export default CompactToolsetView