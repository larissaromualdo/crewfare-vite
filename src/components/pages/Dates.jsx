import styles from './Dates.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

function Dates() {
     
    const navigate = useNavigate()

    return(
        <div className={styles.open}>
            <div className={styles.header}>
            <div className={styles.title}>Dates</div>
            </div>
        
            <div className={styles.border}>
            <div className={styles.container}>
        
            <div className={styles.select_big}>
            <div className={styles.select_title}>Bookable Start & End Dates</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                type="text"
                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                />              
            </div>
            </div>

            <div className={styles.select_big}>
            <div className={styles.select_title}>Event Start and End Dates</div>
                <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                type="text"
                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                />              
                </div>
            </div>
    
            {/* ADD EVENT */}

            <div className={styles.select_big}>
                <div className={styles.select_title}>Default Check-In & Check-Out Dates</div>
                <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                type="text"
                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                />              
                </div>
            </div>

            <div className={styles.select_big}>
                <div className={styles.select_title}>Taxas & Fees</div>
            </div>

            <div className={styles.container_tree}>
                <div className={styles.item_tree}>
                <div className={styles.select_title}>Name</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container_tree}
                placeholder="Type here"
                type="text"
                />
            </div>
            </div>
            </div>
        </div>

            <div className={styles.controls}>
                <button className={styles.navbutton} onClick={() => navigate('/details')}>
                <img src="/arrow-left.svg" alt="Anterior" />
                </button>
                <button className={styles.navbutton}>
                <img src="/arrow-right-gray.svg" alt="right" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    text="Save" 
                    onClick={() => alert('salvo')}
                />
            </div>  
       </div>
       </div> 
       
    )
}

export default Dates