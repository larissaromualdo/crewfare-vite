import styles from './Button.module.css'


function Button({text, onClick, type = 'button'}) {

    return(
        <button 
        className={styles.button} 
        type={type}
        onClick={onClick}>
             {text}
        </button>
    )
}

export default Button