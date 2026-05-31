import { useEffect, useRef } from "react";
import styles from './GoogleSignInButton.module.scss'

declare global {
    interface Window { google?: any }
}

export function GoogleSignInButton({ onSuccess }: { onSuccess: (googleCredential: string) => void }) {
    const divRef = useRef<HTMLDivElement>(null);
    const onSuccessRef = useRef(onSuccess);
    onSuccessRef.current = onSuccess;

    useEffect(() => {
        const initializeGoogle = () => {
            if (!divRef.current) return;

            window.google!.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: (response: { credential: string }) => onSuccessRef.current(response.credential),
            });

            window.google!.accounts.id.renderButton(divRef.current, { theme: "filled_blue", size: "large" });
        };

        if (window.google) {
            // Script already loaded (e.g. navigating back to this page)
            initializeGoogle();
        } else {
            // Wait for it to load
            const script = document.querySelector<HTMLScriptElement>('script[src*="accounts.google.com/gsi/client"]');
            script?.addEventListener('load', initializeGoogle);
            return () => script?.removeEventListener('load', initializeGoogle);
        }
    }, []);

    return <div className={styles.wrapper} ref={divRef} />;
}
