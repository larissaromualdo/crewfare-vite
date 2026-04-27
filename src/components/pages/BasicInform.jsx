import styles from './BasicInform.module.css'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import ButtonToggle from './ButtonToggle'
import OverlayBox from './OverlayBox'


function BasicInform() {

    const navigate = useNavigate()
    
    return(
    
        <div className={styles.open}>
            <div className={styles.header}>
            <div className={styles.title}>Basic Information</div>
            </div>

            <div className={styles.border}>
            <div className={styles.container}>
                <div className={styles.item}>
                <ButtonToggle />
                </div>

                <div className={styles.select}> 
                <div className={styles.select_title}>Event Type</div>
                <select className={styles.select_box}>
                <option value="public">Public Event</option>
                <option value="private">Private Event</option>
                </select>
                <span className={styles.select_arrow}>
                <img src='/arrow-down.svg'/>
                </span>
                </div>

                <div className={styles.select}>
                <div className={styles.select_title}>Event Name</div>
                <div className={styles.text_container}>
                    <input 
                    className={styles.text_container}
                    placeholder="Type here"
                    type="text"
                    />
                    
                </div>
                </div>

                <div className={styles.select_big}>
                <div className={styles.select_title}>Banner</div>
                <div className={styles.upload_banner}>
                <input id="file_upload" className={styles.upload_input} type="file" />
                <label htmlFor="file_upload" className={styles.upload_icon}>
                    <div className={styles.upload_icon}>
                        <img src='/archive-upload.svg' />
                        <p>Click or drop image</p>
                    </div>
                </label>
                </div>
                </div>

                <div className={styles.select_big}>
                <OverlayBox />
                    
            </div> 
            </div>
        </div>

            <div className={styles.controls}>
                <button className={styles.navbutton}>
                <img src="/arrow-left-gray.svg" alt="left" />
                </button>
                <button className={styles.navbutton} onClick={() => navigate('/details')}>
                <img src="/arrow-right.svg" alt="Avançar" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    text="Next" 
                    onClick={() => navigate('/details')}
                />
            </div>
        </div>
    )
       
}


export default BasicInform