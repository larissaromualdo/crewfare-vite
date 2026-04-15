import styles from './BasicInform.module.css'
import Button from './Button'

function BasicInform() {

    return(
        <div>
        <div className={styles.header}>Basic Information</div>
        <div className={styles.container}>
        <Button />
        <div>
            <p>Event Type</p>

        </div>
        <div>
            <p>Event Name</p>

        </div>

        </div>
        </div>
    )
}

export default BasicInform