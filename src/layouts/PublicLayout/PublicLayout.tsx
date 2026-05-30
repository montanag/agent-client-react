import { Outlet } from "react-router-dom";
import styles from './PublicLayout.module.scss'

export default function PublicLayout() {
    return (
        <main className={styles.layout}>
            <Outlet />
        </main>
    )
}