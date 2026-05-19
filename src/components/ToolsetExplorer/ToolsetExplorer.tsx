import type { Toolset } from "../../models/toolset"
import CompactToolsetView from "../CompactToolsetView/CompactToolView"
import styles from './ToolsetExplorer.module.scss'

function ToolsetExplorer({ tools }: { tools: Toolset[] }) {
    return (
        <div className={styles.exploreContainer}>
            <div className={styles.toolsetExplorer}>
                {tools.map(toolset => <>
                    <CompactToolsetView toolset={toolset}></CompactToolsetView>
                </>)}
            </div>
            <span>Explore More</span>
        </div>
    )
}

export default ToolsetExplorer