import styles from './NavBar.module.css'

function NavBar({steps, goToStep, stepIndex, errors}) { 


    return( 
            <div className={styles.container}>
            <div className={styles.navbar}>
            <div className={styles.title}>Create Event</div> 

                <ul className={styles.ul}> 
                    {steps.map((item, index) => {
                    const hasError = item.fields.some((field) => errors?.[field]) 
                    //verificação se algum campo tem erro - nao foi preenchido.

                    return (
                    <li 
                    key={item.id}
                    onClick={() => goToStep(index)}
                    className={`${stepIndex === index ? styles.active : ''} ${hasError ? styles.errorStep : ''}`} >

                    <div className={`${styles.circle} ${stepIndex === index ? styles.circleActive : ''} ${hasError ? styles.circleError : ''}`}>{item.id} </div>

                    <span className={`${styles.item} ${stepIndex === index ? styles.itemActive : ''} ${hasError ? styles.itemError : ''}`}> {item.label}
                    </span>

                    </li> 
                    )})}
                </ul> 
            </div> 
            </div>
    )
} 

export default NavBar
