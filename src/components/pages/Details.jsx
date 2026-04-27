import styles from './Details.module.css'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

function Details() {

    const navigate = useNavigate()
   
    return(
        <div className={styles.open}>
        <div className={styles.header}>
            <div className={styles.title}>Details</div>
        </div>

        <div className={styles.border}>
        <div className={styles.container}></div>


        </div>
        

         <div className={styles.controls}>
                <button className={styles.navbutton} onClick={() => navigate('/')}>
                <img src="/arrow-left.svg" alt="Anterior" />
                </button>
                <button className={styles.navbutton} onClick={() => navigate('/dates')}>
                <img src="/arrow-right.svg" alt="Avançar" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    text="Next" 
                    onClick={() => navigate('/dates')}
                />
            </div>
       </div> 
    )
}

export default Details