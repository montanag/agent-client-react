import { Navigate, Outlet } from "react-router-dom";
import styles from './ProtectedLayout.module.scss'

export default function ProtectedLayout({ isAuthenticated }: { isAuthenticated: boolean }) {
    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />
    }

    return (
        <main className={styles.layout}>
            <div>sidebar</div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </main>
    )
}