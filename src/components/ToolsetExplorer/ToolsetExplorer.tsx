import { Fragment } from "react/jsx-runtime"
import type { Toolset } from "../../models/toolsets.model"
import CompactToolsetView from "../CompactToolsetView/CompactToolView"
import styles from './ToolsetExplorer.module.scss'

function ToolsetExplorer({ tools }: { tools: Toolset[] | undefined }) {
    return (
        <div className={styles.exploreContainer}>
            <div className={styles.toolsetExplorer}>
                {tools && tools.map(toolset => <Fragment key={toolset.uuid}>
                    <CompactToolsetView toolset={toolset}></CompactToolsetView>
                </Fragment>)}
            </div>
            <span>Explore More</span>
        </div>
    )
}

export default ToolsetExplorer