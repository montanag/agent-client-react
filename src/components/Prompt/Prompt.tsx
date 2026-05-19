import styles from './Prompt.module.scss'

function Prompt() {
    return (
        <>
            <input className={styles.promptInput} placeholder='Hello'></input>
        </>
    )
}

export default Prompt