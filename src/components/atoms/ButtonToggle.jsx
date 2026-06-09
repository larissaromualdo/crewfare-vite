import { useFormContext } from 'react-hook-form'
import styles from './ButtonToggle.module.css'

function ButtonToggle() {

    const { setValue, watch } = useFormContext()
    const active = watch('eventStatus')
    
    return(
            <div className={styles.toggle}>

                <button
                    type='button'
                    className={ active === 'enable' ? styles.active : styles.inactive}
                    onClick={() => setValue('eventStatus', 'enable')} >
                    Enable Event 
                </button>
                
                <button 
                    type='button'
                    className={ active === 'disable' ? styles.active : styles.inactive}
                    onClick={() => setValue('eventStatus', 'disable')} >
                    Disable Event
                </button>
            </div>
    )
}

export default ButtonToggle