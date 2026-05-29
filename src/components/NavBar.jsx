import styles from './NavBar.module.css'



function NavBar({step, setStep}) { 


    return( 
            <div className={styles.navbar}>
            <div className={styles.title}>Create Event</div> 
                <ul> 
                    <li onClick={() => setStep(1)}
                    className={step === 1 ? styles.active : ''}>
                    Basic Information
                    </li> 
                        
                    <li onClick= {() => setStep(2)}
                    className={step === 2 ? styles.active : ''}>
                    Details
                    </li> 
                            
                    <li onClick= {() => setStep(3)}
                    className={step === 3 ? styles.active : ''}> 
                    Dates
                    </li> 
                </ul> 
            </div> 
    )
} 

export default NavBar