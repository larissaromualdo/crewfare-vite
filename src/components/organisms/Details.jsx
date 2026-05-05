import styles from './Details.module.css'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NumberButton from '../atoms/NumberButton'

function Details() {

    const navigate = useNavigate()
   const [minNights, setMinNights] = useState(1)

    return(
        <div className={styles.open}>
            <div className={styles.header}>
            <div className={styles.title}>Details</div>
            </div>

            <div className={styles.border}>
            <div className={styles.container}>

            <div className={styles.select_big}>
            <div className={styles.select_title}>Link</div>
            <div className={styles.text_container}>
                <input 
                className={styles.input_text}
                 placeholder="Enter Link"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Event Address</div>
            <div className={styles.text_container}>
                <input 
                className={styles.input_text}
                 placeholder="Enter Event Address"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Venue Name</div>
            <div className={styles.text_container}>
                <input 
                className={styles.input_text}
                 placeholder="Enter Venue Name"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Feature Hotels Title</div>
            <div className={styles.text_container}>
                <input 
                className={styles.input_text}
                 placeholder="Enter Feature Hotels Title"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Minimum Nights</div>
            <NumberButton
            value={minNights}
            setValue={setMinNights}
            />
        </div>
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
        </div>
    )
}

export default Details