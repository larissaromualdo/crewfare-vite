import styles from './Dates.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import NumberButton from '../atoms/NumberButton'
import { useState } from 'react'

function Dates() {
     
    const navigate = useNavigate()
     const [minNights, setMinNights] = useState(1)


    return(
    <div className={styles.conteudo}>
    <div className={styles.open}>

        <div className={styles.header}>
            <div className={styles.title}>Dates</div>
        </div>

        <div className={styles.border}>
        <div className={styles.card}>
        <div className={styles.container}>


                <div className={styles.title_dates}>
                    <div className={styles.select_title}>Bookable Start & End Dates</div>
                </div>
    
                <div className={styles.calendar}>
                    <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                        <span className={styles.input_date}>MM/DD/YYYY - MM/DD/YYYY</span> 
                        <img alt="calendar" 
                        className={styles.calendar_ico}
                        src= './calendar.svg'
                        />
                    </div>
                    </div>
                </div>

                <div className={styles.title_dates}>
                    <div className={styles.select_title}>Event Start and End Dates</div>
                </div>

                
            <div className={styles.calendar}>
                <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                        <span className={styles.input_date}>MM/DD/YYYY - MM/DD/YYYY</span> 
                        <img alt="calendar" 
                        className={styles.calendar_ico}
                        src= './calendar.svg'
                        />
                    </div>
                </div>
            </div>

            <div>ADD EVENT</div>

            <div className={styles.title_dates}>
                    <div className={styles.select_title}>Default Check-In & Check-Out Dates</div>
                </div>

                
            <div className={styles.calendar}>
                <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                        <span className={styles.input_date}>MM/DD/YYYY - MM/DD/YYYY</span> 
                        <img alt="calendar" 
                        className={styles.calendar_ico}
                        src= './calendar.svg'
                        />
                    </div>
                </div>
            </div>

             <div className={styles.title_dates}>
                    <div className={styles.select_title}>Taxes & Fees</div>
                </div>


            <div className={styles.container_tree}>

            <div className={styles.item_tree}>
                <div className={styles.select_title}>Name</div>
            
                <div className={styles.text_container_tree}>
                <input
                className={styles.input_text}
                placeholder="Type here"
                type="text"
                />
            </div>
            </div>


            <div className={styles.item_four}>
                <div className={styles.select_title}>Amount</div>
            
                <div className={styles.text_container_four}>
                <NumberButton
                value={minNights}
                setValue={setMinNights}
                />
            </div>
            </div>
           
           <div className={styles.item_four}>
                <div className={styles.select_title}>Type</div>
            
                <div className={styles.text_container_four}>
                <input
                className={styles.input_text}
                placeholder="Fixed"
                type="text"
                />
            </div>
            </div>
            
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