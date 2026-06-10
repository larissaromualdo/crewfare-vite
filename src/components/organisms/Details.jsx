import styles from './Details.module.css'
import Button from '../atoms/Button'
import NumberButton from '../atoms/NumberButton'
import { useFormContext, useFieldArray } from 'react-hook-form'

function Details({setStep}) {

   const {
    register,
    formState: {errors}
   } = useFormContext()

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
                className={`${styles.input_text} ${errors.Link ? styles.input_error : ''}`}
                 placeholder="Enter Link"
                type="text"
                {...register('Link')}
                />      
                <span className={styles.error}> {errors.Link?.message}</span>        
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Event Address</div>
            <div className={styles.text_container}>
                <input 
                className={`${styles.input_text} ${errors.EventAddress ? styles.input_error: ''}`}
                 placeholder="Enter Event Address"
                type="text"
                {...register('EventAddress')}
                />             
                <span className={styles.error}>{errors.EventAddress?.message}</span> 
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Venue Name</div>
            <div className={styles.text_container}>
                <input 
                className={`${styles.input_text} ${errors.VenueName ? styles.input_error: ''}`}
                 placeholder="Enter Venue Name"
                type="text"
                {...register('VenueName')}
                />       
                <span className={styles.error}>{errors.VenueName?.message}</span>       
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Feature Hotels Title</div>
            <div className={styles.text_container}>
                <input 
                className={`${styles.input_text} ${errors.FeatureHotelsTitle ? styles.input_error: ''}`}
                 placeholder="Enter Feature Hotels Title"
                type="text"
                {...register('FeatureHotelsTitle')}
                />   
                <span className={styles.error}>{errors.FeatureHotelsTitle?.message}</span>           
            </div>
            </div>

            <div className={styles.select}>
            <div className={styles.select_title}>Minimum Nights</div>
            <NumberButton 
            name="minimumNights"
            hasError={!!errors.minimumNights}
            errorMessage={errors.minimumNights?.message}
            />

        </div>
        </div>

        <div className={styles.controls}>
                <button className={styles.navbutton} onClick={() => setStep(1)}>
                <img src="/arrow-left.svg" alt="Anterior" />
                </button>
                <button className={styles.navbutton} onClick={() => setStep(3)}>
                <img src="/arrow-right.svg" alt="Avançar" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    text="Next" 
                    onClick={() => setStep(3)}
                />
            </div>
        </div> 
        </div>
    )
}

export default Details