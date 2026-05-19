import type { Toolset } from "../../models/toolset"
import styles from './CompactToolView.module.scss'

function CompactToolsetView({ toolset }: { toolset: Toolset }) {
    return (
        <div className={styles.toolset}>
            <img src={toolset.img} className={styles.toolsetLogo}></img>
            <span>{toolset.name}</span>
            {/* <button className={styles.addBtn}>+</button> */}
        </div>
    )
}

export default CompactToolsetView