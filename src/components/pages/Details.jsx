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
            <div className={styles.container}>

            <div className={styles.select_big}>
            <div className={styles.select_title}>Link</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                 placeholder="Enter Link"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Event Address</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                 placeholder="Enter Event Address"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Venue Name</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                 placeholder="Enter Venue Name"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Feature Hotels Title</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                 placeholder="Enter Feature Hotels Title"
                type="text"
                />              
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Minimum Nights</div>
            <div className={styles.text_container}>
                <input 
                className={styles.text_container}
                type="number"
                placeholder="Enter Minimum Nights"
                min="1"
                step="1"
                value="1"
                /> 

                <div>
                <button type="button" className={styles.button_on}>
                    <img className={styles.button_on}
                    src='/up-arrow.svg' />
                </button>  
                <button type="button" className={styles.button_down}>
                    <img className={styles.button_down}
                     src='/arrow-down.svg' />
                </button>   
                </div>          
            </div>
            </div>
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
    )
}

export default Details