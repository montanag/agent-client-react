import { executeTool } from "../../api/tools"
import type { Toolset } from "../../models/toolset"
import styles from './CompactToolView.module.scss'

function CompactToolsetView({ toolset }: { toolset: Toolset }) {
    const toolsetClicked = async () => {
        console.log(`Toolset clicked: ${toolset.name}`)
        await executeTool()
    }

    return (
        <div className={styles.toolset} onClick={toolsetClicked}>
            <img src={toolset.imgUrl} className={styles.toolsetLogo}></img>
            <span>{toolset.name}</span>
            {/* <button className={styles.addBtn}>+</button> */}
        </div>
    )
}

export default CompactToolsetView