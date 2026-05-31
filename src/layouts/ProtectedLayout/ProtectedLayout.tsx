import { Navigate, Outlet } from "react-router-dom";
import styles from './ProtectedLayout.module.scss'
import { useEffect, useState } from "react";
import { verifyAuthentication } from "../../api/auth";
import { UnauthorizedError } from "../../api/common";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated'

export default function ProtectedLayout() {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')

    useEffect(() => {
        let mounted = true

        const verifyAuth = async () => {
            try {
                await verifyAuthentication("throwOnly")
                if (mounted) {
                    setAuthStatus('authenticated')
                }
            } catch (error) {
                if (!(error instanceof UnauthorizedError)) {
                    throw error
                }
                if (mounted) {
                    setAuthStatus('unauthenticated')
                }
            }
        }

        verifyAuth().catch(error => console.error(error)) // TODO: This error should be handled appropriately

        return () => {
            mounted = false
        }
    }, [])

    if (authStatus === 'checking') {
        return <main className={styles.layout}>Checking authentication...</main>
    }

    if (authStatus === 'unauthenticated') {
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