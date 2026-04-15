import styles from './NavBar.module.css'
import { Link, useLocation } from 'react-router-dom' 

function NavBar() { 

    const location = useLocation()

    return( 
            <div className={styles.navbar}>
            <div className={styles.title}>Create Event</div> 
                <ul> 
                    <li>
                        <Link to='/' className={location.pathname === '/' ? styles.active : ""}> 
                        <span className={styles.circle}> 1 </span> 
                        <p className={styles.item}>Basic Information</p> 
                        </Link>
                    </li> 
                        
                    <li> 
                        <Link to='/details' className={location.pathname === "/details" ? styles.active : ""}> 
                        <span className={styles.circle}> 2 </span> 
                        <p className={styles.item}>Details</p> 
                        </Link> 
                    </li> 
                            
                    <li> 
                        <Link to='/dates' className={location.pathname === "/dates" ? styles.active : ""}> 
                        <span className={styles.circle}> 3 </span> 
                        <p className={styles.item}>Dates</p> 
                        </Link> 
                    </li> 
                </ul> 
            </div> 
    )
} 

export default NavBar