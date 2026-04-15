import styles from './Header.module.css'
import crewfare from './../../public/crewfare.svg'

function Header() {
    return(
        <div className={styles.header}>
        <img className={styles.img} src={crewfare} alt="logo" />
        </div>
    )
}

export default Header