import {useState } from 'react'
import styles from './ButtonToggle.module.css'

function ButtonToggle() {

    const [active, SetActive] = useState('enable')
    
    return(
            <div className={styles.toggle}>
                <button 
                    className={ active === 'enable' ? styles.active : styles.inactive}
                    onClick={() => setActive('enable')}>
                    Enable Event
                </button>
                
                <button 
                    className={ active === 'disable' ? styles.active : styles.inactive}
                    onClick={() => setActive('disable')}>
                    Disable Event
                </button>
            </div>
    )
}

export default ButtonToggle