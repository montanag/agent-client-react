import { authenticateGoogle } from "../../api/auth"
import { GoogleSignInButton } from "../../components/GoogleSignInButton/GoogleSignInButton"
import styles from './SignIn.module.scss'

export default function SignIn() {
    const onSignIn = async (googleCredential: string) => {
        await authenticateGoogle(googleCredential);
        window.location.href = '/'
    }

    return <div className={styles.signIn}>
        <GoogleSignInButton onSuccess={onSignIn}></GoogleSignInButton>
    </div>
}