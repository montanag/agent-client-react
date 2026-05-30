import { authenticateGoogle } from "../../api/auth"
import { GoogleSignInButton } from "../../components/GoogleSignInButton/GoogleSignInButton"
import styles from './SignIn.module.scss'

export default function SignIn() {

    const onSignIn = (googleCredential: string) => {
        console.log(googleCredential)
        const response = authenticateGoogle(googleCredential);
    }

    return <div className={styles.signIn}>
        <div className={styles.box}></div>
        <GoogleSignInButton onSuccess={onSignIn}></GoogleSignInButton>
    </div>
}