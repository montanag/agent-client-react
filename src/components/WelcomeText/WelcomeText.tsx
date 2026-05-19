import styles from './WelcomeText.module.scss'

function WelcomeText() {
    const name = 'Montana';
    return <div>
        <h1 className={styles.welcomeHeader}>Welcome {name}</h1>
    </div>
}

export default WelcomeText