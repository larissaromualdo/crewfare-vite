import styles from './NavBar.module.css'



function NavBar({step, setStep}) { 


    return( 
            <div className={styles.container}>
            <div className={styles.navbar}>
            <div className={styles.title}>Create Event</div> 
                <ul className={styles.ul}> 
                    <li onClick={() => setStep(1)}
                    className={step === 1 ? styles.active : ''} >
                    <div className={`${styles.circle} ${step === 1 ? styles.circleActive : ''}`}> 1 </div>
                    <span className={`${styles.item} ${step === 1 ? styles.itemActive : ''}`}> Basic Information </span>
                    </li> 
                        
                    <li onClick= {() => setStep(2)}
                    className={step === 2 ? styles.active : ''}> 
                    <div className={`${styles.circle} ${step === 2 ? styles.circleActive : ''}`}> 2 </div>
                    <span className={`${styles.item} ${step === 2 ? styles.itemActive : ''}`}> Details </span>
                    </li> 
                            
                    <li onClick= {() => setStep(3)}
                    className={step === 3 ? styles.active : ''}> 
                    <div className={`${styles.circle} ${step === 3 ? styles.circleActive : ''}`}> 3 </div>
                   <span className={`${styles.item} ${step === 3 ? styles.itemActive : ''}`}> Dates </span>
                    </li> 
                </ul> 
            </div> 
            </div>
    )
} 

export default NavBar